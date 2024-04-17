[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ReadableStream

# Interface: ReadableStream

[\<internal\>](../modules/internal_.md).ReadableStream

## Hierarchy

- [`EventEmitter`](internal_.EventEmitter-2.md)

  ↳ **`ReadableStream`**

  ↳↳ [`ReadWriteStream`](internal_.ReadWriteStream.md)

## Implemented by

- [`ReadableBase`](../classes/internal_.ReadableBase.md)

## Table of contents

### Properties

- [readable](internal_.ReadableStream-1.md#readable)

### Methods

- [[asyncIterator]](internal_.ReadableStream-1.md#[asynciterator])
- [[captureRejectionSymbol]](internal_.ReadableStream-1.md#[capturerejectionsymbol])
- [addListener](internal_.ReadableStream-1.md#addlistener)
- [emit](internal_.ReadableStream-1.md#emit)
- [eventNames](internal_.ReadableStream-1.md#eventnames)
- [getMaxListeners](internal_.ReadableStream-1.md#getmaxlisteners)
- [isPaused](internal_.ReadableStream-1.md#ispaused)
- [listenerCount](internal_.ReadableStream-1.md#listenercount)
- [listeners](internal_.ReadableStream-1.md#listeners)
- [off](internal_.ReadableStream-1.md#off)
- [on](internal_.ReadableStream-1.md#on)
- [once](internal_.ReadableStream-1.md#once)
- [pause](internal_.ReadableStream-1.md#pause)
- [pipe](internal_.ReadableStream-1.md#pipe)
- [prependListener](internal_.ReadableStream-1.md#prependlistener)
- [prependOnceListener](internal_.ReadableStream-1.md#prependoncelistener)
- [rawListeners](internal_.ReadableStream-1.md#rawlisteners)
- [read](internal_.ReadableStream-1.md#read)
- [removeAllListeners](internal_.ReadableStream-1.md#removealllisteners)
- [removeListener](internal_.ReadableStream-1.md#removelistener)
- [resume](internal_.ReadableStream-1.md#resume)
- [setEncoding](internal_.ReadableStream-1.md#setencoding)
- [setMaxListeners](internal_.ReadableStream-1.md#setmaxlisteners)
- [unpipe](internal_.ReadableStream-1.md#unpipe)
- [unshift](internal_.ReadableStream-1.md#unshift)
- [wrap](internal_.ReadableStream-1.md#wrap)

## Properties

### readable

• **readable**: `boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:273

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): [`AsyncIterableIterator`](internal_.AsyncIterableIterator.md)\<`string` \| [`Buffer`](internal_.Buffer.md)\>

#### Returns

[`AsyncIterableIterator`](internal_.AsyncIterableIterator.md)\<`string` \| [`Buffer`](internal_.Buffer.md)\>

#### Defined in

node_modules/@types/node/globals.d.ts:283

___

### [captureRejectionSymbol]

▸ **[captureRejectionSymbol]**\<`K`\>(`error`, `event`, `...args`): `void`

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`Error`](internal_.Error.md) |
| `event` | `string` \| `symbol` |
| `...args` | [`AnyRest`](../modules/internal_.md#anyrest) |

#### Returns

`void`

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[[captureRejectionSymbol]](internal_.EventEmitter-2.md#[capturerejectionsymbol])

#### Defined in

node_modules/@types/node/events.d.ts:553

___

### addListener

▸ **addListener**\<`K`\>(`eventName`, `listener`): `this`

Alias for `emitter.on(eventName, listener)`.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

**`Since`**

v0.1.26

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[addListener](internal_.EventEmitter-2.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:558

___

### emit

▸ **emit**\<`K`\>(`eventName`, `...args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | [`AnyRest`](../modules/internal_.md#anyrest) |

#### Returns

`boolean`

**`Since`**

v0.1.26

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[emit](internal_.EventEmitter-2.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:820

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

**`Since`**

v6.0.0

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[eventNames](internal_.EventEmitter-2.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:883

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to defaultMaxListeners.

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[getMaxListeners](internal_.EventEmitter-2.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:735

___

### isPaused

▸ **isPaused**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/globals.d.ts:278

___

### listenerCount

▸ **listenerCount**\<`K`\>(`eventName`, `listener?`): `number`

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | `Function` | The event handler function |

#### Returns

`number`

**`Since`**

v3.2.0

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[listenerCount](internal_.EventEmitter-2.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:829

___

### listeners

▸ **listeners**\<`K`\>(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v0.1.26

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[listeners](internal_.EventEmitter-2.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:748

___

### off

▸ **off**\<`K`\>(`eventName`, `listener`): `this`

Alias for `emitter.removeListener()`.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

**`Since`**

v10.0.0

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[off](internal_.EventEmitter-2.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:708

___

### on

▸ **on**\<`K`\>(`eventName`, `listener`): `this`

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

**`Since`**

v0.1.101

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[on](internal_.EventEmitter-2.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:590

___

### once

▸ **once**\<`K`\>(`eventName`, `listener`): `this`

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

**`Since`**

v0.3.0

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[once](internal_.EventEmitter-2.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:620

___

### pause

▸ **pause**(): `this`

#### Returns

`this`

#### Defined in

node_modules/@types/node/globals.d.ts:276

___

### pipe

▸ **pipe**\<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`WritableStream`](internal_.WritableStream.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Defined in

node_modules/@types/node/globals.d.ts:279

___

### prependListener

▸ **prependListener**\<`K`\>(`eventName`, `listener`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

**`Since`**

v6.0.0

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[prependListener](internal_.EventEmitter-2.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:847

___

### prependOnceListener

▸ **prependOnceListener**\<`K`\>(`eventName`, `listener`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

**`Since`**

v6.0.0

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[prependOnceListener](internal_.EventEmitter-2.md#prependoncelistener)

#### Defined in

node_modules/@types/node/events.d.ts:863

___

### rawListeners

▸ **rawListeners**\<`K`\>(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v9.4.0

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[rawListeners](internal_.EventEmitter-2.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:779

___

### read

▸ **read**(`size?`): `string` \| [`Buffer`](internal_.Buffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size?` | `number` |

#### Returns

`string` \| [`Buffer`](internal_.Buffer.md)

#### Defined in

node_modules/@types/node/globals.d.ts:274

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): `this`

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `symbol` |

#### Returns

`this`

**`Since`**

v0.1.26

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[removeAllListeners](internal_.EventEmitter-2.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:719

___

### removeListener

▸ **removeListener**\<`K`\>(`eventName`, `listener`): `this`

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

**`Since`**

v0.1.26

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[removeListener](internal_.EventEmitter-2.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:703

___

### resume

▸ **resume**(): `this`

#### Returns

`this`

#### Defined in

node_modules/@types/node/globals.d.ts:277

___

### setEncoding

▸ **setEncoding**(`encoding`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |

#### Returns

`this`

#### Defined in

node_modules/@types/node/globals.d.ts:275

___

### setMaxListeners

▸ **setMaxListeners**(`n`): `this`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`this`

**`Since`**

v0.3.5

#### Inherited from

[EventEmitter](internal_.EventEmitter-2.md).[setMaxListeners](internal_.EventEmitter-2.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:729

___

### unpipe

▸ **unpipe**(`destination?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | [`WritableStream`](internal_.WritableStream.md) |

#### Returns

`this`

#### Defined in

node_modules/@types/node/globals.d.ts:280

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `string` \| `Uint8Array` |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/globals.d.ts:281

___

### wrap

▸ **wrap**(`oldStream`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldStream` | [`ReadableStream`](internal_.ReadableStream-1.md) |

#### Returns

`this`

#### Defined in

node_modules/@types/node/globals.d.ts:282
