[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / BlobOptions

# Interface: BlobOptions

[\<internal\>](../modules/internal_.md).BlobOptions

## Table of contents

### Properties

- [endings](internal_.BlobOptions.md#endings)
- [type](internal_.BlobOptions.md#type)

## Properties

### endings

• `Optional` **endings**: ``"transparent"`` \| ``"native"``

One of either `'transparent'` or `'native'`. When set to `'native'`, line endings in string source parts
will be converted to the platform native line-ending as specified by `require('node:os').EOL`.

#### Defined in

node_modules/@types/node/buffer.d.ts:134

___

### type

• `Optional` **type**: `string`

The Blob content-type. The intent is for `type` to convey
the MIME media type of the data, however no validation of the type format
is performed.

#### Defined in

node_modules/@types/node/buffer.d.ts:140
