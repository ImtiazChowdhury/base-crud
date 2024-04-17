[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / WritableStreamDefaultWriter

# Interface: WritableStreamDefaultWriter\<W\>

[\<internal\>](../modules/internal_.md).WritableStreamDefaultWriter

This Streams API interface is the object returned by
WritableStream.getWriter() and once created locks the < writer to the
WritableStream ensuring that no other streams can write to the underlying
sink.

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [closed](internal_.WritableStreamDefaultWriter.md#closed)
- [desiredSize](internal_.WritableStreamDefaultWriter.md#desiredsize)
- [ready](internal_.WritableStreamDefaultWriter.md#ready)

### Methods

- [abort](internal_.WritableStreamDefaultWriter.md#abort)
- [close](internal_.WritableStreamDefaultWriter.md#close)
- [releaseLock](internal_.WritableStreamDefaultWriter.md#releaselock)
- [write](internal_.WritableStreamDefaultWriter.md#write)

## Properties

### closed

• `Readonly` **closed**: `Promise`\<`undefined`\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:249

___

### desiredSize

• `Readonly` **desiredSize**: ``null`` \| `number`

#### Defined in

node_modules/@types/node/stream/web.d.ts:250

___

### ready

• `Readonly` **ready**: `Promise`\<`undefined`\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:251

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

node_modules/@types/node/stream/web.d.ts:252

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:253

___

### releaseLock

▸ **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream/web.d.ts:254

___

### write

▸ **write**(`chunk?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk?` | `W` |

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:255
