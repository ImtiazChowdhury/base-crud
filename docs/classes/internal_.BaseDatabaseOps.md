[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / BaseDatabaseOps

# Class: BaseDatabaseOps

[\<internal\>](../modules/internal_.md).BaseDatabaseOps

## Table of contents

### Constructors

- [constructor](internal_.BaseDatabaseOps.md#constructor)

### Properties

- [\_collection](internal_.BaseDatabaseOps.md#_collection)
- [\_db](internal_.BaseDatabaseOps.md#_db)
- [client](internal_.BaseDatabaseOps.md#client)
- [collectionName](internal_.BaseDatabaseOps.md#collectionname)
- [dbName](internal_.BaseDatabaseOps.md#dbname)
- [dbUrl](internal_.BaseDatabaseOps.md#dburl)
- [ObjectId](internal_.BaseDatabaseOps.md#objectid)
- [mongodb](internal_.BaseDatabaseOps.md#mongodb)

### Methods

- [getClient](internal_.BaseDatabaseOps.md#getclient)
- [getCollection](internal_.BaseDatabaseOps.md#getcollection)
- [getDB](internal_.BaseDatabaseOps.md#getdb)
- [list](internal_.BaseDatabaseOps.md#list)
- [readMany](internal_.BaseDatabaseOps.md#readmany)
- [readOne](internal_.BaseDatabaseOps.md#readone)
- [removeMany](internal_.BaseDatabaseOps.md#removemany)
- [removeOne](internal_.BaseDatabaseOps.md#removeone)
- [updateMany](internal_.BaseDatabaseOps.md#updatemany)
- [updateOne](internal_.BaseDatabaseOps.md#updateone)
- [writeMany](internal_.BaseDatabaseOps.md#writemany)
- [writeOne](internal_.BaseDatabaseOps.md#writeone)

## Constructors

### constructor

• **new BaseDatabaseOps**(`collectionName`, `dbName?`, `dbUrl?`): [`BaseDatabaseOps`](internal_.BaseDatabaseOps.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionName` | `string` |
| `dbName?` | `string` |
| `dbUrl?` | `string` |

#### Returns

[`BaseDatabaseOps`](internal_.BaseDatabaseOps.md)

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:12

## Properties

### \_collection

• `Private` **\_collection**: `any`

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:8

___

### \_db

• `Private` **\_db**: `any`

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:4

___

### client

• **client**: ``null`` \| [`MongoClient`](internal_._Z__baseOps_node_modules_mongodb_mongodb_.MongoClient.md)

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:9

___

### collectionName

• **collectionName**: `string`

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:5

___

### dbName

• **dbName**: ``null`` \| `string`

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:6

___

### dbUrl

• **dbUrl**: ``null`` \| `string`

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:7

___

### ObjectId

▪ `Static` **ObjectId**: typeof [`ObjectId`](internal_._Z__baseOps_node_modules_mongodb_mongodb_.BSON.ObjectId.md)

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:10

___

### mongodb

▪ `Static` **mongodb**: [`"Z:/baseOps/node_modules/mongodb/mongodb"`](../modules/internal_._Z__baseOps_node_modules_mongodb_mongodb_.md)

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:11

## Methods

### getClient

▸ **getClient**(): `Promise`\<[`MongoClient`](internal_._Z__baseOps_node_modules_mongodb_mongodb_.MongoClient.md)\>

#### Returns

`Promise`\<[`MongoClient`](internal_._Z__baseOps_node_modules_mongodb_mongodb_.MongoClient.md)\>

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:15

___

### getCollection

▸ **getCollection**(): `Promise`\<[`Collection`](internal_._Z__baseOps_node_modules_mongodb_mongodb_.Collection.md)\<[`Document`](../interfaces/internal_.Document-1.md)\>\>

#### Returns

`Promise`\<[`Collection`](internal_._Z__baseOps_node_modules_mongodb_mongodb_.Collection.md)\<[`Document`](../interfaces/internal_.Document-1.md)\>\>

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:14

___

### getDB

▸ **getDB**(): `Promise`\<[`Db`](internal_._Z__baseOps_node_modules_mongodb_mongodb_.Db.md)\>

#### Returns

`Promise`\<[`Db`](internal_._Z__baseOps_node_modules_mongodb_mongodb_.Db.md)\>

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:13

___

### list

▸ **list**(`filter`, `resolve`, `paginationOptions`): `Promise`\<[`PaginateResult`](../interfaces/internal_.PaginateResult.md) \| [`EmptyPaginateResult`](../interfaces/internal_.EmptyPaginateResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `undefined` \| {} |
| `resolve` | `undefined` \| {} |
| `paginationOptions` | [`PaginationOptions`](../interfaces/internal_.PaginationOptions.md) |

#### Returns

`Promise`\<[`PaginateResult`](../interfaces/internal_.PaginateResult.md) \| [`EmptyPaginateResult`](../interfaces/internal_.EmptyPaginateResult.md)\>

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:22

___

### readMany

▸ **readMany**(`id`, `resolve?`): `Promise`\<[`WithId`](../modules/internal_._Z__baseOps_node_modules_mongodb_mongodb_.md#withid)\<[`Document`](../interfaces/internal_.Document-1.md)\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | (`undefined` \| `string` \| [`ObjectId`](internal_._Z__baseOps_node_modules_mongodb_mongodb_.BSON.ObjectId.md))[] |
| `resolve?` | [`Document`](../interfaces/internal_.Document-1.md) |

#### Returns

`Promise`\<[`WithId`](../modules/internal_._Z__baseOps_node_modules_mongodb_mongodb_.md#withid)\<[`Document`](../interfaces/internal_.Document-1.md)\>[]\>

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:21

___

### readOne

▸ **readOne**(`id`, `resolve?`): `Promise`\<``null`` \| [`WithId`](../modules/internal_._Z__baseOps_node_modules_mongodb_mongodb_.md#withid)\<[`Document`](../interfaces/internal_.Document-1.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| [`ObjectId`](internal_._Z__baseOps_node_modules_mongodb_mongodb_.BSON.ObjectId.md) |
| `resolve?` | [`Document`](../interfaces/internal_.Document-1.md) |

#### Returns

`Promise`\<``null`` \| [`WithId`](../modules/internal_._Z__baseOps_node_modules_mongodb_mongodb_.md#withid)\<[`Document`](../interfaces/internal_.Document-1.md)\>\>

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:20

___

### removeMany

▸ **removeMany**(`idList`): `Promise`\<[`DeleteResult`](../interfaces/internal_._Z__baseOps_node_modules_mongodb_mongodb_.DeleteResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `idList` | (`undefined` \| `string` \| [`ObjectId`](internal_._Z__baseOps_node_modules_mongodb_mongodb_.BSON.ObjectId.md))[] |

#### Returns

`Promise`\<[`DeleteResult`](../interfaces/internal_._Z__baseOps_node_modules_mongodb_mongodb_.DeleteResult.md)\>

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:24

___

### removeOne

▸ **removeOne**(`id`): `Promise`\<[`DeleteResult`](../interfaces/internal_._Z__baseOps_node_modules_mongodb_mongodb_.DeleteResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `undefined` \| `string` \| [`ObjectId`](internal_._Z__baseOps_node_modules_mongodb_mongodb_.BSON.ObjectId.md) |

#### Returns

`Promise`\<[`DeleteResult`](../interfaces/internal_._Z__baseOps_node_modules_mongodb_mongodb_.DeleteResult.md)\>

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:23

___

### updateMany

▸ **updateMany**(`entityList`, `options?`): `Promise`\<[`UpdateResult`](../interfaces/internal_._Z__baseOps_node_modules_mongodb_mongodb_.UpdateResult.md)\<[`Document`](../interfaces/internal_.Document-1.md)\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityList` | [`OptionalId`](../modules/internal_.md#optionalid)\<[`Document`](../interfaces/internal_.Document-1.md)\>[] |
| `options?` | [`UpdateOptions`](../interfaces/internal_._Z__baseOps_node_modules_mongodb_mongodb_.UpdateOptions.md) |

#### Returns

`Promise`\<[`UpdateResult`](../interfaces/internal_._Z__baseOps_node_modules_mongodb_mongodb_.UpdateResult.md)\<[`Document`](../interfaces/internal_.Document-1.md)\>[]\>

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:19

___

### updateOne

▸ **updateOne**(`id`, `entity`, `options?`): `Promise`\<[`UpdateResult`](../interfaces/internal_._Z__baseOps_node_modules_mongodb_mongodb_.UpdateResult.md)\<[`Document`](../interfaces/internal_.Document-1.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| [`ObjectId`](internal_._Z__baseOps_node_modules_mongodb_mongodb_.BSON.ObjectId.md) |
| `entity` | [`OptionalId`](../modules/internal_.md#optionalid)\<[`Document`](../interfaces/internal_.Document-1.md)\> |
| `options?` | [`UpdateOptions`](../interfaces/internal_._Z__baseOps_node_modules_mongodb_mongodb_.UpdateOptions.md) |

#### Returns

`Promise`\<[`UpdateResult`](../interfaces/internal_._Z__baseOps_node_modules_mongodb_mongodb_.UpdateResult.md)\<[`Document`](../interfaces/internal_.Document-1.md)\>\>

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:18

___

### writeMany

▸ **writeMany**(`docs`, `options?`): `Promise`\<[`OptionalId`](../modules/internal_.md#optionalid)\<[`Document`](../interfaces/internal_.Document-1.md)\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `docs` | [`OptionalId`](../modules/internal_.md#optionalid)\<[`Document`](../interfaces/internal_.Document-1.md)\>[] |
| `options?` | [`BulkWriteOptions`](../interfaces/internal_._Z__baseOps_node_modules_mongodb_mongodb_.BulkWriteOptions.md) |

#### Returns

`Promise`\<[`OptionalId`](../modules/internal_.md#optionalid)\<[`Document`](../interfaces/internal_.Document-1.md)\>[]\>

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:17

___

### writeOne

▸ **writeOne**(`doc`, `options?`): `Promise`\<[`OptionalId`](../modules/internal_.md#optionalid)\<[`Document`](../interfaces/internal_.Document-1.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | [`OptionalId`](../modules/internal_.md#optionalid)\<[`Document`](../interfaces/internal_.Document-1.md)\> |
| `options?` | [`InsertOneOptions`](../interfaces/internal_._Z__baseOps_node_modules_mongodb_mongodb_.InsertOneOptions.md) |

#### Returns

`Promise`\<[`OptionalId`](../modules/internal_.md#optionalid)\<[`Document`](../interfaces/internal_.Document-1.md)\>\>

#### Defined in

node_modules/mongo-baseops/build/index.d.ts:16
