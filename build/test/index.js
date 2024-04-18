"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const mongo_baseops_1 = __importDefault(require("mongo-baseops"));
class TestOps extends __1.default {
}
//TODO: Write proper tests with mocha
const dbOps = new mongo_baseops_1.default("testBaseOps", "testBaseOpsDB", "mongodb://127.0.0.1:27017");
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const dummyFormatter = (d) => __awaiter(this, void 0, void 0, function* () {
            console.log(d);
            return Object.assign(Object.assign({}, d), { createdData: new Date });
        });
        const dummyValidator = (d) => __awaiter(this, void 0, void 0, function* () {
            console.log(d);
            return null;
        });
        const testOps = new TestOps({
            create: dummyFormatter,
            update: dummyFormatter,
            createMany: (input) => __awaiter(this, void 0, void 0, function* () { return input; }),
            updateMany: (input) => __awaiter(this, void 0, void 0, function* () { return input; })
        }, {
            create: dummyValidator,
            createMany: (input) => __awaiter(this, void 0, void 0, function* () { return input.map(i => dummyValidator(i)); }),
            update: dummyValidator,
            updateMany: (input) => __awaiter(this, void 0, void 0, function* () { return input.map(i => dummyValidator(i)); }),
        }, dbOps);
        const createResult = yield testOps.create(dummyItem);
        console.log({ createResult: createResult });
        const createManyResult = yield testOps.createMany(dummyItemList);
        console.log({ createManyResult });
        const updateResult = yield testOps.update(Object.assign(Object.assign({}, createResult), { name: "imtiaz1" }));
        console.log({ updateResult });
        const updateManyResult = yield testOps.updateMany(createManyResult.map(i => (Object.assign(Object.assign({}, i), { name: i["name"] + 1 }))));
        console.log(({ updateManyResult }));
        const listResult = yield testOps.list({}, {}, { limit: 2 });
        console.log({ listResult });
        const removeResult = yield testOps.remove(createResult._id);
        console.log({ removeResult });
        const removeManyResult = yield testOps.removeMany(createManyResult.map(i => i._id));
        console.log({ removeManyResult });
    });
}
const dummyItem = {
    serial: "123",
    name: "imtiaz"
};
const dummyItemList = [
    {
        serial: "124",
        name: "Fahim"
    },
    {
        serial: "125",
        name: "Tanjim"
    },
];
test();
