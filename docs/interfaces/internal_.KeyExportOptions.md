[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / KeyExportOptions

# Interface: KeyExportOptions\<T\>

[\<internal\>](../modules/internal_.md).KeyExportOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`KeyFormat`](../modules/internal_.md#keyformat) |

## Table of contents

### Properties

- [cipher](internal_.KeyExportOptions.md#cipher)
- [format](internal_.KeyExportOptions.md#format)
- [passphrase](internal_.KeyExportOptions.md#passphrase)
- [type](internal_.KeyExportOptions.md#type)

## Properties

### cipher

• `Optional` **cipher**: `string`

#### Defined in

node_modules/@types/node/crypto.d.ts:505

___

### format

• **format**: `T`

#### Defined in

node_modules/@types/node/crypto.d.ts:504

___

### passphrase

• `Optional` **passphrase**: `string` \| [`Buffer`](internal_.Buffer.md)

#### Defined in

node_modules/@types/node/crypto.d.ts:506

___

### type

• **type**: ``"pkcs1"`` \| ``"spki"`` \| ``"pkcs8"`` \| ``"sec1"``

#### Defined in

node_modules/@types/node/crypto.d.ts:503
