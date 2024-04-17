[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ReadableStreamDefaultController

# Interface: ReadableStreamDefaultController\<R\>

[\<internal\>](../modules/internal_.md).ReadableStreamDefaultController

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [desiredSize](internal_.ReadableStreamDefaultController.md#desiredsize)

### Methods

- [close](internal_.ReadableStreamDefaultController.md#close)
- [enqueue](internal_.ReadableStreamDefaultController.md#enqueue)
- [error](internal_.ReadableStreamDefaultController.md#error)

## Properties

### desiredSize

• `Readonly` **desiredSize**: ``null`` \| `number`

#### Defined in

node_modules/@types/node/stream/web.d.ts:189

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream/web.d.ts:190

___

### enqueue

▸ **enqueue**(`chunk?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk?` | `R` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream/web.d.ts:191

___

### error

▸ **error**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream/web.d.ts:192
