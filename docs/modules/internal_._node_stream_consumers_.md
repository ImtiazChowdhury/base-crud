[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](internal_.md) / "node:stream/consumers"

# Namespace: "node:stream/consumers"

[\<internal\>](internal_.md)."node:stream/consumers"

## Table of contents

### Functions

- [arrayBuffer](internal_._node_stream_consumers_.md#arraybuffer)
- [blob](internal_._node_stream_consumers_.md#blob)
- [buffer](internal_._node_stream_consumers_.md#buffer)
- [json](internal_._node_stream_consumers_.md#json)
- [text](internal_._node_stream_consumers_.md#text)

## Functions

### arrayBuffer

▸ **arrayBuffer**(`stream`): `Promise`\<`ArrayBuffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`Readable`](../classes/internal_.Readable.md) \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`any`\> \| [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) |

#### Returns

`Promise`\<`ArrayBuffer`\>

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:6

___

### blob

▸ **blob**(`stream`): `Promise`\<[`Blob`](../classes/internal_.Blob.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`Readable`](../classes/internal_.Readable.md) \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`any`\> \| [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) |

#### Returns

`Promise`\<[`Blob`](../classes/internal_.Blob.md)\>

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:7

___

### buffer

▸ **buffer**(`stream`): `Promise`\<[`Buffer`](../interfaces/internal_.Buffer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`Readable`](../classes/internal_.Readable.md) \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`any`\> \| [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) |

#### Returns

`Promise`\<[`Buffer`](../interfaces/internal_.Buffer.md)\>

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:4

___

### json

▸ **json**(`stream`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`Readable`](../classes/internal_.Readable.md) \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`any`\> \| [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:8

___

### text

▸ **text**(`stream`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`Readable`](../classes/internal_.Readable.md) \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`any`\> \| [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:5
