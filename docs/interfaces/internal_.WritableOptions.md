[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / WritableOptions

# Interface: WritableOptions

[\<internal\>](../modules/internal_.md).WritableOptions

## Hierarchy

- [`StreamOptions`](internal_.StreamOptions.md)\<[`Writable`](../classes/internal_.Writable.md)\>

  ↳ **`WritableOptions`**

  ↳↳ [`DuplexOptions`](internal_.DuplexOptions.md)

## Table of contents

### Properties

- [autoDestroy](internal_.WritableOptions.md#autodestroy)
- [decodeStrings](internal_.WritableOptions.md#decodestrings)
- [defaultEncoding](internal_.WritableOptions.md#defaultencoding)
- [emitClose](internal_.WritableOptions.md#emitclose)
- [highWaterMark](internal_.WritableOptions.md#highwatermark)
- [objectMode](internal_.WritableOptions.md#objectmode)
- [signal](internal_.WritableOptions.md#signal)

### Methods

- [construct](internal_.WritableOptions.md#construct)
- [destroy](internal_.WritableOptions.md#destroy)
- [final](internal_.WritableOptions.md#final)
- [write](internal_.WritableOptions.md#write)
- [writev](internal_.WritableOptions.md#writev)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[StreamOptions](internal_.StreamOptions.md).[autoDestroy](internal_.StreamOptions.md#autodestroy)

#### Defined in

node_modules/@types/node/stream.d.ts:952

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:979

___

### defaultEncoding

• `Optional` **defaultEncoding**: [`BufferEncoding`](../modules/internal_.md#bufferencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:980

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[StreamOptions](internal_.StreamOptions.md).[emitClose](internal_.StreamOptions.md#emitclose)

#### Defined in

node_modules/@types/node/stream.d.ts:947

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
| `this` | [`Writable`](../classes/internal_.Writable.md) |
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
| `this` | [`Writable`](../classes/internal_.Writable.md) |
| `error` | ``null`` \| [`Error`](internal_.Error.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](internal_.StreamOptions.md).[destroy](internal_.StreamOptions.md#destroy)

#### Defined in

node_modules/@types/node/stream.d.ts:951

___

### final

▸ **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](../classes/internal_.Writable.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:995

___

### write

▸ **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](../classes/internal_.Writable.md) |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:981

___

### writev

▸ **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](../classes/internal_.Writable.md) |
| `chunks` | \{ `chunk`: `any` ; `encoding`: [`BufferEncoding`](../modules/internal_.md#bufferencoding)  }[] |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:987
