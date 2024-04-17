[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](internal_.md) / internal

# Namespace: internal

[\<internal\>](internal_.md).internal

## Table of contents

### References

- [Duplex](internal_.internal.md#duplex)
- [DuplexOptions](internal_.internal.md#duplexoptions)
- [Readable](internal_.internal.md#readable)
- [ReadableOptions](internal_.internal.md#readableoptions)
- [Stream](internal_.internal.md#stream)
- [StreamOptions](internal_.internal.md#streamoptions)
- [Writable](internal_.internal.md#writable)
- [WritableOptions](internal_.internal.md#writableoptions)

### Namespaces

- [finished](internal_.internal.finished.md)
- [pipeline](internal_.internal.pipeline.md)

### Classes

- [PassThrough](../classes/internal_.internal.PassThrough.md)
- [Transform](../classes/internal_.internal.Transform.md)

### Interfaces

- [FinishedOptions](../interfaces/internal_.internal.FinishedOptions.md)
- [Pipe](../interfaces/internal_.internal.Pipe.md)
- [PipelineOptions](../interfaces/internal_.internal.PipelineOptions.md)
- [TransformOptions](../interfaces/internal_.internal.TransformOptions.md)

### Type Aliases

- [PipelineCallback](internal_.internal.md#pipelinecallback)
- [PipelineDestination](internal_.internal.md#pipelinedestination)
- [PipelineDestinationIterableFunction](internal_.internal.md#pipelinedestinationiterablefunction)
- [PipelineDestinationPromiseFunction](internal_.internal.md#pipelinedestinationpromisefunction)
- [PipelinePromise](internal_.internal.md#pipelinepromise)
- [PipelineSource](internal_.internal.md#pipelinesource)
- [PipelineSourceFunction](internal_.internal.md#pipelinesourcefunction)
- [PipelineTransform](internal_.internal.md#pipelinetransform)
- [PipelineTransformSource](internal_.internal.md#pipelinetransformsource)
- [TransformCallback](internal_.internal.md#transformcallback)

### Variables

- [consumers](internal_.internal.md#consumers)
- [promises](internal_.internal.md#promises)

### Functions

- [addAbortSignal](internal_.internal.md#addabortsignal)
- [finished](internal_.internal.md#finished)
- [getDefaultHighWaterMark](internal_.internal.md#getdefaulthighwatermark)
- [isErrored](internal_.internal.md#iserrored)
- [isReadable](internal_.internal.md#isreadable)
- [pipeline](internal_.internal.md#pipeline)
- [setDefaultHighWaterMark](internal_.internal.md#setdefaulthighwatermark)

## References

### Duplex

Re-exports [Duplex](../classes/internal_.Duplex.md)

___

### DuplexOptions

Re-exports [DuplexOptions](../interfaces/internal_.DuplexOptions.md)

___

### Readable

Re-exports [Readable](../classes/internal_.Readable.md)

___

### ReadableOptions

Re-exports [ReadableOptions](../interfaces/internal_.ReadableOptions.md)

___

### Stream

Re-exports [Stream](../classes/internal_.Stream.md)

___

### StreamOptions

Re-exports [StreamOptions](../interfaces/internal_.StreamOptions.md)

___

### Writable

Re-exports [Writable](../classes/internal_.Writable.md)

___

### WritableOptions

Re-exports [WritableOptions](../interfaces/internal_.WritableOptions.md)

## Type Aliases

### PipelineCallback

Ƭ **PipelineCallback**\<`S`\>: `S` extends [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)\<`any`, infer P\> ? (`err`: [`ErrnoException`](../interfaces/internal_.ErrnoException.md) \| ``null``, `value`: `P`) => `void` : (`err`: [`ErrnoException`](../interfaces/internal_.ErrnoException.md) \| ``null``) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`PipelineDestination`](internal_.internal.md#pipelinedestination)\<`any`, `any`\> |

#### Defined in

node_modules/@types/node/stream.d.ts:1465

___

### PipelineDestination

Ƭ **PipelineDestination**\<`S`, `P`\>: `S` extends [`PipelineTransformSource`](internal_.internal.md#pipelinetransformsource)\<infer ST\> ? [`WritableStream`](../interfaces/internal_.WritableStream.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)\<`ST`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)\<`ST`, `P`\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`PipelineTransformSource`](internal_.internal.md#pipelinetransformsource)\<`any`\> |
| `P` | `P` |

#### Defined in

node_modules/@types/node/stream.d.ts:1459

___

### PipelineDestinationIterableFunction

Ƭ **PipelineDestinationIterableFunction**\<`T`\>: (`source`: [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`T`\>) => [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`any`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`source`): [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`T`\> |

##### Returns

[`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`any`\>

#### Defined in

node_modules/@types/node/stream.d.ts:1457

___

### PipelineDestinationPromiseFunction

Ƭ **PipelineDestinationPromiseFunction**\<`T`, `P`\>: (`source`: [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`T`\>) => `Promise`\<`P`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `P` |

#### Type declaration

▸ (`source`): `Promise`\<`P`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`T`\> |

##### Returns

`Promise`\<`P`\>

#### Defined in

node_modules/@types/node/stream.d.ts:1458

___

### PipelinePromise

Ƭ **PipelinePromise**\<`S`\>: `S` extends [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)\<`any`, infer P\> ? `Promise`\<`P`\> : `Promise`\<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`PipelineDestination`](internal_.internal.md#pipelinedestination)\<`any`, `any`\> |

#### Defined in

node_modules/@types/node/stream.d.ts:1468

___

### PipelineSource

Ƭ **PipelineSource**\<`T`\>: [`Iterable`](../interfaces/internal_.Iterable.md)\<`T`\> \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`T`\> \| [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) \| [`PipelineSourceFunction`](internal_.internal.md#pipelinesourcefunction)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/@types/node/stream.d.ts:1449

___

### PipelineSourceFunction

Ƭ **PipelineSourceFunction**\<`T`\>: () => [`Iterable`](../interfaces/internal_.Iterable.md)\<`T`\> \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): [`Iterable`](../interfaces/internal_.Iterable.md)\<`T`\> \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`T`\>

##### Returns

[`Iterable`](../interfaces/internal_.Iterable.md)\<`T`\> \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`T`\>

#### Defined in

node_modules/@types/node/stream.d.ts:1448

___

### PipelineTransform

Ƭ **PipelineTransform**\<`S`, `U`\>: [`ReadWriteStream`](../interfaces/internal_.ReadWriteStream.md) \| (`source`: `S` extends (...`args`: `any`[]) => [`Iterable`](../interfaces/internal_.Iterable.md)\<infer ST\> \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<infer ST\> ? [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`ST`\> : `S`) => [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`PipelineTransformSource`](internal_.internal.md#pipelinetransformsource)\<`any`\> |
| `U` | `U` |

#### Defined in

node_modules/@types/node/stream.d.ts:1450

___

### PipelineTransformSource

Ƭ **PipelineTransformSource**\<`T`\>: [`PipelineSource`](internal_.internal.md#pipelinesource)\<`T`\> \| [`PipelineTransform`](internal_.internal.md#pipelinetransform)\<`any`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/@types/node/stream.d.ts:1456

___

### TransformCallback

Ƭ **TransformCallback**: (`error?`: [`Error`](../interfaces/internal_.Error.md) \| ``null``, `data?`: `any`) => `void`

#### Type declaration

▸ (`error?`, `data?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | [`Error`](../interfaces/internal_.Error.md) \| ``null`` |
| `data?` | `any` |

##### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:1245

## Variables

### consumers

• `Const` **consumers**: typeof [`"node:stream/consumers"`](internal_._node_stream_consumers_.md)

#### Defined in

node_modules/@types/node/stream.d.ts:1694

___

### promises

• `Const` **promises**: typeof [`"node:stream/promises"`](internal_._node_stream_promises_.md)

#### Defined in

node_modules/@types/node/stream.d.ts:1693

## Functions

### addAbortSignal

▸ **addAbortSignal**\<`T`\>(`signal`, `stream`): `T`

A stream to attach a signal to.

Attaches an AbortSignal to a readable or writeable stream. This lets code
control stream destruction using an `AbortController`.

Calling `abort` on the `AbortController` corresponding to the passed`AbortSignal` will behave the same way as calling `.destroy(new AbortError())`on the stream, and `controller.error(new
AbortError())` for webstreams.

```js
const fs = require('node:fs');

const controller = new AbortController();
const read = addAbortSignal(
  controller.signal,
  fs.createReadStream(('object.json')),
);
// Later, abort the operation closing the stream
controller.abort();
```

Or using an `AbortSignal` with a readable stream as an async iterable:

```js
const controller = new AbortController();
setTimeout(() => controller.abort(), 10_000); // set a timeout
const stream = addAbortSignal(
  controller.signal,
  fs.createReadStream(('object.json')),
);
(async () => {
  try {
    for await (const chunk of stream) {
      await process(chunk);
    }
  } catch (e) {
    if (e.name === 'AbortError') {
      // The operation was cancelled
    } else {
      throw e;
    }
  }
})();
```

Or using an `AbortSignal` with a ReadableStream:

```js
const controller = new AbortController();
const rs = new ReadableStream({
  start(controller) {
    controller.enqueue('hello');
    controller.enqueue('world');
    controller.close();
  },
});

addAbortSignal(controller.signal, rs);

finished(rs, (err) => {
  if (err) {
    if (err.name === 'AbortError') {
      // The operation was cancelled
    }
  }
});

const reader = rs.getReader();

reader.read().then(({ value, done }) => {
  console.log(value); // hello
  console.log(done); // false
  controller.abort();
});
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Stream`](../classes/internal_.Stream.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signal` | `AbortSignal` | A signal representing possible cancellation |
| `stream` | `T` | a stream to attach a signal to |

#### Returns

`T`

**`Since`**

v15.4.0

#### Defined in

node_modules/@types/node/stream.d.ts:1368

___

### finished

▸ **finished**(`stream`, `options`, `callback`): () => `void`

A readable and/or writable stream/webstream.

A function to get notified when a stream is no longer readable, writable
or has experienced an error or a premature close event.

```js
const { finished } = require('node:stream');
const fs = require('node:fs');

const rs = fs.createReadStream('archive.tar');

finished(rs, (err) => {
  if (err) {
    console.error('Stream failed.', err);
  } else {
    console.log('Stream is done reading.');
  }
});

rs.resume(); // Drain the stream.
```

Especially useful in error handling scenarios where a stream is destroyed
prematurely (like an aborted HTTP request), and will not emit `'end'`or `'finish'`.

The `finished` API provides `promise version`.

`stream.finished()` leaves dangling event listeners (in particular`'error'`, `'end'`, `'finish'` and `'close'`) after `callback` has been
invoked. The reason for this is so that unexpected `'error'` events (due to
incorrect stream implementations) do not cause unexpected crashes.
If this is unwanted behavior then the returned cleanup function needs to be
invoked in the callback:

```js
const cleanup = finished(rs, (err) => {
  cleanup();
  // ...
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) \| [`WritableStream`](../interfaces/internal_.WritableStream.md) \| [`ReadWriteStream`](../interfaces/internal_.ReadWriteStream.md) | A readable and/or writable stream. |
| `options` | [`FinishedOptions`](../interfaces/internal_.internal.FinishedOptions.md) | - |
| `callback` | (`err?`: ``null`` \| [`ErrnoException`](../interfaces/internal_.ErrnoException.md)) => `void` | A callback function that takes an optional error argument. |

#### Returns

`fn`

A cleanup function which removes all registered listeners.

▸ (): `void`

##### Returns

`void`

**`Since`**

v10.0.0

#### Defined in

node_modules/@types/node/stream.d.ts:1433

▸ **finished**(`stream`, `callback`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) \| [`WritableStream`](../interfaces/internal_.WritableStream.md) \| [`ReadWriteStream`](../interfaces/internal_.ReadWriteStream.md) |
| `callback` | (`err?`: ``null`` \| [`ErrnoException`](../interfaces/internal_.ErrnoException.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:1438

___

### getDefaultHighWaterMark

▸ **getDefaultHighWaterMark**(`objectMode`): `number`

Returns the default highWaterMark used by streams.
Defaults to `16384` (16 KiB), or `16` for `objectMode`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectMode` | `boolean` |

#### Returns

`number`

**`Since`**

v19.9.0

#### Defined in

node_modules/@types/node/stream.d.ts:1375

___

### isErrored

▸ **isErrored**(`stream`): `boolean`

Returns whether the stream has encountered an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`Readable`](../classes/internal_.Readable.md) \| [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) \| [`WritableStream`](../interfaces/internal_.WritableStream.md) \| [`Writable`](../classes/internal_.Writable.md) |

#### Returns

`boolean`

**`Since`**

v17.3.0, v16.14.0

#### Defined in

node_modules/@types/node/stream.d.ts:1686

___

### isReadable

▸ **isReadable**(`stream`): `boolean`

Returns whether the stream is readable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`Readable`](../classes/internal_.Readable.md) \| [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) |

#### Returns

`boolean`

**`Since`**

v17.4.0, v16.14.0

#### Defined in

node_modules/@types/node/stream.d.ts:1692

___

### pipeline

▸ **pipeline**\<`A`, `B`\>(`source`, `destination`, `callback?`): `B` extends [`WritableStream`](../interfaces/internal_.WritableStream.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream.md)

A module method to pipe between streams and generators forwarding errors and
properly cleaning up and provide a callback when the pipeline is complete.

```js
const { pipeline } = require('node:stream');
const fs = require('node:fs');
const zlib = require('node:zlib');

// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.

// A pipeline to gzip a potentially huge tar file efficiently:

pipeline(
  fs.createReadStream('archive.tar'),
  zlib.createGzip(),
  fs.createWriteStream('archive.tar.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  },
);
```

The `pipeline` API provides a `promise version`.

`stream.pipeline()` will call `stream.destroy(err)` on all streams except:

* `Readable` streams which have emitted `'end'` or `'close'`.
* `Writable` streams which have emitted `'finish'` or `'close'`.

`stream.pipeline()` leaves dangling event listeners on the streams
after the `callback` has been invoked. In the case of reuse of streams after
failure, this can cause event listener leaks and swallowed errors. If the last
stream is readable, dangling event listeners will be removed so that the last
stream can be consumed later.

`stream.pipeline()` closes all the streams when an error is raised.
The `IncomingRequest` usage with `pipeline` could lead to an unexpected behavior
once it would destroy the socket without sending the expected response.
See the example below:

```js
const fs = require('node:fs');
const http = require('node:http');
const { pipeline } = require('node:stream');

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream('./fileNotExist.txt');
  pipeline(fileStream, res, (err) => {
    if (err) {
      console.log(err); // No such file
      // this message can't be sent once `pipeline` already destroyed the socket
      return res.end('error!!!');
    }
  });
});
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](internal_.internal.md#pipelinesource)\<`any`\> |
| `B` | extends [`WritableStream`](../interfaces/internal_.WritableStream.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)\<`any`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)\<`any`, `any`\> \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)\<`string` \| [`Buffer`](../interfaces/internal_.Buffer.md)\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)\<`string` \| [`Buffer`](../interfaces/internal_.Buffer.md), `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `A` | - |
| `destination` | `B` | - |
| `callback?` | [`PipelineCallback`](internal_.internal.md#pipelinecallback)\<`B`\> | Called when the pipeline is fully done. |

#### Returns

`B` extends [`WritableStream`](../interfaces/internal_.WritableStream.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream.md)

**`Since`**

v10.0.0

#### Defined in

node_modules/@types/node/stream.d.ts:1539

▸ **pipeline**\<`A`, `T1`, `B`\>(`source`, `transform1`, `destination`, `callback?`): `B` extends [`WritableStream`](../interfaces/internal_.WritableStream.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](internal_.internal.md#pipelinesource)\<`any`\> |
| `T1` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)\<`A`, `any`\> |
| `B` | extends [`WritableStream`](../interfaces/internal_.WritableStream.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)\<`any`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)\<`any`, `any`\> \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)\<`string` \| [`Buffer`](../interfaces/internal_.Buffer.md)\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)\<`string` \| [`Buffer`](../interfaces/internal_.Buffer.md), `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `destination` | `B` |
| `callback?` | [`PipelineCallback`](internal_.internal.md#pipelinecallback)\<`B`\> |

#### Returns

`B` extends [`WritableStream`](../interfaces/internal_.WritableStream.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream.md)

#### Defined in

node_modules/@types/node/stream.d.ts:1544

▸ **pipeline**\<`A`, `T1`, `T2`, `B`\>(`source`, `transform1`, `transform2`, `destination`, `callback?`): `B` extends [`WritableStream`](../interfaces/internal_.WritableStream.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](internal_.internal.md#pipelinesource)\<`any`\> |
| `T1` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)\<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)\<`T1`, `any`\> |
| `B` | extends [`WritableStream`](../interfaces/internal_.WritableStream.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)\<`any`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)\<`any`, `any`\> \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)\<`string` \| [`Buffer`](../interfaces/internal_.Buffer.md)\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)\<`string` \| [`Buffer`](../interfaces/internal_.Buffer.md), `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `destination` | `B` |
| `callback?` | [`PipelineCallback`](internal_.internal.md#pipelinecallback)\<`B`\> |

#### Returns

`B` extends [`WritableStream`](../interfaces/internal_.WritableStream.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream.md)

#### Defined in

node_modules/@types/node/stream.d.ts:1554

▸ **pipeline**\<`A`, `T1`, `T2`, `T3`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `destination`, `callback?`): `B` extends [`WritableStream`](../interfaces/internal_.WritableStream.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](internal_.internal.md#pipelinesource)\<`any`\> |
| `T1` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)\<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)\<`T1`, `any`\> |
| `T3` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)\<`T2`, `any`\> |
| `B` | extends [`WritableStream`](../interfaces/internal_.WritableStream.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)\<`any`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)\<`any`, `any`\> \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)\<`string` \| [`Buffer`](../interfaces/internal_.Buffer.md)\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)\<`string` \| [`Buffer`](../interfaces/internal_.Buffer.md), `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `transform3` | `T3` |
| `destination` | `B` |
| `callback?` | [`PipelineCallback`](internal_.internal.md#pipelinecallback)\<`B`\> |

#### Returns

`B` extends [`WritableStream`](../interfaces/internal_.WritableStream.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream.md)

#### Defined in

node_modules/@types/node/stream.d.ts:1566

▸ **pipeline**\<`A`, `T1`, `T2`, `T3`, `T4`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `transform4`, `destination`, `callback?`): `B` extends [`WritableStream`](../interfaces/internal_.WritableStream.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](internal_.internal.md#pipelinesource)\<`any`\> |
| `T1` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)\<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)\<`T1`, `any`\> |
| `T3` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)\<`T2`, `any`\> |
| `T4` | extends [`PipelineTransform`](internal_.internal.md#pipelinetransform)\<`T3`, `any`\> |
| `B` | extends [`WritableStream`](../interfaces/internal_.WritableStream.md) \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)\<`any`\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)\<`any`, `any`\> \| [`PipelineDestinationIterableFunction`](internal_.internal.md#pipelinedestinationiterablefunction)\<`string` \| [`Buffer`](../interfaces/internal_.Buffer.md)\> \| [`PipelineDestinationPromiseFunction`](internal_.internal.md#pipelinedestinationpromisefunction)\<`string` \| [`Buffer`](../interfaces/internal_.Buffer.md), `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `transform3` | `T3` |
| `transform4` | `T4` |
| `destination` | `B` |
| `callback?` | [`PipelineCallback`](internal_.internal.md#pipelinecallback)\<`B`\> |

#### Returns

`B` extends [`WritableStream`](../interfaces/internal_.WritableStream.md) ? `B` : [`WritableStream`](../interfaces/internal_.WritableStream.md)

#### Defined in

node_modules/@types/node/stream.d.ts:1580

▸ **pipeline**(`streams`, `callback?`): [`WritableStream`](../interfaces/internal_.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `streams` | readonly ([`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) \| [`WritableStream`](../interfaces/internal_.WritableStream.md) \| [`ReadWriteStream`](../interfaces/internal_.ReadWriteStream.md))[] |
| `callback?` | (`err`: ``null`` \| [`ErrnoException`](../interfaces/internal_.ErrnoException.md)) => `void` |

#### Returns

[`WritableStream`](../interfaces/internal_.WritableStream.md)

#### Defined in

node_modules/@types/node/stream.d.ts:1596

▸ **pipeline**(`stream1`, `stream2`, `...streams`): [`WritableStream`](../interfaces/internal_.WritableStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream1` | [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) |
| `stream2` | [`WritableStream`](../interfaces/internal_.WritableStream.md) \| [`ReadWriteStream`](../interfaces/internal_.ReadWriteStream.md) |
| `...streams` | ([`WritableStream`](../interfaces/internal_.WritableStream.md) \| [`ReadWriteStream`](../interfaces/internal_.ReadWriteStream.md) \| (`err`: ``null`` \| [`ErrnoException`](../interfaces/internal_.ErrnoException.md)) => `void`)[] |

#### Returns

[`WritableStream`](../interfaces/internal_.WritableStream.md)

#### Defined in

node_modules/@types/node/stream.d.ts:1600

___

### setDefaultHighWaterMark

▸ **setDefaultHighWaterMark**(`objectMode`, `value`): `void`

Sets the default highWaterMark used by streams.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectMode` | `boolean` |  |
| `value` | `number` | highWaterMark value |

#### Returns

`void`

**`Since`**

v19.9.0

#### Defined in

node_modules/@types/node/stream.d.ts:1382
