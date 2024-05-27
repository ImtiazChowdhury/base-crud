# BaseOperations Library

The BaseOperations library provides a comprehensive and extensible framework for performing CRUD (Create, Read, Update, Delete) operations on MongoDB collections with additional validation and formatting features. The library leverages Joi for schema validation, ensuring that inputs conform to predefined rules before being processed.


# Overview
The BaseOperations class offers a standardized way to handle basic database operations. It includes methods for creating, updating, listing, and removing documents, as well as handling multiple documents at once. The class ensures inputs are validated and formatted as needed before interacting with the database.

# Key Concepts
# Types

Document: Represents a generic document structure.
BaseSchemaType: Defines Joi schemas for create, update, remove, and list operations.
BaseValidator: Provides optional custom validation methods for each operation.
BaseFormatter: Offers optional formatting methods for inputs before database operations.
OperationError
A custom error class used to handle validation and operational errors with appropriate status codes and messages.

Example Usage
Define Schemas and Validators
First, define the Joi schemas and optional validators for your document type:

``` ts
import Joi from "joi";
import { ObjectId } from "mongodb";

const createSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().integer().required(),
    // other fields
});

const updateSchema = Joi.object({
    _id: Joi.string().required(),
    name: Joi.string(),
    age: Joi.number().integer(),
    // other fields
});

const removeSchema = Joi.array().items(Joi.string().required());

const listSchema = Joi.object({
    name: Joi.string(),
    age: Joi.number().integer(),
    // other filters
});

const schemas = {
    create: createSchema,
    update: updateSchema,
    remove: removeSchema,
    list: listSchema,
};

// Optional custom validators
const validators = {
    create: async (input) => {
        // Custom validation logic
        return null; // Return null if valid, error object if invalid
    },
    // other validators
};

// Optional custom formatters
const formatters = {
    create: async (input) => {
        // Custom formatting logic
        return input;
    },
    // other formatters
};

```

# Initialize BaseOperations
Next, initialize the BaseOperations class with your database instance, schemas, validators, and formatters:

``` ts
// Create a new document
const newDocument = await baseOps.create({ name: "John Doe", age: 30 });

// Update a document
const updatedDocument = await baseOps.update({ _id: "60d5f4f8f8b4b3a4b4a4b4a4", name: "Jane Doe" });

// List documents
const listOptions = { name: "John" };
const resolveOptions = { name: true, age: true };
const paginationOptions = { fetchAll: 1, limit: 10, page: 1, sort: "name", sortOrder: 1 };

const documents = await baseOps.list(listOptions, resolveOptions, paginationOptions);

// Remove documents
const removedDocuments = await baseOps.remove(["60d5f4f8f8b4b3a4b4a4b4a4"]);

```


# Perform Operations
Now, you can use the methods provided by BaseOperations to interact with your database:

``` ts
// Create a new document
const newDocument = await baseOps.create({ name: "John Doe", age: 30 });

// Update a document
const updatedDocument = await baseOps.update({ _id: "60d5f4f8f8b4b3a4b4a4b4a4", name: "Jane Doe" });

// List documents
const listOptions = { name: "John" };
const resolveOptions = { name: true, age: true };
const paginationOptions = { fetchAll: 1, limit: 10, page: 1, sort: "name", sortOrder: 1 };

const documents = await baseOps.list(listOptions, resolveOptions, paginationOptions);

// Remove documents
const removedDocuments = await baseOps.remove(["60d5f4f8f8b4b3a4b4a4b4a4"]);
```


# Conclusion
The BaseOperations library provides a robust framework for managing MongoDB operations with built-in validation and formatting capabilities. By defining schemas, validators, and formatters, you can ensure data integrity and consistency across your application. Use the provided methods to perform standard CRUD operations with ease and efficiency.