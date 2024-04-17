[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / WritableStream

# Interface: WritableStream\<W\>

[\<internal\>](../modules/internal_.md).WritableStream

This Streams API interface provides a standard abstraction for writing
streaming data to a destination, known as a sink. This object comes with
built-in back pressure and queuing.

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [locked](internal_.WritableStream-1.md#locked)

### Methods

- [abort](internal_.WritableStream-1.md#abort)
- [close](internal_.WritableStream-1.md#close)
- [getWriter](internal_.WritableStream-1.md#getwriter)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Defined in

node_modules/@types/node/stream/web.d.ts:233

## Methods

### abort

▸ **abort**(`reason?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:234

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:235

___

### getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](internal_.WritableStreamDefaultWriter.md)\<`W`\>

#### Returns

[`WritableStreamDefaultWriter`](internal_.WritableStreamDefaultWriter.md)\<`W`\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:236
