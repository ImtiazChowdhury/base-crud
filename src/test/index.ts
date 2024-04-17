import BaseOperations from "..";
import BaseDBOps from "mongo-baseops"

class TestOps extends BaseOperations {

}

//TODO: Write proper tests with mocha

const dbOps = new BaseDBOps("testBaseOps", "testBaseOpsDB", "mongodb://127.0.0.1:27017")
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
        update: dummyFormatter,
        createMany: async input=>input.map(i=> dummyFormatter(i)),
        updateMany: async input=>input.map(i=> dummyFormatter(i))
    }, {
        create: dummyValidator,
        createMany: async input=>input.map(i=> dummyValidator(i)),
        update: dummyValidator,
        updateMany: async input=>input.map(i=> dummyValidator(i)),
    },
        dbOps)


    const createResult = await testOps.create(dummyItem)
    console.log({ createResult: createResult })

    const createManyResult = await testOps.createMany(dummyItemList)
    console.log({ createManyResult })

    const updateResult = await testOps.update({ ...createResult, name: "imtiaz1" })
    console.log({ updateResult })

    const updateManyResult = await testOps.updateMany(createManyResult.map(i => ({ ...i, name: i["name"] + 1 })))
    console.log(({ updateManyResult }))

    const listResult = await testOps.list({}, {}, { limit: 2 })
    console.log({ listResult })

    const removeResult = await testOps.remove(createResult._id);
    console.log({ removeResult })

    const removeManyResult = await testOps.removeMany(createManyResult.map(i => i._id || ""))
    console.log({removeManyResult})


}


const dummyItem = {
    serial: "123",
    name: "imtiaz"
}

const dummyItemList = [
    {
        serial: "124",
        name: "Fahim"
    },
    {
        serial: "125",
        name: "Tanjim"
    },
]

test()
