import BaseOperations from "..";
import BaseDBOps from "mongo-baseops"

class TestOps extends BaseOperations {

}

const dbOps = new BaseDBOps("testBaseOps")
async function test() {


    const dummyFormatter = (d: any) => {
        console.log(d);
        return d;
    }
    const dummyValidator = (d: any) => {
        console.log(d)
        return null;
    }

    const testOps = new TestOps({
        create: dummyFormatter,
        update: dummyFormatter
    }, {
        create: dummyValidator,
        update: dummyValidator
    },
        dbOps)


    const createResult = await testOps.create(dummyItem)
    console.log({ createResult : createResult})


    const updateResult = await testOps.update(createResult)

    console.log({updateResult})
}

const dummyItem = {
    0: "323",
    1: "imtiaz"
}