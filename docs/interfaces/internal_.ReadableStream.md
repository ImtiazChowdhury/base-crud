[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ReadableStream

# Interface: ReadableStream\<R\>

[\<internal\>](../modules/internal_.md).ReadableStream

This Streams API interface represents a readable stream of byte data.

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [locked](internal_.ReadableStream.md#locked)

### Methods

- [[asyncIterator]](internal_.ReadableStream.md#[asynciterator])
- [cancel](internal_.ReadableStream.md#cancel)
- [getReader](internal_.ReadableStream.md#getreader)
- [pipeThrough](internal_.ReadableStream.md#pipethrough)
- [pipeTo](internal_.ReadableStream.md#pipeto)
- [tee](internal_.ReadableStream.md#tee)
- [values](internal_.ReadableStream.md#values)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Defined in

node_modules/@types/node/stream/web.d.ts:147

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): [`AsyncIterableIterator`](internal_.AsyncIterableIterator.md)\<`R`\>

#### Returns

[`AsyncIterableIterator`](internal_.AsyncIterableIterator.md)\<`R`\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:155

___

### cancel

▸ **cancel**(`reason?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:148

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](internal_.ReadableStreamDefaultReader.md)\<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](internal_.ReadableStreamDefaultReader.md)\<`R`\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:149

▸ **getReader**(`options`): [`ReadableStreamBYOBReader`](internal_.ReadableStreamBYOBReader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.mode` | ``"byob"`` |

#### Returns

[`ReadableStreamBYOBReader`](internal_.ReadableStreamBYOBReader.md)

#### Defined in

node_modules/@types/node/stream/web.d.ts:150

___

### pipeThrough

▸ **pipeThrough**\<`T`\>(`transform`, `options?`): [`ReadableStream`](internal_.ReadableStream.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](internal_.ReadableWritablePair.md)\<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](internal_.StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](internal_.ReadableStream.md)\<`T`\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:151

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](internal_.WritableStream-1.md)\<`R`\> |
| `options?` | [`StreamPipeOptions`](internal_.StreamPipeOptions.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:152

___

### tee

▸ **tee**(): [[`ReadableStream`](internal_.ReadableStream.md)\<`R`\>, [`ReadableStream`](internal_.ReadableStream.md)\<`R`\>]

#### Returns

[[`ReadableStream`](internal_.ReadableStream.md)\<`R`\>, [`ReadableStream`](internal_.ReadableStream.md)\<`R`\>]

#### Defined in

node_modules/@types/node/stream/web.d.ts:153

___

### values

▸ **values**(`options?`): [`AsyncIterableIterator`](internal_.AsyncIterableIterator.md)\<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.preventCancel?` | `boolean` |

#### Returns

[`AsyncIterableIterator`](internal_.AsyncIterableIterator.md)\<`R`\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:154
