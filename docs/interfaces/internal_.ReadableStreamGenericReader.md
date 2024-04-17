[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ReadableStreamGenericReader

# Interface: ReadableStreamGenericReader

[\<internal\>](../modules/internal_.md).ReadableStreamGenericReader

## Hierarchy

- **`ReadableStreamGenericReader`**

  ↳ [`ReadableStreamDefaultReader`](internal_.ReadableStreamDefaultReader.md)

  ↳ [`ReadableStreamBYOBReader`](internal_.ReadableStreamBYOBReader.md)

## Table of contents

### Properties

- [closed](internal_.ReadableStreamGenericReader.md#closed)

### Methods

- [cancel](internal_.ReadableStreamGenericReader.md#cancel)

## Properties

### closed

• `Readonly` **closed**: `Promise`\<`undefined`\>

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

#### Defined in

node_modules/@types/node/stream/web.d.ts:66
