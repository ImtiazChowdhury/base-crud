[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ReadableWritablePair

# Interface: ReadableWritablePair\<R, W\>

[\<internal\>](../modules/internal_.md).ReadableWritablePair

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |
| `W` | `any` |

## Table of contents

### Properties

- [readable](internal_.ReadableWritablePair.md#readable)
- [writable](internal_.ReadableWritablePair.md#writable)

## Properties

### readable

• **readable**: [`ReadableStream`](internal_.ReadableStream.md)\<`R`\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:5

___

### writable

• **writable**: [`WritableStream`](internal_.WritableStream-1.md)\<`W`\>

Provides a convenient, chainable way of piping this readable stream
through a transform stream (or any other { writable, readable }
pair). It simply pipes the stream into the writable side of the
supplied pair, and returns the readable side for further use.

Piping a stream will lock it for the duration of the pipe, preventing
any other consumer from acquiring a reader.

#### Defined in

node_modules/@types/node/stream/web.d.ts:15
