[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / FormatterList

# Interface: FormatterList

[\<internal\>](../modules/internal_.md).FormatterList

## Table of contents

### Properties

- [create](internal_.FormatterList.md#create)
- [createMany](internal_.FormatterList.md#createmany)
- [update](internal_.FormatterList.md#update)
- [updateMany](internal_.FormatterList.md#updatemany)

## Properties

### create

• **create**: (`validatedInput`: [`Document`](internal_.Document.md)) => `Promise`\<[`Document`](internal_.Document.md)\>

#### Type declaration

▸ (`validatedInput`): `Promise`\<[`Document`](internal_.Document.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `validatedInput` | [`Document`](internal_.Document.md) |

##### Returns

`Promise`\<[`Document`](internal_.Document.md)\>

#### Defined in

[src/types.d.ts:21](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/types.d.ts#L21)

___

### createMany

• `Optional` **createMany**: (`validatedInputList`: [`Document`](internal_.Document.md)[]) => `Promise`\<[`Document`](internal_.Document.md)[]\>

#### Type declaration

▸ (`validatedInputList`): `Promise`\<[`Document`](internal_.Document.md)[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `validatedInputList` | [`Document`](internal_.Document.md)[] |

##### Returns

`Promise`\<[`Document`](internal_.Document.md)[]\>

#### Defined in

[src/types.d.ts:22](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/types.d.ts#L22)

___

### update

• **update**: (`validatedInput`: [`Document`](internal_.Document.md)) => `Promise`\<[`Document`](internal_.Document.md)\>

#### Type declaration

▸ (`validatedInput`): `Promise`\<[`Document`](internal_.Document.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `validatedInput` | [`Document`](internal_.Document.md) |

##### Returns

`Promise`\<[`Document`](internal_.Document.md)\>

#### Defined in

[src/types.d.ts:23](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/types.d.ts#L23)

___

### updateMany

• `Optional` **updateMany**: (`validatedInput`: [`Document`](internal_.Document.md)[]) => `Promise`\<[`Document`](internal_.Document.md)[]\>

#### Type declaration

▸ (`validatedInput`): `Promise`\<[`Document`](internal_.Document.md)[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `validatedInput` | [`Document`](internal_.Document.md)[] |

##### Returns

`Promise`\<[`Document`](internal_.Document.md)[]\>

#### Defined in

[src/types.d.ts:24](https://github.com/ImtiazChowdhury/base-crud/blob/c9007b40f1499f3a98ae74c80cf8dc16b89aa8d7/src/types.d.ts#L24)
