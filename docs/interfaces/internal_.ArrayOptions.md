[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ArrayOptions

# Interface: ArrayOptions

[\<internal\>](../modules/internal_.md).ArrayOptions

## Table of contents

### Properties

- [concurrency](internal_.ArrayOptions.md#concurrency)
- [signal](internal_.ArrayOptions.md#signal)

## Properties

### concurrency

• `Optional` **concurrency**: `number`

the maximum concurrent invocations of `fn` to call on the stream at once. **Default: 1**.

#### Defined in

node_modules/@types/node/stream.d.ts:45

___

### signal

• `Optional` **signal**: `AbortSignal`

allows destroying the stream if the signal is aborted.

#### Defined in

node_modules/@types/node/stream.d.ts:47
