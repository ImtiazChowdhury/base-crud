[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / [internal](../modules/internal_.internal.md) / TransformOptions

# Interface: TransformOptions

[\<internal\>](../modules/internal_.md).[internal](../modules/internal_.internal.md).TransformOptions

## Hierarchy

- [`DuplexOptions`](internal_.DuplexOptions.md)

  ↳ **`TransformOptions`**

## Table of contents

### Properties

- [allowHalfOpen](internal_.internal.TransformOptions.md#allowhalfopen)
- [autoDestroy](internal_.internal.TransformOptions.md#autodestroy)
- [decodeStrings](internal_.internal.TransformOptions.md#decodestrings)
- [defaultEncoding](internal_.internal.TransformOptions.md#defaultencoding)
- [emitClose](internal_.internal.TransformOptions.md#emitclose)
- [encoding](internal_.internal.TransformOptions.md#encoding)
- [highWaterMark](internal_.internal.TransformOptions.md#highwatermark)
- [objectMode](internal_.internal.TransformOptions.md#objectmode)
- [readableHighWaterMark](internal_.internal.TransformOptions.md#readablehighwatermark)
- [readableObjectMode](internal_.internal.TransformOptions.md#readableobjectmode)
- [signal](internal_.internal.TransformOptions.md#signal)
- [writableCorked](internal_.internal.TransformOptions.md#writablecorked)
- [writableHighWaterMark](internal_.internal.TransformOptions.md#writablehighwatermark)
- [writableObjectMode](internal_.internal.TransformOptions.md#writableobjectmode)

### Methods

- [construct](internal_.internal.TransformOptions.md#construct)
- [destroy](internal_.internal.TransformOptions.md#destroy)
- [final](internal_.internal.TransformOptions.md#final)
- [flush](internal_.internal.TransformOptions.md#flush)
- [read](internal_.internal.TransformOptions.md#read)
- [transform](internal_.internal.TransformOptions.md#transform)
- [write](internal_.internal.TransformOptions.md#write)
- [writev](internal_.internal.TransformOptions.md#writev)

## Properties

### allowHalfOpen

• `Optional` **allowHalfOpen**: `boolean`

#### Inherited from

[DuplexOptions](internal_.DuplexOptions.md).[allowHalfOpen](internal_.DuplexOptions.md#allowhalfopen)

#### Defined in

node_modules/@types/node/stream.d.ts:1018

___

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[DuplexOptions](internal_.DuplexOptions.md).[autoDestroy](internal_.DuplexOptions.md#autodestroy)

#### Defined in

node_modules/@types/node/stream.d.ts:952

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Inherited from

[DuplexOptions](internal_.DuplexOptions.md).[decodeStrings](internal_.DuplexOptions.md#decodestrings)

#### Defined in

node_modules/@types/node/stream.d.ts:979

___

### defaultEncoding

• `Optional` **defaultEncoding**: [`BufferEncoding`](../modules/internal_.md#bufferencoding)

#### Inherited from

[DuplexOptions](internal_.DuplexOptions.md).[defaultEncoding](internal_.DuplexOptions.md#defaultencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:980

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[DuplexOptions](internal_.DuplexOptions.md).[emitClose](internal_.DuplexOptions.md#emitclose)

#### Defined in

node_modules/@types/node/stream.d.ts:947

___

### encoding

• `Optional` **encoding**: [`BufferEncoding`](../modules/internal_.md#bufferencoding)

#### Inherited from

[DuplexOptions](internal_.DuplexOptions.md).[encoding](internal_.DuplexOptions.md#encoding)

#### Defined in

node_modules/@types/node/stream.d.ts:955

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[DuplexOptions](internal_.DuplexOptions.md).[highWaterMark](internal_.DuplexOptions.md#highwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:948

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[DuplexOptions](internal_.DuplexOptions.md).[objectMode](internal_.DuplexOptions.md#objectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:949

___

### readableHighWaterMark

• `Optional` **readableHighWaterMark**: `number`

#### Inherited from

[DuplexOptions](internal_.DuplexOptions.md).[readableHighWaterMark](internal_.DuplexOptions.md#readablehighwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:1021

___

### readableObjectMode

• `Optional` **readableObjectMode**: `boolean`

#### Inherited from

[DuplexOptions](internal_.DuplexOptions.md).[readableObjectMode](internal_.DuplexOptions.md#readableobjectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:1019

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[DuplexOptions](internal_.DuplexOptions.md).[signal](internal_.DuplexOptions.md#signal)

#### Defined in

node_modules/@types/node/events.d.ts:469

___

### writableCorked

• `Optional` **writableCorked**: `number`

#### Inherited from

[DuplexOptions](internal_.DuplexOptions.md).[writableCorked](internal_.DuplexOptions.md#writablecorked)

#### Defined in

node_modules/@types/node/stream.d.ts:1023

___

### writableHighWaterMark

• `Optional` **writableHighWaterMark**: `number`

#### Inherited from

[DuplexOptions](internal_.DuplexOptions.md).[writableHighWaterMark](internal_.DuplexOptions.md#writablehighwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:1022

___

### writableObjectMode

• `Optional` **writableObjectMode**: `boolean`

#### Inherited from

[DuplexOptions](internal_.DuplexOptions.md).[writableObjectMode](internal_.DuplexOptions.md#writableobjectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:1020

## Methods

### construct

▸ **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/internal_.internal.Transform.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Overrides

[DuplexOptions](internal_.DuplexOptions.md).[construct](internal_.DuplexOptions.md#construct)

#### Defined in

node_modules/@types/node/stream.d.ts:1247

___

### destroy

▸ **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/internal_.internal.Transform.md) |
| `error` | ``null`` \| [`Error`](internal_.Error.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Overrides

[DuplexOptions](internal_.DuplexOptions.md).[destroy](internal_.DuplexOptions.md#destroy)

#### Defined in

node_modules/@types/node/stream.d.ts:1264

___

### final

▸ **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/internal_.internal.Transform.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Overrides

[DuplexOptions](internal_.DuplexOptions.md).[final](internal_.DuplexOptions.md#final)

#### Defined in

node_modules/@types/node/stream.d.ts:1263

___

### flush

▸ **flush**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/internal_.internal.Transform.md) |
| `callback` | [`TransformCallback`](../modules/internal_.internal.md#transformcallback) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:1266

___

### read

▸ **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/internal_.internal.Transform.md) |
| `size` | `number` |

#### Returns

`void`

#### Overrides

[DuplexOptions](internal_.DuplexOptions.md).[read](internal_.DuplexOptions.md#read)

#### Defined in

node_modules/@types/node/stream.d.ts:1248

___

### transform

▸ **transform**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/internal_.internal.Transform.md) |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback` | [`TransformCallback`](../modules/internal_.internal.md#transformcallback) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:1265

___

### write

▸ **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/internal_.internal.Transform.md) |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Overrides

[DuplexOptions](internal_.DuplexOptions.md).[write](internal_.DuplexOptions.md#write)

#### Defined in

node_modules/@types/node/stream.d.ts:1249

___

### writev

▸ **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](../classes/internal_.internal.Transform.md) |
| `chunks` | \{ `chunk`: `any` ; `encoding`: [`BufferEncoding`](../modules/internal_.md#bufferencoding)  }[] |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Overrides

[DuplexOptions](internal_.DuplexOptions.md).[writev](internal_.DuplexOptions.md#writev)

#### Defined in

node_modules/@types/node/stream.d.ts:1255
