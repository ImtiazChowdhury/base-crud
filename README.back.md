# baseOperations  

Creates an object with base operations which can then be extended and overridden as required for each entity.


the goal of this class is to minimize repeating codes across entity operations.

For example: the algorithm for reading the detail of an entity will be pretty much same for almost all of the entities.

```js
//basic entity detail algorithm

validateId(id)

if(isArray(id)){
    return dbOps.readMany(id)
}else{
    return dbOps.readOne(id)
}
```

so we can have the above algorithm in this base class and this will perform the proper db operations as it is taking `dbOps` as a constructor parameter. so all we need to do in the actual operation entity file is to

1. import and extend this class
2. pass the formatters, validators and dbOps
3. export the extended class.

## basic usage

```js
//customer operations index.js file

const BaseOperations = require("path/to/this/class")

const formatters = {
    // ... formatters for create, update operations
    // detail operations doesn't need formatter
}

const validators = {
    details: (id)=>{ 
        // id validator
    }
    // ... validators for other operations like create, update and delete
}

const dbOps= {
    readOne : ()=>{
        //.. database readOne function 
    },
    readMany : ()=>{
        // ... database readMany function
    }
    //... db functions for other operations 
}
class CustomerOperations extends BaseOperations{
    constructor(){
        super(formatter, validator, dbOps)
    }
}

module.exports = CustomerOperations; 
```

and as the base methods  are already implemented in this base class it will take care of the detail operation along with other operations such as create, update, list and delete.

## overriding

And if  we ever need to change this algorithm for some entity we can just override it.

For example let's say we want to hide the password property of customer so we would get the customer detail from database and `delete` the password property. All we will have to do is  override the `detail` method of  this class with our custom function.

```js
//customer operations index.js file

const BaseOperations = require("path/to/this/class")

const formatters = {
    // ... formatters for create, update operations
    // detail operations doesn't need formatter
}

const validators = {
    details: (id)=>{ 
        // id validator
    }
    // ... validators for other operations like create, update and delete
}

const dbOps= {
    readOne : ()=>{
        //.. database readOne function 
    },
    readMany : ()=>{
        // ... database readMany function
    }
    //... db functions for other operations 
}

class CustomerOperations extends BaseOperations{
    constructor(){
        super(formatter, validator, dbOps)
    }

    async detail(id, resolve){
        validator.detail(id); //validate id
        if(isArray(id)){

            const customerDetailList = dbOps.readMany(id);
            for(let customerDetail of customerDetailList){
                delete customerDetail.password
            }
            return customerDetailList;

        }else{

            const customerDetail = dbOps.readOne(id);
            delete customerDetail.password
            return customerDetail;

        }
    }
}

module.exports = CustomerOperations;
```

and we have overridden the detail method for our customer entity.

note that we are exporting the extended class but not an instance of it (not calling `new CustomerOperations()`). Because instance/objects from this classes will be created in the API layer.

**Throughout this whole codebase we just export classes and create instances when necessary as exporting instances instead of the class itself will make them `singleton` which we don't intend on doing.**

There are some files modules from where we are indeed exporting singletons and that is being done intentionally to preserve their state throughout the applications. Like the `mongopool` class (as we want to persist one database connection pool for all of the operations)

## parameters

- **formatter** `object` - an object with formatter functions
  - **formatter.create** `function( input: object )`
  - **formatter.update** `function( input: object )`
  
- **validator** `object` - an object with validator functions
  - **validator.create** `function( input: object )`
  - **validator.update** `function( input: object )`
  - **validator.detail** `function( id: Array<string> | string, resolve: object )`
  - **validator.list** `function( filter: object, resolve: object, paginationOptions: object )` - [[1]](#Note-1)
  - **validator.remove** `function(id: Array<string> | string )` - used for validating id in delete method
  
- **dbOps** `object` - an object with database functions
  - **dbOps.writeOne** `function( entity: object )`
  - **dbOps.writeMany** `function( entityList: Array<object> )`
  - **dbOps.updateOne** `function( id:string, entity:object )`
  - **dbOps.updateMany** `function( entityList: Array<object> )`
  - **dbOps.readOne** `function( id: string )`
  - **dbOps.readMany** `function( id: Array<string> )` - read multiple items in detail method
  - **dbOps.readList** `function( filter: object, resolve: object, paginateOptions: object )` - read list of items in list method. [[2]](#Note-2)
  - **dbOps.removeOne** `function( id: string )`
  - **dbOps.removeMany** `function( id: Array<string> )`

### Note 1

 > Filtering, resolving and paginationOptions options are controlled by the `api` layers and processed by the `database`. To see what properties the filter object contain, check the `API` or `database`module for the entity. E.g: `customerAPI` for customer entity.  

#### Note 2

> Difference between the `readList` & `readMany` function is that `readMany` will receive an array of `id` & `resolve` object (an object with resolve options, like filter also controlled by `api` layer) whereas the readList option will receive `filter`, `resolve` & `paginationOptions` as parameters.



## Methods

- `create( input: Array<object> | object ): Promise< Array<object> | object >`
- `update( input: Array<object> | object ): Promise< Array<object> | object >`
- `list( filter?: object, resolve?: object, paginateOptions?: object) : Promise< Array<object> >`
- `detail(id: Array<string> | string, resolve?: object): Promise< Array<object> | object >`
- `remove(id: Array<string> | string): Promise< object: { 'deletedCount': number } >`

## dependency of methods

If all the required functions/dependencies are not passed for a method, that method will not execute. For example, the `create` method depends on
`formatter.create()`, `validator.create()`, `dbOps.writeOne()`, `dbOps.writeMany()` functions. If any of them is not passed to the constructor the `create` method will just log an warning to the  console and the return. 

List of dependencies of  methods

- `create()`

  - `formatter.create()`
  - `validator.create()`
  - `dbOps.writeOne()`
  - `dbOps.writeMany()`
  
- `update()`

  - `formatter.update()`
  - `validator.create()`
  - `dbOps.updateOne()`
  - `dbOps.updateMany()`
  
- `list()`

  - `validator.list()`
  - `dbOps.readList()`
  
- `detail()`

  - `validator.detail()`
  - `dbOps.readOne()`
  - `dbOps.readMany()`

- `remove()`

  - `validator.remove()`
  - `dbOps.removeOne()`
  - `dbOps.readMany()`