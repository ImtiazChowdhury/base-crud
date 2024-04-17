[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / StreamOptions

# Interface: StreamOptions\<T\>

[\<internal\>](../modules/internal_.md).StreamOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Stream`](../classes/internal_.Stream.md) |

## Hierarchy

- [`Abortable`](internal_.EventEmitter.Abortable.md)

  ↳ **`StreamOptions`**

  ↳↳ [`ReadableOptions`](internal_.ReadableOptions.md)

  ↳↳ [`WritableOptions`](internal_.WritableOptions.md)

## Table of contents

### Properties

- [autoDestroy](internal_.StreamOptions.md#autodestroy)
- [emitClose](internal_.StreamOptions.md#emitclose)
- [highWaterMark](internal_.StreamOptions.md#highwatermark)
- [objectMode](internal_.StreamOptions.md#objectmode)
- [signal](internal_.StreamOptions.md#signal)

### Methods

- [construct](internal_.StreamOptions.md#construct)
- [destroy](internal_.StreamOptions.md#destroy)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:952

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:947

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Defined in

node_modules/@types/node/stream.d.ts:948

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:949

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[Abortable](internal_.EventEmitter.Abortable.md).[signal](internal_.EventEmitter.Abortable.md#signal)

#### Defined in

node_modules/@types/node/events.d.ts:469

## Methods

### construct

▸ **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:950

___

### destroy

▸ **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `error` | ``null`` \| [`Error`](internal_.Error.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:951
