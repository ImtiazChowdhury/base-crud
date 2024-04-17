[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / UnderlyingSink

# Interface: UnderlyingSink\<W\>

[\<internal\>](../modules/internal_.md).UnderlyingSink

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [abort](internal_.UnderlyingSink.md#abort)
- [close](internal_.UnderlyingSink.md#close)
- [start](internal_.UnderlyingSink.md#start)
- [type](internal_.UnderlyingSink.md#type)
- [write](internal_.UnderlyingSink.md#write)

## Properties

### abort

• `Optional` **abort**: [`UnderlyingSinkAbortCallback`](internal_.UnderlyingSinkAbortCallback.md)

#### Defined in

node_modules/@types/node/stream/web.d.ts:136

___

### close

• `Optional` **close**: [`UnderlyingSinkCloseCallback`](internal_.UnderlyingSinkCloseCallback.md)

#### Defined in

node_modules/@types/node/stream/web.d.ts:137

___

### start

• `Optional` **start**: [`UnderlyingSinkStartCallback`](internal_.UnderlyingSinkStartCallback.md)

#### Defined in

node_modules/@types/node/stream/web.d.ts:138

___

### type

• `Optional` **type**: `undefined`

#### Defined in

node_modules/@types/node/stream/web.d.ts:139

___

### write

• `Optional` **write**: [`UnderlyingSinkWriteCallback`](internal_.UnderlyingSinkWriteCallback.md)\<`W`\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:140
