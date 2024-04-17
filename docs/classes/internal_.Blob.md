[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Blob

# Class: Blob

[\<internal\>](../modules/internal_.md).Blob

A [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) encapsulates immutable, raw data that can be safely shared across
multiple worker threads.

**`Since`**

v15.7.0, v14.18.0

## Table of contents

### Constructors

- [constructor](internal_.Blob.md#constructor)

### Properties

- [size](internal_.Blob.md#size)
- [type](internal_.Blob.md#type)

### Methods

- [arrayBuffer](internal_.Blob.md#arraybuffer)
- [slice](internal_.Blob.md#slice)
- [stream](internal_.Blob.md#stream)
- [text](internal_.Blob.md#text)

## Constructors

### constructor

• **new Blob**(`sources`, `options?`): [`Blob`](internal_.Blob.md)

Creates a new `Blob` object containing a concatenation of the given sources.

{ArrayBuffer}, {TypedArray}, {DataView}, and {Buffer} sources are copied into
the 'Blob' and can therefore be safely modified after the 'Blob' is created.

String sources are also copied into the `Blob`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | (`ArrayBuffer` \| [`Blob`](internal_.Blob.md) \| [`BinaryLike`](../modules/internal_.md#binarylike))[] |
| `options?` | [`BlobOptions`](../interfaces/internal_.BlobOptions.md) |

#### Returns

[`Blob`](internal_.Blob.md)

#### Defined in

node_modules/@types/node/buffer.d.ts:166

## Properties

### size

• `Readonly` **size**: `number`

The total size of the `Blob` in bytes.

**`Since`**

v15.7.0, v14.18.0

#### Defined in

node_modules/@types/node/buffer.d.ts:152

___

### type

• `Readonly` **type**: `string`

The content-type of the `Blob`.

**`Since`**

v15.7.0, v14.18.0

#### Defined in

node_modules/@types/node/buffer.d.ts:157

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`\<`ArrayBuffer`\>

Returns a promise that fulfills with an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) containing a copy of
the `Blob` data.

#### Returns

`Promise`\<`ArrayBuffer`\>

**`Since`**

v15.7.0, v14.18.0

#### Defined in

node_modules/@types/node/buffer.d.ts:172

___

### slice

▸ **slice**(`start?`, `end?`, `type?`): [`Blob`](internal_.Blob.md)

Creates and returns a new `Blob` containing a subset of this `Blob` objects
data. The original `Blob` is not altered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The starting index. |
| `end?` | `number` | The ending index. |
| `type?` | `string` | The content-type for the new `Blob` |

#### Returns

[`Blob`](internal_.Blob.md)

**`Since`**

v15.7.0, v14.18.0

#### Defined in

node_modules/@types/node/buffer.d.ts:181

___

### stream

▸ **stream**(): [`ReadableStream`](../interfaces/internal_.ReadableStream.md)\<`any`\>

Returns a new `ReadableStream` that allows the content of the `Blob` to be read.

#### Returns

[`ReadableStream`](../interfaces/internal_.ReadableStream.md)\<`any`\>

**`Since`**

v16.7.0

#### Defined in

node_modules/@types/node/buffer.d.ts:192

___

### text

▸ **text**(): `Promise`\<`string`\>

Returns a promise that fulfills with the contents of the `Blob` decoded as a
UTF-8 string.

#### Returns

`Promise`\<`string`\>

**`Since`**

v15.7.0, v14.18.0

#### Defined in

node_modules/@types/node/buffer.d.ts:187
