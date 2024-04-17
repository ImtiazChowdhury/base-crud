[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ReadableStreamDefaultReader

# Interface: ReadableStreamDefaultReader\<R\>

[\<internal\>](../modules/internal_.md).ReadableStreamDefaultReader

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Hierarchy

- [`ReadableStreamGenericReader`](internal_.ReadableStreamGenericReader.md)

  ↳ **`ReadableStreamDefaultReader`**

## Table of contents

### Properties

- [closed](internal_.ReadableStreamDefaultReader.md#closed)

### Methods

- [cancel](internal_.ReadableStreamDefaultReader.md#cancel)
- [read](internal_.ReadableStreamDefaultReader.md#read)
- [releaseLock](internal_.ReadableStreamDefaultReader.md#releaselock)

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

▸ **read**(): `Promise`\<[`ReadableStreamDefaultReadResult`](../modules/internal_.md#readablestreamdefaultreadresult)\<`R`\>\>

#### Returns

`Promise`\<[`ReadableStreamDefaultReadResult`](../modules/internal_.md#readablestreamdefaultreadresult)\<`R`\>\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:164

___

### releaseLock

▸ **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream/web.d.ts:165
