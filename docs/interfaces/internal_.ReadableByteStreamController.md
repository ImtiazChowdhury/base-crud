[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ReadableByteStreamController

# Interface: ReadableByteStreamController

[\<internal\>](../modules/internal_.md).ReadableByteStreamController

## Table of contents

### Properties

- [byobRequest](internal_.ReadableByteStreamController.md#byobrequest)
- [desiredSize](internal_.ReadableByteStreamController.md#desiredsize)

### Methods

- [close](internal_.ReadableByteStreamController.md#close)
- [enqueue](internal_.ReadableByteStreamController.md#enqueue)
- [error](internal_.ReadableByteStreamController.md#error)

## Properties

### byobRequest

• `Readonly` **byobRequest**: `undefined`

#### Defined in

node_modules/@types/node/stream/web.d.ts:178

___

### desiredSize

• `Readonly` **desiredSize**: ``null`` \| `number`

#### Defined in

node_modules/@types/node/stream/web.d.ts:179

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream/web.d.ts:180

___

### enqueue

▸ **enqueue**(`chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`ArrayBufferView`](internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream/web.d.ts:181

___

### error

▸ **error**(`error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `any` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream/web.d.ts:182
