[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ValidatorList

# Interface: ValidatorList

[\<internal\>](../modules/internal_.md).ValidatorList

## Table of contents

### Properties

- [create](internal_.ValidatorList.md#create)
- [createMany](internal_.ValidatorList.md#createmany)
- [list](internal_.ValidatorList.md#list)
- [remove](internal_.ValidatorList.md#remove)
- [removeMany](internal_.ValidatorList.md#removemany)
- [update](internal_.ValidatorList.md#update)
- [updateMany](internal_.ValidatorList.md#updatemany)

## Properties

### create

• **create**: (`userInput`: [`Document`](internal_.Document.md)) => `Primise`\<``null`` \| [`inputErrorList`](internal_.inputErrorList.md)\>

#### Type declaration

▸ (`userInput`): `Primise`\<``null`` \| [`inputErrorList`](internal_.inputErrorList.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `userInput` | [`Document`](internal_.Document.md) |

##### Returns

`Primise`\<``null`` \| [`inputErrorList`](internal_.inputErrorList.md)\>

#### Defined in

[src/types.d.ts:11](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/types.d.ts#L11)

___

### createMany

• `Optional` **createMany**: (`userInputList`: [`Document`](internal_.Document.md)[]) => `Primise`\<[`inputErrorList`](internal_.inputErrorList.md)[] \| ``null``[]\>

#### Type declaration

▸ (`userInputList`): `Primise`\<[`inputErrorList`](internal_.inputErrorList.md)[] \| ``null``[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `userInputList` | [`Document`](internal_.Document.md)[] |

##### Returns

`Primise`\<[`inputErrorList`](internal_.inputErrorList.md)[] \| ``null``[]\>

#### Defined in

[src/types.d.ts:12](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/types.d.ts#L12)

___

### list

• `Optional` **list**: (`filter`: [`Document`](internal_.Document.md), `resolve`: [`Document`](internal_.Document.md), `paginationOptions`: [`Document`](internal_.Document.md)) => `Primise`\<``null`` \| [`inputErrorList`](internal_.inputErrorList.md)\>

#### Type declaration

▸ (`filter`, `resolve`, `paginationOptions`): `Primise`\<``null`` \| [`inputErrorList`](internal_.inputErrorList.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`Document`](internal_.Document.md) |
| `resolve` | [`Document`](internal_.Document.md) |
| `paginationOptions` | [`Document`](internal_.Document.md) |

##### Returns

`Primise`\<``null`` \| [`inputErrorList`](internal_.inputErrorList.md)\>

#### Defined in

[src/types.d.ts:15](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/types.d.ts#L15)

___

### remove

• `Optional` **remove**: (`id`: `string` \| [`ObjectId`](../classes/internal_._Z__baseOps_node_modules_mongodb_mongodb_.BSON.ObjectId.md)) => `Primise`\<``null`` \| [`inputErrorList`](internal_.inputErrorList.md)\>

#### Type declaration

▸ (`id`): `Primise`\<``null`` \| [`inputErrorList`](internal_.inputErrorList.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| [`ObjectId`](../classes/internal_._Z__baseOps_node_modules_mongodb_mongodb_.BSON.ObjectId.md) |

##### Returns

`Primise`\<``null`` \| [`inputErrorList`](internal_.inputErrorList.md)\>

#### Defined in

[src/types.d.ts:16](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/types.d.ts#L16)

___

### removeMany

• `Optional` **removeMany**: (`id`: (`string` \| [`ObjectId`](../classes/internal_._Z__baseOps_node_modules_mongodb_mongodb_.BSON.ObjectId.md))[]) => `Primise`\<[`inputErrorList`](internal_.inputErrorList.md)[] \| ``null``[]\>

#### Type declaration

▸ (`id`): `Primise`\<[`inputErrorList`](internal_.inputErrorList.md)[] \| ``null``[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | (`string` \| [`ObjectId`](../classes/internal_._Z__baseOps_node_modules_mongodb_mongodb_.BSON.ObjectId.md))[] |

##### Returns

`Primise`\<[`inputErrorList`](internal_.inputErrorList.md)[] \| ``null``[]\>

#### Defined in

[src/types.d.ts:17](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/types.d.ts#L17)

___

### update

• **update**: (`userInput`: [`Document`](internal_.Document.md)) => `Primise`\<``null`` \| [`inputErrorList`](internal_.inputErrorList.md)\>

#### Type declaration

▸ (`userInput`): `Primise`\<``null`` \| [`inputErrorList`](internal_.inputErrorList.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `userInput` | [`Document`](internal_.Document.md) |

##### Returns

`Primise`\<``null`` \| [`inputErrorList`](internal_.inputErrorList.md)\>

#### Defined in

[src/types.d.ts:13](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/types.d.ts#L13)

___

### updateMany

• `Optional` **updateMany**: (`userInputList`: [`Document`](internal_.Document.md)[]) => `Primise`\<[`inputErrorList`](internal_.inputErrorList.md)[] \| ``null``[]\>

#### Type declaration

▸ (`userInputList`): `Primise`\<[`inputErrorList`](internal_.inputErrorList.md)[] \| ``null``[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `userInputList` | [`Document`](internal_.Document.md)[] |

##### Returns

`Primise`\<[`inputErrorList`](internal_.inputErrorList.md)[] \| ``null``[]\>

#### Defined in

[src/types.d.ts:14](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/types.d.ts#L14)
