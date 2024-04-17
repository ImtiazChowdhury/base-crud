[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ReadableOptions

# Interface: ReadableOptions

[\<internal\>](../modules/internal_.md).ReadableOptions

## Hierarchy

- [`StreamOptions`](internal_.StreamOptions.md)\<[`Readable`](../classes/internal_.Readable.md)\>

  ↳ **`ReadableOptions`**

  ↳↳ [`DuplexOptions`](internal_.DuplexOptions.md)

## Table of contents

### Properties

- [autoDestroy](internal_.ReadableOptions.md#autodestroy)
- [emitClose](internal_.ReadableOptions.md#emitclose)
- [encoding](internal_.ReadableOptions.md#encoding)
- [highWaterMark](internal_.ReadableOptions.md#highwatermark)
- [objectMode](internal_.ReadableOptions.md#objectmode)
- [signal](internal_.ReadableOptions.md#signal)

### Methods

- [construct](internal_.ReadableOptions.md#construct)
- [destroy](internal_.ReadableOptions.md#destroy)
- [read](internal_.ReadableOptions.md#read)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[StreamOptions](internal_.StreamOptions.md).[autoDestroy](internal_.StreamOptions.md#autodestroy)

#### Defined in

node_modules/@types/node/stream.d.ts:952

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[StreamOptions](internal_.StreamOptions.md).[emitClose](internal_.StreamOptions.md#emitclose)

#### Defined in

node_modules/@types/node/stream.d.ts:947

___

### encoding

• `Optional` **encoding**: [`BufferEncoding`](../modules/internal_.md#bufferencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:955

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[StreamOptions](internal_.StreamOptions.md).[highWaterMark](internal_.StreamOptions.md#highwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:948

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[StreamOptions](internal_.StreamOptions.md).[objectMode](internal_.StreamOptions.md#objectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:949

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[StreamOptions](internal_.StreamOptions.md).[signal](internal_.StreamOptions.md#signal)

#### Defined in

node_modules/@types/node/events.d.ts:469

## Methods

### construct

▸ **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](../classes/internal_.Readable.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](internal_.StreamOptions.md).[construct](internal_.StreamOptions.md#construct)

#### Defined in

node_modules/@types/node/stream.d.ts:950

___

### destroy

▸ **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](../classes/internal_.Readable.md) |
| `error` | ``null`` \| [`Error`](internal_.Error.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](internal_.StreamOptions.md).[destroy](internal_.StreamOptions.md#destroy)

#### Defined in

node_modules/@types/node/stream.d.ts:951

___

### read

▸ **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](../classes/internal_.Readable.md) |
| `size` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:956
