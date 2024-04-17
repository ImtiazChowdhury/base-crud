[base-crud](../README.md) / [Exports](../modules.md) / default

# Class: default

BaseOperations

basic operations of an entity
1. create
2. Create Many
3. update
4. updateMany
5. list
6. remove
7. removeMany
 * 
for detailed documentation

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [dbOps](default.md#dbops)
- [formatter](default.md#formatter)
- [validator](default.md#validator)

### Methods

- [create](default.md#create)
- [createMany](default.md#createmany)
- [list](default.md#list)
- [remove](default.md#remove)
- [removeMany](default.md#removemany)
- [update](default.md#update)
- [updateMany](default.md#updatemany)

## Constructors

### constructor

• **new default**(`formatter`, `validator`, `dbOps`): [`default`](default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `formatter` | [`FormatterList`](../interfaces/internal_.FormatterList.md) |
| `validator` | [`ValidatorList`](../interfaces/internal_.ValidatorList.md) |
| `dbOps` | [`BaseDatabaseOps`](internal_.BaseDatabaseOps.md) |

#### Returns

[`default`](default.md)

#### Defined in

[src/index.ts:28](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/index.ts#L28)

## Properties

### dbOps

• **dbOps**: [`BaseDatabaseOps`](internal_.BaseDatabaseOps.md)

#### Defined in

[src/index.ts:26](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/index.ts#L26)

___

### formatter

• **formatter**: [`FormatterList`](../interfaces/internal_.FormatterList.md)

#### Defined in

[src/index.ts:24](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/index.ts#L24)

___

### validator

• **validator**: [`ValidatorList`](../interfaces/internal_.ValidatorList.md)

#### Defined in

[src/index.ts:25](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/index.ts#L25)

## Methods

### create

▸ **create**\<`T`\>(`input`): `Promise`\<`T` & \{ `_id`: `string`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Document`](../interfaces/internal_.Document.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |

#### Returns

`Promise`\<`T` & \{ `_id`: `string`  }\>

#### Defined in

[src/index.ts:41](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/index.ts#L41)

___

### createMany

▸ **createMany**\<`T`\>(`input`): `Promise`\<[`OptionalId`](../modules/internal_.md#optionalid)\<[`Document`](../interfaces/internal_.Document-1.md)\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Document`](../interfaces/internal_.Document.md)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |

#### Returns

`Promise`\<[`OptionalId`](../modules/internal_.md#optionalid)\<[`Document`](../interfaces/internal_.Document-1.md)\>[]\>

#### Defined in

[src/index.ts:57](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/index.ts#L57)

___

### list

▸ **list**(`filter?`, `resolve?`, `paginationOptions?`): `Promise`\<[`PaginateResult`](../interfaces/internal_.PaginateResult.md) \| [`EmptyPaginateResult`](../interfaces/internal_.EmptyPaginateResult.md)\>

list entity by filtering, resolving and paginating

validate > read list from db

for supported filtering, resolving and paginating properties see respective database list operation docs

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`Document`](../interfaces/internal_.Document.md) |
| `resolve` | [`Document`](../interfaces/internal_.Document.md) |
| `paginationOptions` | [`Document`](../interfaces/internal_.Document.md) |

#### Returns

`Promise`\<[`PaginateResult`](../interfaces/internal_.PaginateResult.md) \| [`EmptyPaginateResult`](../interfaces/internal_.EmptyPaginateResult.md)\>

#### Defined in

[src/index.ts:126](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/index.ts#L126)

___

### remove

▸ **remove**(`id`): `Promise`\<\{ `deletedCount`: `number`  }\>

remove entity

validate > remove from db

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` \| [`ObjectId`](internal_._Z__baseOps_node_modules_mongodb_mongodb_.BSON.ObjectId.md) | multiple ids in array or single string id |

#### Returns

`Promise`\<\{ `deletedCount`: `number`  }\>

#### Defined in

[src/index.ts:152](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/index.ts#L152)

___

### removeMany

▸ **removeMany**(`id`): `Promise`\<\{ `deletedCount`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | (`string` \| [`ObjectId`](internal_._Z__baseOps_node_modules_mongodb_mongodb_.BSON.ObjectId.md))[] |

#### Returns

`Promise`\<\{ `deletedCount`: `number`  }\>

#### Defined in

[src/index.ts:170](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/index.ts#L170)

___

### update

▸ **update**\<`T`\>(`input`): `Promise`\<[`Document`](../interfaces/internal_.Document.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Document`](../interfaces/internal_.Document.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |

#### Returns

`Promise`\<[`Document`](../interfaces/internal_.Document.md)\>

#### Defined in

[src/index.ts:75](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/index.ts#L75)

___

### updateMany

▸ **updateMany**\<`T`\>(`input`): `Promise`\<[`Document`](../interfaces/internal_.Document.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Document`](../interfaces/internal_.Document.md)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |

#### Returns

`Promise`\<[`Document`](../interfaces/internal_.Document.md)[]\>

#### Defined in

[src/index.ts:92](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/index.ts#L92)
