[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ReadableStreamBYOBReader

# Interface: ReadableStreamBYOBReader

[\<internal\>](../modules/internal_.md).ReadableStreamBYOBReader

## Hierarchy

- [`ReadableStreamGenericReader`](internal_.ReadableStreamGenericReader.md)

  ↳ **`ReadableStreamBYOBReader`**

## Table of contents

### Properties

- [closed](internal_.ReadableStreamBYOBReader.md#closed)

### Methods

- [cancel](internal_.ReadableStreamBYOBReader.md#cancel)
- [read](internal_.ReadableStreamBYOBReader.md#read)
- [releaseLock](internal_.ReadableStreamBYOBReader.md#releaselock)

## Properties

### closed

• `Readonly` **closed**: `Promise`\<`undefined`\>

#### Inherited from

[ReadableStreamGenericReader](internal_.ReadableStreamGenericReader.md).[closed](internal_.ReadableStreamGenericReader.md#closed)

#### Defined in

node_modules/@types/node/stream/web.d.ts:65

## Methods

### cancel

▸ **cancel**(`reason?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[ReadableStreamGenericReader](internal_.ReadableStreamGenericReader.md).[cancel](internal_.ReadableStreamGenericReader.md#cancel)

#### Defined in

node_modules/@types/node/stream/web.d.ts:66

___

### read

▸ **read**\<`T`\>(`view`): `Promise`\<[`ReadableStreamReadResult`](../modules/internal_.md#readablestreamreadresult)\<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ArrayBufferView`](internal_.ArrayBufferView.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `T` |

#### Returns

`Promise`\<[`ReadableStreamReadResult`](../modules/internal_.md#readablestreamreadresult)\<`T`\>\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:168

___

### releaseLock

▸ **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream/web.d.ts:169
