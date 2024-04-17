[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / TLSSocket

# Class: TLSSocket

[\<internal\>](../modules/internal_.md).TLSSocket

Performs transparent encryption of written data and all required TLS
negotiation.

Instances of `tls.TLSSocket` implement the duplex `Stream` interface.

Methods that return TLS connection metadata (e.g.[TLSSocket.getPeerCertificate](internal_.TLSSocket.md#getpeercertificate)) will only return data while the
connection is open.

**`Since`**

v0.11.4

## Hierarchy

- [`Socket`](internal_.Socket.md)

  ↳ **`TLSSocket`**

## Table of contents

### Constructors

- [constructor](internal_.TLSSocket.md#constructor)

### Properties

- [allowHalfOpen](internal_.TLSSocket.md#allowhalfopen)
- [alpnProtocol](internal_.TLSSocket.md#alpnprotocol)
- [authorizationError](internal_.TLSSocket.md#authorizationerror)
- [authorized](internal_.TLSSocket.md#authorized)
- [autoSelectFamilyAttemptedAddresses](internal_.TLSSocket.md#autoselectfamilyattemptedaddresses)
- [bufferSize](internal_.TLSSocket.md#buffersize)
- [bytesRead](internal_.TLSSocket.md#bytesread)
- [bytesWritten](internal_.TLSSocket.md#byteswritten)
- [closed](internal_.TLSSocket.md#closed)
- [connecting](internal_.TLSSocket.md#connecting)
- [destroyed](internal_.TLSSocket.md#destroyed)
- [encrypted](internal_.TLSSocket.md#encrypted)
- [errored](internal_.TLSSocket.md#errored)
- [localAddress](internal_.TLSSocket.md#localaddress)
- [localFamily](internal_.TLSSocket.md#localfamily)
- [localPort](internal_.TLSSocket.md#localport)
- [pending](internal_.TLSSocket.md#pending)
- [readable](internal_.TLSSocket.md#readable)
- [readableAborted](internal_.TLSSocket.md#readableaborted)
- [readableDidRead](internal_.TLSSocket.md#readabledidread)
- [readableEncoding](internal_.TLSSocket.md#readableencoding)
- [readableEnded](internal_.TLSSocket.md#readableended)
- [readableFlowing](internal_.TLSSocket.md#readableflowing)
- [readableHighWaterMark](internal_.TLSSocket.md#readablehighwatermark)
- [readableLength](internal_.TLSSocket.md#readablelength)
- [readableObjectMode](internal_.TLSSocket.md#readableobjectmode)
- [readyState](internal_.TLSSocket.md#readystate)
- [remoteAddress](internal_.TLSSocket.md#remoteaddress)
- [remoteFamily](internal_.TLSSocket.md#remotefamily)
- [remotePort](internal_.TLSSocket.md#remoteport)
- [timeout](internal_.TLSSocket.md#timeout)
- [writable](internal_.TLSSocket.md#writable)
- [writableCorked](internal_.TLSSocket.md#writablecorked)
- [writableEnded](internal_.TLSSocket.md#writableended)
- [writableFinished](internal_.TLSSocket.md#writablefinished)
- [writableHighWaterMark](internal_.TLSSocket.md#writablehighwatermark)
- [writableLength](internal_.TLSSocket.md#writablelength)
- [writableNeedDrain](internal_.TLSSocket.md#writableneeddrain)
- [writableObjectMode](internal_.TLSSocket.md#writableobjectmode)
- [captureRejectionSymbol](internal_.TLSSocket.md#capturerejectionsymbol)
- [captureRejections](internal_.TLSSocket.md#capturerejections)
- [defaultMaxListeners](internal_.TLSSocket.md#defaultmaxlisteners)
- [errorMonitor](internal_.TLSSocket.md#errormonitor)

### Methods

- [[asyncDispose]](internal_.TLSSocket.md#[asyncdispose])
- [[asyncIterator]](internal_.TLSSocket.md#[asynciterator])
- [[captureRejectionSymbol]](internal_.TLSSocket.md#[capturerejectionsymbol])
- [\_construct](internal_.TLSSocket.md#_construct)
- [\_destroy](internal_.TLSSocket.md#_destroy)
- [\_final](internal_.TLSSocket.md#_final)
- [\_read](internal_.TLSSocket.md#_read)
- [\_write](internal_.TLSSocket.md#_write)
- [\_writev](internal_.TLSSocket.md#_writev)
- [addListener](internal_.TLSSocket.md#addlistener)
- [address](internal_.TLSSocket.md#address)
- [asIndexedPairs](internal_.TLSSocket.md#asindexedpairs)
- [compose](internal_.TLSSocket.md#compose)
- [connect](internal_.TLSSocket.md#connect)
- [cork](internal_.TLSSocket.md#cork)
- [destroy](internal_.TLSSocket.md#destroy)
- [destroySoon](internal_.TLSSocket.md#destroysoon)
- [disableRenegotiation](internal_.TLSSocket.md#disablerenegotiation)
- [drop](internal_.TLSSocket.md#drop)
- [emit](internal_.TLSSocket.md#emit)
- [enableTrace](internal_.TLSSocket.md#enabletrace)
- [end](internal_.TLSSocket.md#end)
- [eventNames](internal_.TLSSocket.md#eventnames)
- [every](internal_.TLSSocket.md#every)
- [exportKeyingMaterial](internal_.TLSSocket.md#exportkeyingmaterial)
- [filter](internal_.TLSSocket.md#filter)
- [find](internal_.TLSSocket.md#find)
- [flatMap](internal_.TLSSocket.md#flatmap)
- [forEach](internal_.TLSSocket.md#foreach)
- [getCertificate](internal_.TLSSocket.md#getcertificate)
- [getCipher](internal_.TLSSocket.md#getcipher)
- [getEphemeralKeyInfo](internal_.TLSSocket.md#getephemeralkeyinfo)
- [getFinished](internal_.TLSSocket.md#getfinished)
- [getMaxListeners](internal_.TLSSocket.md#getmaxlisteners)
- [getPeerCertificate](internal_.TLSSocket.md#getpeercertificate)
- [getPeerFinished](internal_.TLSSocket.md#getpeerfinished)
- [getPeerX509Certificate](internal_.TLSSocket.md#getpeerx509certificate)
- [getProtocol](internal_.TLSSocket.md#getprotocol)
- [getSession](internal_.TLSSocket.md#getsession)
- [getSharedSigalgs](internal_.TLSSocket.md#getsharedsigalgs)
- [getTLSTicket](internal_.TLSSocket.md#gettlsticket)
- [getX509Certificate](internal_.TLSSocket.md#getx509certificate)
- [isPaused](internal_.TLSSocket.md#ispaused)
- [isSessionReused](internal_.TLSSocket.md#issessionreused)
- [iterator](internal_.TLSSocket.md#iterator)
- [listenerCount](internal_.TLSSocket.md#listenercount)
- [listeners](internal_.TLSSocket.md#listeners)
- [map](internal_.TLSSocket.md#map)
- [off](internal_.TLSSocket.md#off)
- [on](internal_.TLSSocket.md#on)
- [once](internal_.TLSSocket.md#once)
- [pause](internal_.TLSSocket.md#pause)
- [pipe](internal_.TLSSocket.md#pipe)
- [prependListener](internal_.TLSSocket.md#prependlistener)
- [prependOnceListener](internal_.TLSSocket.md#prependoncelistener)
- [push](internal_.TLSSocket.md#push)
- [rawListeners](internal_.TLSSocket.md#rawlisteners)
- [read](internal_.TLSSocket.md#read)
- [reduce](internal_.TLSSocket.md#reduce)
- [ref](internal_.TLSSocket.md#ref)
- [removeAllListeners](internal_.TLSSocket.md#removealllisteners)
- [removeListener](internal_.TLSSocket.md#removelistener)
- [renegotiate](internal_.TLSSocket.md#renegotiate)
- [resetAndDestroy](internal_.TLSSocket.md#resetanddestroy)
- [resume](internal_.TLSSocket.md#resume)
- [setDefaultEncoding](internal_.TLSSocket.md#setdefaultencoding)
- [setEncoding](internal_.TLSSocket.md#setencoding)
- [setKeepAlive](internal_.TLSSocket.md#setkeepalive)
- [setMaxListeners](internal_.TLSSocket.md#setmaxlisteners)
- [setMaxSendFragment](internal_.TLSSocket.md#setmaxsendfragment)
- [setNoDelay](internal_.TLSSocket.md#setnodelay)
- [setTimeout](internal_.TLSSocket.md#settimeout)
- [some](internal_.TLSSocket.md#some)
- [take](internal_.TLSSocket.md#take)
- [toArray](internal_.TLSSocket.md#toarray)
- [uncork](internal_.TLSSocket.md#uncork)
- [unpipe](internal_.TLSSocket.md#unpipe)
- [unref](internal_.TLSSocket.md#unref)
- [unshift](internal_.TLSSocket.md#unshift)
- [wrap](internal_.TLSSocket.md#wrap)
- [write](internal_.TLSSocket.md#write)
- [addAbortListener](internal_.TLSSocket.md#addabortlistener)
- [from](internal_.TLSSocket.md#from)
- [fromWeb](internal_.TLSSocket.md#fromweb)
- [getEventListeners](internal_.TLSSocket.md#geteventlisteners)
- [getMaxListeners](internal_.TLSSocket.md#getmaxlisteners-1)
- [isDisturbed](internal_.TLSSocket.md#isdisturbed)
- [listenerCount](internal_.TLSSocket.md#listenercount-1)
- [on](internal_.TLSSocket.md#on-1)
- [once](internal_.TLSSocket.md#once-1)
- [setMaxListeners](internal_.TLSSocket.md#setmaxlisteners-1)
- [toWeb](internal_.TLSSocket.md#toweb)

## Constructors

### constructor

• **new TLSSocket**(`socket`, `options?`): [`TLSSocket`](internal_.TLSSocket.md)

Construct a new tls.TLSSocket object from an existing TCP socket.

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | [`Socket`](internal_.Socket.md) \| [`Duplex`](internal_.Duplex.md) |
| `options?` | [`TLSSocketOptions`](../interfaces/internal_.TLSSocketOptions.md) |

#### Returns

[`TLSSocket`](internal_.TLSSocket.md)

#### Overrides

[Socket](internal_.Socket.md).[constructor](internal_.Socket.md#constructor)

#### Defined in

node_modules/@types/node/tls.d.ts:223

## Properties

### allowHalfOpen

• **allowHalfOpen**: `boolean`

If `false` then the stream will automatically end the writable side when the
readable side ends. Set initially by the `allowHalfOpen` constructor option,
which defaults to `true`.

This can be changed manually to change the half-open behavior of an existing`Duplex` stream instance, but must be changed before the `'end'` event is
emitted.

**`Since`**

v0.9.4

#### Inherited from

[Socket](internal_.Socket.md).[allowHalfOpen](internal_.Socket.md#allowhalfopen)

#### Defined in

node_modules/@types/node/stream.d.ts:1068

___

### alpnProtocol

• **alpnProtocol**: ``null`` \| `string` \| ``false``

String containing the selected ALPN protocol.
Before a handshake has completed, this value is always null.
When a handshake is completed but not ALPN protocol was selected, tlsSocket.alpnProtocol equals false.

#### Defined in

node_modules/@types/node/tls.d.ts:246

___

### authorizationError

• **authorizationError**: [`Error`](../interfaces/internal_.Error.md)

Returns the reason why the peer's certificate was not been verified. This
property is set only when `tlsSocket.authorized === false`.

**`Since`**

v0.11.4

#### Defined in

node_modules/@types/node/tls.d.ts:235

___

### authorized

• **authorized**: `boolean`

This property is `true` if the peer certificate was signed by one of the CAs
specified when creating the `tls.TLSSocket` instance, otherwise `false`.

**`Since`**

v0.11.4

#### Defined in

node_modules/@types/node/tls.d.ts:229

___

### autoSelectFamilyAttemptedAddresses

• `Readonly` **autoSelectFamilyAttemptedAddresses**: `string`[]

This property is only present if the family autoselection algorithm is enabled in `socket.connect(options)`
and it is an array of the addresses that have been attempted.

Each address is a string in the form of `$IP:$PORT`.
If the connection was successful, then the last address is the one that the socket is currently connected to.

**`Since`**

v19.4.0

#### Inherited from

[Socket](internal_.Socket.md).[autoSelectFamilyAttemptedAddresses](internal_.Socket.md#autoselectfamilyattemptedaddresses)

#### Defined in

node_modules/@types/node/net.d.ts:251

___

### bufferSize

• `Readonly` **bufferSize**: `number`

This property shows the number of characters buffered for writing. The buffer
may contain strings whose length after encoding is not yet known. So this number
is only an approximation of the number of bytes in the buffer.

`net.Socket` has the property that `socket.write()` always works. This is to
help users get up and running quickly. The computer cannot always keep up
with the amount of data that is written to a socket. The network connection
simply might be too slow. Node.js will internally queue up the data written to a
socket and send it out over the wire when it is possible.

The consequence of this internal buffering is that memory may grow.
Users who experience large or growing `bufferSize` should attempt to
"throttle" the data flows in their program with `socket.pause()` and `socket.resume()`.

**`Since`**

v0.3.8

**`Deprecated`**

Since v14.6.0 - Use `writableLength` instead.

#### Inherited from

[Socket](internal_.Socket.md).[bufferSize](internal_.Socket.md#buffersize)

#### Defined in

node_modules/@types/node/net.d.ts:269

___

### bytesRead

• `Readonly` **bytesRead**: `number`

The amount of received bytes.

**`Since`**

v0.5.3

#### Inherited from

[Socket](internal_.Socket.md).[bytesRead](internal_.Socket.md#bytesread)

#### Defined in

node_modules/@types/node/net.d.ts:274

___

### bytesWritten

• `Readonly` **bytesWritten**: `number`

The amount of bytes sent.

**`Since`**

v0.5.3

#### Inherited from

[Socket](internal_.Socket.md).[bytesWritten](internal_.Socket.md#byteswritten)

#### Defined in

node_modules/@types/node/net.d.ts:279

___

### closed

• `Readonly` **closed**: `boolean`

Is `true` after `'close'` has been emitted.

**`Since`**

v18.0.0

#### Inherited from

[Socket](internal_.Socket.md).[closed](internal_.Socket.md#closed)

#### Defined in

node_modules/@types/node/stream.d.ts:1057

___

### connecting

• `Readonly` **connecting**: `boolean`

If `true`,`socket.connect(options[, connectListener])` was
called and has not yet finished. It will stay `true` until the socket becomes
connected, then it is set to `false` and the `'connect'` event is emitted. Note
that the `socket.connect(options[, connectListener])` callback is a listener for the `'connect'` event.

**`Since`**

v6.1.0

#### Inherited from

[Socket](internal_.Socket.md).[connecting](internal_.Socket.md#connecting)

#### Defined in

node_modules/@types/node/net.d.ts:287

___

### destroyed

• `Readonly` **destroyed**: `boolean`

See `writable.destroyed` for further details.

#### Inherited from

[Socket](internal_.Socket.md).[destroyed](internal_.Socket.md#destroyed)

#### Defined in

node_modules/@types/node/net.d.ts:297

___

### encrypted

• **encrypted**: ``true``

Always returns `true`. This may be used to distinguish TLS sockets from regular`net.Socket` instances.

**`Since`**

v0.11.4

#### Defined in

node_modules/@types/node/tls.d.ts:240

___

### errored

• `Readonly` **errored**: ``null`` \| [`Error`](../interfaces/internal_.Error.md)

Returns error if the stream has been destroyed with an error.

**`Since`**

v18.0.0

#### Inherited from

[Socket](internal_.Socket.md).[errored](internal_.Socket.md#errored)

#### Defined in

node_modules/@types/node/stream.d.ts:1058

___

### localAddress

• `Optional` `Readonly` **localAddress**: `string`

The string representation of the local IP address the remote client is
connecting on. For example, in a server listening on `'0.0.0.0'`, if a client
connects on `'192.168.1.1'`, the value of `socket.localAddress` would be`'192.168.1.1'`.

**`Since`**

v0.9.6

#### Inherited from

[Socket](internal_.Socket.md).[localAddress](internal_.Socket.md#localaddress)

#### Defined in

node_modules/@types/node/net.d.ts:304

___

### localFamily

• `Optional` `Readonly` **localFamily**: `string`

The string representation of the local IP family. `'IPv4'` or `'IPv6'`.

**`Since`**

v18.8.0, v16.18.0

#### Inherited from

[Socket](internal_.Socket.md).[localFamily](internal_.Socket.md#localfamily)

#### Defined in

node_modules/@types/node/net.d.ts:314

___

### localPort

• `Optional` `Readonly` **localPort**: `number`

The numeric representation of the local port. For example, `80` or `21`.

**`Since`**

v0.9.6

#### Inherited from

[Socket](internal_.Socket.md).[localPort](internal_.Socket.md#localport)

#### Defined in

node_modules/@types/node/net.d.ts:309

___

### pending

• `Readonly` **pending**: `boolean`

This is `true` if the socket is not connected yet, either because `.connect()`has not yet been called or because it is still in the process of connecting
(see `socket.connecting`).

**`Since`**

v11.2.0, v10.16.0

#### Inherited from

[Socket](internal_.Socket.md).[pending](internal_.Socket.md#pending)

#### Defined in

node_modules/@types/node/net.d.ts:293

___

### readable

• **readable**: `boolean`

Is `true` if it is safe to call `readable.read()`, which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

**`Since`**

v11.4.0

#### Inherited from

[Socket](internal_.Socket.md).[readable](internal_.Socket.md#readable)

#### Defined in

node_modules/@types/node/stream.d.ts:70

___

### readableAborted

• `Readonly` **readableAborted**: `boolean`

Returns whether the stream was destroyed or errored before emitting `'end'`.

**`Since`**

v16.8.0

#### Inherited from

[Socket](internal_.Socket.md).[readableAborted](internal_.Socket.md#readableaborted)

#### Defined in

node_modules/@types/node/stream.d.ts:64

___

### readableDidRead

• `Readonly` **readableDidRead**: `boolean`

Returns whether `'data'` has been emitted.

**`Since`**

v16.7.0, v14.18.0

#### Inherited from

[Socket](internal_.Socket.md).[readableDidRead](internal_.Socket.md#readabledidread)

#### Defined in

node_modules/@types/node/stream.d.ts:76

___

### readableEncoding

• `Readonly` **readableEncoding**: ``null`` \| [`BufferEncoding`](../modules/internal_.md#bufferencoding)

Getter for the property `encoding` of a given `Readable` stream. The `encoding`property can be set using the `readable.setEncoding()` method.

**`Since`**

v12.7.0

#### Inherited from

[Socket](internal_.Socket.md).[readableEncoding](internal_.Socket.md#readableencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:81

___

### readableEnded

• `Readonly` **readableEnded**: `boolean`

Becomes `true` when `'end'` event is emitted.

**`Since`**

v12.9.0

#### Inherited from

[Socket](internal_.Socket.md).[readableEnded](internal_.Socket.md#readableended)

#### Defined in

node_modules/@types/node/stream.d.ts:86

___

### readableFlowing

• `Readonly` **readableFlowing**: ``null`` \| `boolean`

This property reflects the current state of a `Readable` stream as described
in the `Three states` section.

**`Since`**

v9.4.0

#### Inherited from

[Socket](internal_.Socket.md).[readableFlowing](internal_.Socket.md#readableflowing)

#### Defined in

node_modules/@types/node/stream.d.ts:92

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

Returns the value of `highWaterMark` passed when creating this `Readable`.

**`Since`**

v9.3.0

#### Inherited from

[Socket](internal_.Socket.md).[readableHighWaterMark](internal_.Socket.md#readablehighwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:97

___

### readableLength

• `Readonly` **readableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

**`Since`**

v9.4.0

#### Inherited from

[Socket](internal_.Socket.md).[readableLength](internal_.Socket.md#readablelength)

#### Defined in

node_modules/@types/node/stream.d.ts:104

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Readable` stream.

**`Since`**

v12.3.0

#### Inherited from

[Socket](internal_.Socket.md).[readableObjectMode](internal_.Socket.md#readableobjectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:109

___

### readyState

• `Readonly` **readyState**: [`SocketReadyState`](../modules/internal_.md#socketreadystate)

This property represents the state of the connection as a string.

* If the stream is connecting `socket.readyState` is `opening`.
* If the stream is readable and writable, it is `open`.
* If the stream is readable and not writable, it is `readOnly`.
* If the stream is not readable and writable, it is `writeOnly`.

**`Since`**

v0.5.0

#### Inherited from

[Socket](internal_.Socket.md).[readyState](internal_.Socket.md#readystate)

#### Defined in

node_modules/@types/node/net.d.ts:324

___

### remoteAddress

• `Optional` `Readonly` **remoteAddress**: `string`

The string representation of the remote IP address. For example,`'74.125.127.100'` or `'2001:4860:a005::68'`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

**`Since`**

v0.5.10

#### Inherited from

[Socket](internal_.Socket.md).[remoteAddress](internal_.Socket.md#remoteaddress)

#### Defined in

node_modules/@types/node/net.d.ts:330

___

### remoteFamily

• `Optional` `Readonly` **remoteFamily**: `string`

The string representation of the remote IP family. `'IPv4'` or `'IPv6'`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

**`Since`**

v0.11.14

#### Inherited from

[Socket](internal_.Socket.md).[remoteFamily](internal_.Socket.md#remotefamily)

#### Defined in

node_modules/@types/node/net.d.ts:336

___

### remotePort

• `Optional` `Readonly` **remotePort**: `number`

The numeric representation of the remote port. For example, `80` or `21`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

**`Since`**

v0.5.10

#### Inherited from

[Socket](internal_.Socket.md).[remotePort](internal_.Socket.md#remoteport)

#### Defined in

node_modules/@types/node/net.d.ts:342

___

### timeout

• `Optional` `Readonly` **timeout**: `number`

The socket timeout in milliseconds as set by `socket.setTimeout()`.
It is `undefined` if a timeout has not been set.

**`Since`**

v10.7.0

#### Inherited from

[Socket](internal_.Socket.md).[timeout](internal_.Socket.md#timeout)

#### Defined in

node_modules/@types/node/net.d.ts:348

___

### writable

• `Readonly` **writable**: `boolean`

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored, or ended.

**`Since`**

v11.4.0

#### Inherited from

[Socket](internal_.Socket.md).[writable](internal_.Socket.md#writable)

#### Defined in

node_modules/@types/node/stream.d.ts:1049

___

### writableCorked

• `Readonly` **writableCorked**: `number`

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

**`Since`**

v13.2.0, v12.16.0

#### Inherited from

[Socket](internal_.Socket.md).[writableCorked](internal_.Socket.md#writablecorked)

#### Defined in

node_modules/@types/node/stream.d.ts:1055

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

**`Since`**

v12.9.0

#### Inherited from

[Socket](internal_.Socket.md).[writableEnded](internal_.Socket.md#writableended)

#### Defined in

node_modules/@types/node/stream.d.ts:1050

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

Is set to `true` immediately before the `'finish'` event is emitted.

**`Since`**

v12.6.0

#### Inherited from

[Socket](internal_.Socket.md).[writableFinished](internal_.Socket.md#writablefinished)

#### Defined in

node_modules/@types/node/stream.d.ts:1051

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

Return the value of `highWaterMark` passed when creating this `Writable`.

**`Since`**

v9.3.0

#### Inherited from

[Socket](internal_.Socket.md).[writableHighWaterMark](internal_.Socket.md#writablehighwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:1052

___

### writableLength

• `Readonly` **writableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be written. The value provides introspection data regarding
the status of the `highWaterMark`.

**`Since`**

v9.4.0

#### Inherited from

[Socket](internal_.Socket.md).[writableLength](internal_.Socket.md#writablelength)

#### Defined in

node_modules/@types/node/stream.d.ts:1053

___

### writableNeedDrain

• `Readonly` **writableNeedDrain**: `boolean`

Is `true` if the stream's buffer has been full and stream will emit `'drain'`.

**`Since`**

v15.2.0, v14.17.0

#### Inherited from

[Socket](internal_.Socket.md).[writableNeedDrain](internal_.Socket.md#writableneeddrain)

#### Defined in

node_modules/@types/node/stream.d.ts:1056

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Writable` stream.

**`Since`**

v12.3.0

#### Inherited from

[Socket](internal_.Socket.md).[writableObjectMode](internal_.Socket.md#writableobjectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:1054

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](internal_.EventEmitter-1.md#capturerejectionsymbol)

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

[Socket](internal_.Socket.md).[captureRejectionSymbol](internal_.Socket.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:415

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

[Socket](internal_.Socket.md).[captureRejections](internal_.Socket.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:422

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for _all_`EventEmitter` instances, the `events.defaultMaxListeners`property can be used. If this value is not a positive number, a `RangeError`is thrown.

Take caution when setting the `events.defaultMaxListeners` because the
change affects _all_`EventEmitter` instances, including those created before
the change is made. However, calling `emitter.setMaxListeners(n)` still has
precedence over `events.defaultMaxListeners`.

This is not a hard limit. The `EventEmitter` instance will allow
more listeners to be added but will output a trace warning to stderr indicating
that a "possible EventEmitter memory leak" has been detected. For any single`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()`methods can be used to
temporarily avoid this warning:

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', () => {
  // do stuff
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
```

The `--trace-warnings` command-line flag can be used to display the
stack trace for such warnings.

The emitted warning can be inspected with `process.on('warning')` and will
have the additional `emitter`, `type`, and `count` properties, referring to
the event emitter instance, the event's name and the number of attached
listeners, respectively.
Its `name` property is set to `'MaxListenersExceededWarning'`.

**`Since`**

v0.11.2

#### Inherited from

[Socket](internal_.Socket.md).[defaultMaxListeners](internal_.Socket.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:459

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](internal_.EventEmitter-1.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`events. Listeners installed using this symbol are called before the regular`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an`'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

**`Since`**

v13.6.0, v12.17.0

#### Inherited from

[Socket](internal_.Socket.md).[errorMonitor](internal_.Socket.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:408

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`void`\>

Calls `readable.destroy()` with an `AbortError` and returns a promise that fulfills when the stream is finished.

#### Returns

`Promise`\<`void`\>

**`Since`**

v20.4.0

#### Inherited from

[Socket](internal_.Socket.md).[[asyncDispose]](internal_.Socket.md#[asyncdispose])

#### Defined in

node_modules/@types/node/stream.d.ts:651

___

### [asyncIterator]

▸ **[asyncIterator]**(): [`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)\<`any`\>

#### Returns

[`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)\<`any`\>

#### Inherited from

[Socket](internal_.Socket.md).[[asyncIterator]](internal_.Socket.md#[asynciterator])

#### Defined in

node_modules/@types/node/stream.d.ts:646

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
| `error` | [`Error`](../interfaces/internal_.Error.md) |
| `event` | `string` \| `symbol` |
| `...args` | [`AnyRest`](../modules/internal_.md#anyrest) |

#### Returns

`void`

#### Inherited from

[Socket](internal_.Socket.md).[[captureRejectionSymbol]](internal_.Socket.md#[capturerejectionsymbol])

#### Defined in

node_modules/@types/node/events.d.ts:125

___

### \_construct

▸ **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`void`

#### Inherited from

[Socket](internal_.Socket.md).[_construct](internal_.Socket.md#_construct)

#### Defined in

node_modules/@types/node/stream.d.ts:126

___

### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | ``null`` \| [`Error`](../interfaces/internal_.Error.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`void`

#### Inherited from

[Socket](internal_.Socket.md).[_destroy](internal_.Socket.md#_destroy)

#### Defined in

node_modules/@types/node/stream.d.ts:1111

___

### \_final

▸ **_final**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`void`

#### Inherited from

[Socket](internal_.Socket.md).[_final](internal_.Socket.md#_final)

#### Defined in

node_modules/@types/node/stream.d.ts:1112

___

### \_read

▸ **_read**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

[Socket](internal_.Socket.md).[_read](internal_.Socket.md#_read)

#### Defined in

node_modules/@types/node/stream.d.ts:127

___

### \_write

▸ **_write**(`chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback` | (`error?`: ``null`` \| [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`void`

#### Inherited from

[Socket](internal_.Socket.md).[_write](internal_.Socket.md#_write)

#### Defined in

node_modules/@types/node/stream.d.ts:1103

___

### \_writev

▸ **_writev**(`chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | \{ `chunk`: `any` ; `encoding`: [`BufferEncoding`](../modules/internal_.md#bufferencoding)  }[] |
| `callback` | (`error?`: ``null`` \| [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`void`

#### Inherited from

[Socket](internal_.Socket.md).[_writev](internal_.Socket.md#_writev)

#### Defined in

node_modules/@types/node/stream.d.ts:1104

___

### addListener

▸ **addListener**(`event`, `listener`): `this`

events.EventEmitter
  1. close
  2. connect
  3. data
  4. drain
  5. end
  6. error
  7. lookup
  8. ready
  9. timeout

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[addListener](internal_.Socket.md#addlistener)

#### Defined in

node_modules/@types/node/tls.d.ts:474

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"OCSPResponse"`` |
| `listener` | (`response`: [`Buffer`](../interfaces/internal_.Buffer.md)) => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[addListener](internal_.Socket.md#addlistener)

#### Defined in

node_modules/@types/node/tls.d.ts:475

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"secureConnect"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[addListener](internal_.Socket.md#addlistener)

#### Defined in

node_modules/@types/node/tls.d.ts:476

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"session"`` |
| `listener` | (`session`: [`Buffer`](../interfaces/internal_.Buffer.md)) => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[addListener](internal_.Socket.md#addlistener)

#### Defined in

node_modules/@types/node/tls.d.ts:477

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"keylog"`` |
| `listener` | (`line`: [`Buffer`](../interfaces/internal_.Buffer.md)) => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[addListener](internal_.Socket.md#addlistener)

#### Defined in

node_modules/@types/node/tls.d.ts:478

___

### address

▸ **address**(): {} \| [`AddressInfo`](../interfaces/internal_.AddressInfo.md)

Returns the bound `address`, the address `family` name and `port` of the
socket as reported by the operating system:`{ port: 12346, family: 'IPv4', address: '127.0.0.1' }`

#### Returns

{} \| [`AddressInfo`](../interfaces/internal_.AddressInfo.md)

**`Since`**

v0.1.90

#### Inherited from

[Socket](internal_.Socket.md).[address](internal_.Socket.md#address)

#### Defined in

node_modules/@types/node/net.d.ts:228

___

### asIndexedPairs

▸ **asIndexedPairs**(`options?`): [`Readable`](internal_.Readable.md)

This method returns a new stream with chunks of the underlying stream paired with a counter
in the form `[index, chunk]`. The first index value is `0` and it increases by 1 for each chunk produced.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`Pick`](../modules/internal_.md#pick)\<[`ArrayOptions`](../interfaces/internal_.ArrayOptions.md), ``"signal"``\> |

#### Returns

[`Readable`](internal_.Readable.md)

a stream of indexed pairs.

**`Since`**

v17.5.0

#### Inherited from

[Socket](internal_.Socket.md).[asIndexedPairs](internal_.Socket.md#asindexedpairs)

#### Defined in

node_modules/@types/node/stream.d.ts:541

___

### compose

▸ **compose**\<`T`\>(`stream`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`ComposeFnParam`](../modules/internal_.md#composefnparam) \| `T` \| [`Iterable`](../interfaces/internal_.Iterable.md)\<`T`\> \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`T`\> |
| `options?` | `Object` |
| `options.signal` | `AbortSignal` |

#### Returns

`T`

#### Inherited from

[Socket](internal_.Socket.md).[compose](internal_.Socket.md#compose)

#### Defined in

node_modules/@types/node/stream.d.ts:35

___

### connect

▸ **connect**(`options`, `connectionListener?`): `this`

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SocketConnectOpts`](../modules/internal_.md#socketconnectopts) |
| `connectionListener?` | () => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[connect](internal_.Socket.md#connect)

#### Defined in

node_modules/@types/node/net.d.ts:136

▸ **connect**(`port`, `host`, `connectionListener?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `host` | `string` |
| `connectionListener?` | () => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[connect](internal_.Socket.md#connect)

#### Defined in

node_modules/@types/node/net.d.ts:137

▸ **connect**(`port`, `connectionListener?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `connectionListener?` | () => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[connect](internal_.Socket.md#connect)

#### Defined in

node_modules/@types/node/net.d.ts:138

▸ **connect**(`path`, `connectionListener?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `connectionListener?` | () => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[connect](internal_.Socket.md#connect)

#### Defined in

node_modules/@types/node/net.d.ts:139

___

### cork

▸ **cork**(): `void`

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](internal_.WritableBase.md#uncork) or [end](internal_.WritableBase.md#end) methods are called.

The primary intent of `writable.cork()` is to accommodate a situation in which
several small chunks are written to the stream in rapid succession. Instead of
immediately forwarding them to the underlying destination, `writable.cork()`buffers all the chunks until `writable.uncork()` is called, which will pass them
all to `writable._writev()`, if present. This prevents a head-of-line blocking
situation where data is being buffered while waiting for the first small chunk
to be processed. However, use of `writable.cork()` without implementing`writable._writev()` may have an adverse effect on throughput.

See also: `writable.uncork()`, `writable._writev()`.

#### Returns

`void`

**`Since`**

v0.11.2

#### Inherited from

[Socket](internal_.Socket.md).[cork](internal_.Socket.md#cork)

#### Defined in

node_modules/@types/node/stream.d.ts:1119

___

### destroy

▸ **destroy**(`error?`): `this`

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the readable
stream will release any internal resources and subsequent calls to `push()`will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | [`Error`](../interfaces/internal_.Error.md) | Error which will be passed as payload in `'error'` event |

#### Returns

`this`

**`Since`**

v8.0.0

#### Inherited from

[Socket](internal_.Socket.md).[destroy](internal_.Socket.md#destroy)

#### Defined in

node_modules/@types/node/stream.d.ts:578

___

### destroySoon

▸ **destroySoon**(): `void`

Destroys the socket after all data is written. If the `finish` event was already emitted the socket is destroyed immediately.
If the socket is still writable it implicitly calls `socket.end()`.

#### Returns

`void`

**`Since`**

v0.3.4

#### Inherited from

[Socket](internal_.Socket.md).[destroySoon](internal_.Socket.md#destroysoon)

#### Defined in

node_modules/@types/node/net.d.ts:99

___

### disableRenegotiation

▸ **disableRenegotiation**(): `void`

Disables TLS renegotiation for this `TLSSocket` instance. Once called, attempts
to renegotiate will trigger an `'error'` event on the `TLSSocket`.

#### Returns

`void`

**`Since`**

v8.4.0

#### Defined in

node_modules/@types/node/tls.d.ts:420

___

### drop

▸ **drop**(`limit`, `options?`): [`Readable`](internal_.Readable.md)

This method returns a new stream with the first *limit* chunks dropped from the start.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | the number of chunks to drop from the readable. |
| `options?` | [`Pick`](../modules/internal_.md#pick)\<[`ArrayOptions`](../interfaces/internal_.ArrayOptions.md), ``"signal"``\> | - |

#### Returns

[`Readable`](internal_.Readable.md)

a stream with *limit* chunks dropped from the start.

**`Since`**

v17.5.0

#### Inherited from

[Socket](internal_.Socket.md).[drop](internal_.Socket.md#drop)

#### Defined in

node_modules/@types/node/stream.d.ts:527

___

### emit

▸ **emit**(`event`, `...args`): `boolean`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

**`Since`**

v0.1.26

#### Overrides

[Socket](internal_.Socket.md).[emit](internal_.Socket.md#emit)

#### Defined in

node_modules/@types/node/tls.d.ts:479

▸ **emit**(`event`, `response`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"OCSPResponse"`` |
| `response` | [`Buffer`](../interfaces/internal_.Buffer.md) |

#### Returns

`boolean`

#### Overrides

[Socket](internal_.Socket.md).[emit](internal_.Socket.md#emit)

#### Defined in

node_modules/@types/node/tls.d.ts:480

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"secureConnect"`` |

#### Returns

`boolean`

#### Overrides

[Socket](internal_.Socket.md).[emit](internal_.Socket.md#emit)

#### Defined in

node_modules/@types/node/tls.d.ts:481

▸ **emit**(`event`, `session`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"session"`` |
| `session` | [`Buffer`](../interfaces/internal_.Buffer.md) |

#### Returns

`boolean`

#### Overrides

[Socket](internal_.Socket.md).[emit](internal_.Socket.md#emit)

#### Defined in

node_modules/@types/node/tls.d.ts:482

▸ **emit**(`event`, `line`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"keylog"`` |
| `line` | [`Buffer`](../interfaces/internal_.Buffer.md) |

#### Returns

`boolean`

#### Overrides

[Socket](internal_.Socket.md).[emit](internal_.Socket.md#emit)

#### Defined in

node_modules/@types/node/tls.d.ts:483

___

### enableTrace

▸ **enableTrace**(): `void`

When enabled, TLS packet trace information is written to `stderr`. This can be
used to debug TLS connection problems.

The format of the output is identical to the output of`openssl s_client -trace` or `openssl s_server -trace`. While it is produced by
OpenSSL's `SSL_trace()` function, the format is undocumented, can change
without notice, and should not be relied on.

#### Returns

`void`

**`Since`**

v12.2.0

#### Defined in

node_modules/@types/node/tls.d.ts:430

___

### end

▸ **end**(`callback?`): `this`

Half-closes the socket. i.e., it sends a FIN packet. It is possible the
server will still send some data.

See `writable.end()` for further details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | () => `void` | Optional callback for when the socket is finished. |

#### Returns

`this`

The socket itself.

**`Since`**

v0.1.90

#### Inherited from

[Socket](internal_.Socket.md).[end](internal_.Socket.md#end)

#### Defined in

node_modules/@types/node/net.d.ts:359

▸ **end**(`buffer`, `callback?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `string` \| `Uint8Array` |
| `callback?` | () => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[end](internal_.Socket.md#end)

#### Defined in

node_modules/@types/node/net.d.ts:360

▸ **end**(`str`, `encoding?`, `callback?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` \| `Uint8Array` |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback?` | () => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[end](internal_.Socket.md#end)

#### Defined in

node_modules/@types/node/net.d.ts:361

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

[Socket](internal_.Socket.md).[eventNames](internal_.Socket.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:883

___

### every

▸ **every**(`fn`, `options?`): `Promise`\<`boolean`\>

This method is similar to `Array.prototype.every` and calls *fn* on each chunk in the stream
to check if all awaited return values are truthy value for *fn*. Once an *fn* call on a chunk
`await`ed return value is falsy, the stream is destroyed and the promise is fulfilled with `false`.
If all of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `true`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`data`: `any`, `options?`: [`Pick`](../modules/internal_.md#pick)\<[`ArrayOptions`](../interfaces/internal_.ArrayOptions.md), ``"signal"``\>) => `boolean` \| `Promise`\<`boolean`\> | a function to call on each chunk of the stream. Async or not. |
| `options?` | [`ArrayOptions`](../interfaces/internal_.ArrayOptions.md) | - |

#### Returns

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for every one of the chunks.

**`Since`**

v17.5.0

#### Inherited from

[Socket](internal_.Socket.md).[every](internal_.Socket.md#every)

#### Defined in

node_modules/@types/node/stream.d.ts:506

___

### exportKeyingMaterial

▸ **exportKeyingMaterial**(`length`, `label`, `context`): [`Buffer`](../interfaces/internal_.Buffer.md)

Keying material is used for validations to prevent different kind of attacks in
network protocols, for example in the specifications of IEEE 802.1X.

Example

```js
const keyingMaterial = tlsSocket.exportKeyingMaterial(
  128,
  'client finished');

/*
 Example return value of keyingMaterial:
 <Buffer 76 26 af 99 c5 56 8e 42 09 91 ef 9f 93 cb ad 6c 7b 65 f8 53 f1 d8 d9
    12 5a 33 b8 b5 25 df 7b 37 9f e0 e2 4f b8 67 83 a3 2f cd 5d 41 42 4c 91
    74 ef 2c ... 78 more bytes>

```

See the OpenSSL [`SSL_export_keying_material`](https://www.openssl.org/docs/man1.1.1/man3/SSL_export_keying_material.html) documentation for more
information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` | number of bytes to retrieve from keying material |
| `label` | `string` | an application specific label, typically this will be a value from the [IANA Exporter Label Registry](https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#exporter-labels). |
| `context` | [`Buffer`](../interfaces/internal_.Buffer.md) | Optionally provide a context. |

#### Returns

[`Buffer`](../interfaces/internal_.Buffer.md)

requested bytes of the keying material

**`Since`**

v13.10.0, v12.17.0

#### Defined in

node_modules/@types/node/tls.d.ts:473

___

### filter

▸ **filter**(`fn`, `options?`): [`Readable`](internal_.Readable.md)

This method allows filtering the stream. For each chunk in the stream the *fn* function will be called
and if it returns a truthy value, the chunk will be passed to the result stream.
If the *fn* function returns a promise - that promise will be `await`ed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`data`: `any`, `options?`: [`Pick`](../modules/internal_.md#pick)\<[`ArrayOptions`](../interfaces/internal_.ArrayOptions.md), ``"signal"``\>) => `boolean` \| `Promise`\<`boolean`\> | a function to filter chunks from the stream. Async or not. |
| `options?` | [`ArrayOptions`](../interfaces/internal_.ArrayOptions.md) | - |

#### Returns

[`Readable`](internal_.Readable.md)

a stream filtered with the predicate *fn*.

**`Since`**

v17.4.0, v16.14.0

#### Inherited from

[Socket](internal_.Socket.md).[filter](internal_.Socket.md#filter)

#### Defined in

node_modules/@types/node/stream.d.ts:434

___

### find

▸ **find**\<`T`\>(`fn`, `options?`): `Promise`\<`undefined` \| `T`\>

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`data`: `any`, `options?`: [`Pick`](../modules/internal_.md#pick)\<[`ArrayOptions`](../interfaces/internal_.ArrayOptions.md), ``"signal"``\>) => data is T | a function to call on each chunk of the stream. Async or not. |
| `options?` | [`ArrayOptions`](../interfaces/internal_.ArrayOptions.md) | - |

#### Returns

`Promise`\<`undefined` \| `T`\>

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

**`Since`**

v17.5.0

#### Inherited from

[Socket](internal_.Socket.md).[find](internal_.Socket.md#find)

#### Defined in

node_modules/@types/node/stream.d.ts:489

▸ **find**(`fn`, `options?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`data`: `any`, `options?`: [`Pick`](../modules/internal_.md#pick)\<[`ArrayOptions`](../interfaces/internal_.ArrayOptions.md), ``"signal"``\>) => `boolean` \| `Promise`\<`boolean`\> |
| `options?` | [`ArrayOptions`](../interfaces/internal_.ArrayOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[Socket](internal_.Socket.md).[find](internal_.Socket.md#find)

#### Defined in

node_modules/@types/node/stream.d.ts:493

___

### flatMap

▸ **flatMap**(`fn`, `options?`): [`Readable`](internal_.Readable.md)

This method returns a new stream by applying the given callback to each chunk of the stream
and then flattening the result.

It is possible to return a stream or another iterable or async iterable from *fn* and the result streams
will be merged (flattened) into the returned stream.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`data`: `any`, `options?`: [`Pick`](../modules/internal_.md#pick)\<[`ArrayOptions`](../interfaces/internal_.ArrayOptions.md), ``"signal"``\>) => `any` | a function to map over every chunk in the stream. May be async. May be a stream or generator. |
| `options?` | [`ArrayOptions`](../interfaces/internal_.ArrayOptions.md) | - |

#### Returns

[`Readable`](internal_.Readable.md)

a stream flat-mapped with the function *fn*.

**`Since`**

v17.5.0

#### Inherited from

[Socket](internal_.Socket.md).[flatMap](internal_.Socket.md#flatmap)

#### Defined in

node_modules/@types/node/stream.d.ts:520

___

### forEach

▸ **forEach**(`fn`, `options?`): `Promise`\<`void`\>

This method allows iterating a stream. For each chunk in the stream the *fn* function will be called.
If the *fn* function returns a promise - that promise will be `await`ed.

This method is different from `for await...of` loops in that it can optionally process chunks concurrently.
In addition, a `forEach` iteration can only be stopped by having passed a `signal` option
and aborting the related AbortController while `for await...of` can be stopped with `break` or `return`.
In either case the stream will be destroyed.

This method is different from listening to the `'data'` event in that it uses the `readable` event
in the underlying machinary and can limit the number of concurrent *fn* calls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`data`: `any`, `options?`: [`Pick`](../modules/internal_.md#pick)\<[`ArrayOptions`](../interfaces/internal_.ArrayOptions.md), ``"signal"``\>) => `void` \| `Promise`\<`void`\> | a function to call on each chunk of the stream. Async or not. |
| `options?` | [`ArrayOptions`](../interfaces/internal_.ArrayOptions.md) | - |

#### Returns

`Promise`\<`void`\>

a promise for when the stream has finished.

**`Since`**

v17.5.0

#### Inherited from

[Socket](internal_.Socket.md).[forEach](internal_.Socket.md#foreach)

#### Defined in

node_modules/@types/node/stream.d.ts:453

___

### getCertificate

▸ **getCertificate**(): ``null`` \| `object` \| [`PeerCertificate`](../interfaces/internal_.PeerCertificate.md)

Returns an object representing the local certificate. The returned object has
some properties corresponding to the fields of the certificate.

See [TLSSocket.getPeerCertificate](internal_.TLSSocket.md#getpeercertificate) for an example of the certificate
structure.

If there is no local certificate, an empty object will be returned. If the
socket has been destroyed, `null` will be returned.

#### Returns

``null`` \| `object` \| [`PeerCertificate`](../interfaces/internal_.PeerCertificate.md)

**`Since`**

v11.2.0

#### Defined in

node_modules/@types/node/tls.d.ts:258

___

### getCipher

▸ **getCipher**(): [`CipherNameAndProtocol`](../interfaces/internal_.CipherNameAndProtocol.md)

Returns an object containing information on the negotiated cipher suite.

For example, a TLSv1.2 protocol with AES256-SHA cipher:

```json
{
    "name": "AES256-SHA",
    "standardName": "TLS_RSA_WITH_AES_256_CBC_SHA",
    "version": "SSLv3"
}
```

See [SSL\_CIPHER\_get\_name](https://www.openssl.org/docs/man1.1.1/man3/SSL_CIPHER_get_name.html) for more information.

#### Returns

[`CipherNameAndProtocol`](../interfaces/internal_.CipherNameAndProtocol.md)

**`Since`**

v0.11.4

#### Defined in

node_modules/@types/node/tls.d.ts:275

___

### getEphemeralKeyInfo

▸ **getEphemeralKeyInfo**(): ``null`` \| `object` \| [`EphemeralKeyInfo`](../interfaces/internal_.EphemeralKeyInfo.md)

Returns an object representing the type, name, and size of parameter of
an ephemeral key exchange in `perfect forward secrecy` on a client
connection. It returns an empty object when the key exchange is not
ephemeral. As this is only supported on a client socket; `null` is returned
if called on a server socket. The supported types are `'DH'` and `'ECDH'`. The`name` property is available only when type is `'ECDH'`.

For example: `{ type: 'ECDH', name: 'prime256v1', size: 256 }`.

#### Returns

``null`` \| `object` \| [`EphemeralKeyInfo`](../interfaces/internal_.EphemeralKeyInfo.md)

**`Since`**

v5.0.0

#### Defined in

node_modules/@types/node/tls.d.ts:286

___

### getFinished

▸ **getFinished**(): `undefined` \| [`Buffer`](../interfaces/internal_.Buffer.md)

As the `Finished` messages are message digests of the complete handshake
(with a total of 192 bits for TLS 1.0 and more for SSL 3.0), they can
be used for external authentication procedures when the authentication
provided by SSL/TLS is not desired or is not enough.

Corresponds to the `SSL_get_finished` routine in OpenSSL and may be used
to implement the `tls-unique` channel binding from [RFC 5929](https://tools.ietf.org/html/rfc5929).

#### Returns

`undefined` \| [`Buffer`](../interfaces/internal_.Buffer.md)

The latest `Finished` message that has been sent to the socket as part of a SSL/TLS handshake, or `undefined` if no `Finished` message has been sent yet.

**`Since`**

v9.9.0

#### Defined in

node_modules/@types/node/tls.d.ts:298

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](internal_.TLSSocket.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

[Socket](internal_.Socket.md).[getMaxListeners](internal_.Socket.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:735

___

### getPeerCertificate

▸ **getPeerCertificate**(`detailed`): [`DetailedPeerCertificate`](../interfaces/internal_.DetailedPeerCertificate.md)

Returns an object representing the peer's certificate. If the peer does not
provide a certificate, an empty object will be returned. If the socket has been
destroyed, `null` will be returned.

If the full certificate chain was requested, each certificate will include an`issuerCertificate` property containing an object representing its issuer's
certificate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `detailed` | ``true`` | Include the full certificate chain if `true`, otherwise include just the peer's certificate. |

#### Returns

[`DetailedPeerCertificate`](../interfaces/internal_.DetailedPeerCertificate.md)

A certificate object.

**`Since`**

v0.11.4

#### Defined in

node_modules/@types/node/tls.d.ts:310

▸ **getPeerCertificate**(`detailed?`): [`PeerCertificate`](../interfaces/internal_.PeerCertificate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `detailed?` | ``false`` |

#### Returns

[`PeerCertificate`](../interfaces/internal_.PeerCertificate.md)

#### Defined in

node_modules/@types/node/tls.d.ts:311

▸ **getPeerCertificate**(`detailed?`): [`PeerCertificate`](../interfaces/internal_.PeerCertificate.md) \| [`DetailedPeerCertificate`](../interfaces/internal_.DetailedPeerCertificate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `detailed?` | `boolean` |

#### Returns

[`PeerCertificate`](../interfaces/internal_.PeerCertificate.md) \| [`DetailedPeerCertificate`](../interfaces/internal_.DetailedPeerCertificate.md)

#### Defined in

node_modules/@types/node/tls.d.ts:312

___

### getPeerFinished

▸ **getPeerFinished**(): `undefined` \| [`Buffer`](../interfaces/internal_.Buffer.md)

As the `Finished` messages are message digests of the complete handshake
(with a total of 192 bits for TLS 1.0 and more for SSL 3.0), they can
be used for external authentication procedures when the authentication
provided by SSL/TLS is not desired or is not enough.

Corresponds to the `SSL_get_peer_finished` routine in OpenSSL and may be used
to implement the `tls-unique` channel binding from [RFC 5929](https://tools.ietf.org/html/rfc5929).

#### Returns

`undefined` \| [`Buffer`](../interfaces/internal_.Buffer.md)

The latest `Finished` message that is expected or has actually been received from the socket as part of a SSL/TLS handshake, or `undefined` if there is no `Finished` message so
far.

**`Since`**

v9.9.0

#### Defined in

node_modules/@types/node/tls.d.ts:325

___

### getPeerX509Certificate

▸ **getPeerX509Certificate**(): `undefined` \| [`X509Certificate`](internal_.X509Certificate.md)

Returns the peer certificate as an `X509Certificate` object.

If there is no peer certificate, or the socket has been destroyed,`undefined` will be returned.

#### Returns

`undefined` \| [`X509Certificate`](internal_.X509Certificate.md)

**`Since`**

v15.9.0

#### Defined in

node_modules/@types/node/tls.d.ts:437

___

### getProtocol

▸ **getProtocol**(): ``null`` \| `string`

Returns a string containing the negotiated SSL/TLS protocol version of the
current connection. The value `'unknown'` will be returned for connected
sockets that have not completed the handshaking process. The value `null` will
be returned for server sockets or disconnected client sockets.

Protocol versions are:

* `'SSLv3'`
* `'TLSv1'`
* `'TLSv1.1'`
* `'TLSv1.2'`
* `'TLSv1.3'`

See the OpenSSL [`SSL_get_version`](https://www.openssl.org/docs/man1.1.1/man3/SSL_get_version.html) documentation for more information.

#### Returns

``null`` \| `string`

**`Since`**

v5.7.0

#### Defined in

node_modules/@types/node/tls.d.ts:343

___

### getSession

▸ **getSession**(): `undefined` \| [`Buffer`](../interfaces/internal_.Buffer.md)

Returns the TLS session data or `undefined` if no session was
negotiated. On the client, the data can be provided to the `session` option of [connect](internal_.TLSSocket.md#connect) to resume the connection. On the server, it may be useful
for debugging.

See `Session Resumption` for more information.

Note: `getSession()` works only for TLSv1.2 and below. For TLSv1.3, applications
must use the `'session'` event (it also works for TLSv1.2 and below).

#### Returns

`undefined` \| [`Buffer`](../interfaces/internal_.Buffer.md)

**`Since`**

v0.11.4

#### Defined in

node_modules/@types/node/tls.d.ts:355

___

### getSharedSigalgs

▸ **getSharedSigalgs**(): `string`[]

See [SSL\_get\_shared\_sigalgs](https://www.openssl.org/docs/man1.1.1/man3/SSL_get_shared_sigalgs.html) for more information.

#### Returns

`string`[]

List of signature algorithms shared between the server and the client in the order of decreasing preference.

**`Since`**

v12.11.0

#### Defined in

node_modules/@types/node/tls.d.ts:361

___

### getTLSTicket

▸ **getTLSTicket**(): `undefined` \| [`Buffer`](../interfaces/internal_.Buffer.md)

For a client, returns the TLS session ticket if one is available, or`undefined`. For a server, always returns `undefined`.

It may be useful for debugging.

See `Session Resumption` for more information.

#### Returns

`undefined` \| [`Buffer`](../interfaces/internal_.Buffer.md)

**`Since`**

v0.11.4

#### Defined in

node_modules/@types/node/tls.d.ts:370

___

### getX509Certificate

▸ **getX509Certificate**(): `undefined` \| [`X509Certificate`](internal_.X509Certificate.md)

Returns the local certificate as an `X509Certificate` object.

If there is no local certificate, or the socket has been destroyed,`undefined` will be returned.

#### Returns

`undefined` \| [`X509Certificate`](internal_.X509Certificate.md)

**`Since`**

v15.9.0

#### Defined in

node_modules/@types/node/tls.d.ts:444

___

### isPaused

▸ **isPaused**(): `boolean`

The `readable.isPaused()` method returns the current operating state of the`Readable`. This is used primarily by the mechanism that underlies the`readable.pipe()` method. In most
typical cases, there will be no reason to
use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

#### Returns

`boolean`

**`Since`**

v0.11.14

#### Inherited from

[Socket](internal_.Socket.md).[isPaused](internal_.Socket.md#ispaused)

#### Defined in

node_modules/@types/node/stream.d.ts:287

___

### isSessionReused

▸ **isSessionReused**(): `boolean`

See `Session Resumption` for more information.

#### Returns

`boolean`

`true` if the session was reused, `false` otherwise.

**`Since`**

v0.5.6

#### Defined in

node_modules/@types/node/tls.d.ts:376

___

### iterator

▸ **iterator**(`options?`): [`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)\<`any`\>

The iterator created by this method gives users the option to cancel the destruction
of the stream if the `for await...of` loop is exited by `return`, `break`, or `throw`,
or if the iterator should destroy the stream if the stream emitted an error during iteration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.destroyOnReturn?` | `boolean` | When set to `false`, calling `return` on the async iterator, or exiting a `for await...of` iteration using a `break`, `return`, or `throw` will not destroy the stream. **Default: `true`**. |

#### Returns

[`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)\<`any`\>

**`Since`**

v16.3.0

#### Inherited from

[Socket](internal_.Socket.md).[iterator](internal_.Socket.md#iterator)

#### Defined in

node_modules/@types/node/stream.d.ts:417

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

[Socket](internal_.Socket.md).[listenerCount](internal_.Socket.md#listenercount)

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

[Socket](internal_.Socket.md).[listeners](internal_.Socket.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:748

___

### map

▸ **map**(`fn`, `options?`): [`Readable`](internal_.Readable.md)

This method allows mapping over the stream. The *fn* function will be called for every chunk in the stream.
If the *fn* function returns a promise - that promise will be `await`ed before being passed to the result stream.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`data`: `any`, `options?`: [`Pick`](../modules/internal_.md#pick)\<[`ArrayOptions`](../interfaces/internal_.ArrayOptions.md), ``"signal"``\>) => `any` | a function to map over every chunk in the stream. Async or not. |
| `options?` | [`ArrayOptions`](../interfaces/internal_.ArrayOptions.md) | - |

#### Returns

[`Readable`](internal_.Readable.md)

a stream mapped with the function *fn*.

**`Since`**

v17.4.0, v16.14.0

#### Inherited from

[Socket](internal_.Socket.md).[map](internal_.Socket.md#map)

#### Defined in

node_modules/@types/node/stream.d.ts:425

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

[Socket](internal_.Socket.md).[off](internal_.Socket.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:708

___

### on

▸ **on**(`event`, `listener`): `this`

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

**`Since`**

v0.1.101

#### Overrides

[Socket](internal_.Socket.md).[on](internal_.Socket.md#on)

#### Defined in

node_modules/@types/node/tls.d.ts:484

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"OCSPResponse"`` |
| `listener` | (`response`: [`Buffer`](../interfaces/internal_.Buffer.md)) => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[on](internal_.Socket.md#on)

#### Defined in

node_modules/@types/node/tls.d.ts:485

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"secureConnect"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[on](internal_.Socket.md#on)

#### Defined in

node_modules/@types/node/tls.d.ts:486

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"session"`` |
| `listener` | (`session`: [`Buffer`](../interfaces/internal_.Buffer.md)) => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[on](internal_.Socket.md#on)

#### Defined in

node_modules/@types/node/tls.d.ts:487

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"keylog"`` |
| `listener` | (`line`: [`Buffer`](../interfaces/internal_.Buffer.md)) => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[on](internal_.Socket.md#on)

#### Defined in

node_modules/@types/node/tls.d.ts:488

___

### once

▸ **once**(`event`, `listener`): `this`

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

**`Since`**

v0.3.0

#### Overrides

[Socket](internal_.Socket.md).[once](internal_.Socket.md#once)

#### Defined in

node_modules/@types/node/tls.d.ts:489

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"OCSPResponse"`` |
| `listener` | (`response`: [`Buffer`](../interfaces/internal_.Buffer.md)) => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[once](internal_.Socket.md#once)

#### Defined in

node_modules/@types/node/tls.d.ts:490

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"secureConnect"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[once](internal_.Socket.md#once)

#### Defined in

node_modules/@types/node/tls.d.ts:491

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"session"`` |
| `listener` | (`session`: [`Buffer`](../interfaces/internal_.Buffer.md)) => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[once](internal_.Socket.md#once)

#### Defined in

node_modules/@types/node/tls.d.ts:492

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"keylog"`` |
| `listener` | (`line`: [`Buffer`](../interfaces/internal_.Buffer.md)) => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[once](internal_.Socket.md#once)

#### Defined in

node_modules/@types/node/tls.d.ts:493

___

### pause

▸ **pause**(): `this`

Pauses the reading of data. That is, `'data'` events will not be emitted.
Useful to throttle back an upload.

#### Returns

`this`

The socket itself.

#### Inherited from

[Socket](internal_.Socket.md).[pause](internal_.Socket.md#pause)

#### Defined in

node_modules/@types/node/net.d.ts:151

___

### pipe

▸ **pipe**\<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`WritableStream`](../interfaces/internal_.WritableStream.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Inherited from

[Socket](internal_.Socket.md).[pipe](internal_.Socket.md#pipe)

#### Defined in

node_modules/@types/node/stream.d.ts:29

___

### prependListener

▸ **prependListener**(`event`, `listener`): `this`

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

**`Since`**

v6.0.0

#### Overrides

[Socket](internal_.Socket.md).[prependListener](internal_.Socket.md#prependlistener)

#### Defined in

node_modules/@types/node/tls.d.ts:494

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"OCSPResponse"`` |
| `listener` | (`response`: [`Buffer`](../interfaces/internal_.Buffer.md)) => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[prependListener](internal_.Socket.md#prependlistener)

#### Defined in

node_modules/@types/node/tls.d.ts:495

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"secureConnect"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[prependListener](internal_.Socket.md#prependlistener)

#### Defined in

node_modules/@types/node/tls.d.ts:496

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"session"`` |
| `listener` | (`session`: [`Buffer`](../interfaces/internal_.Buffer.md)) => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[prependListener](internal_.Socket.md#prependlistener)

#### Defined in

node_modules/@types/node/tls.d.ts:497

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"keylog"`` |
| `listener` | (`line`: [`Buffer`](../interfaces/internal_.Buffer.md)) => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[prependListener](internal_.Socket.md#prependlistener)

#### Defined in

node_modules/@types/node/tls.d.ts:498

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

**`Since`**

v6.0.0

#### Overrides

[Socket](internal_.Socket.md).[prependOnceListener](internal_.Socket.md#prependoncelistener)

#### Defined in

node_modules/@types/node/tls.d.ts:499

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"OCSPResponse"`` |
| `listener` | (`response`: [`Buffer`](../interfaces/internal_.Buffer.md)) => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[prependOnceListener](internal_.Socket.md#prependoncelistener)

#### Defined in

node_modules/@types/node/tls.d.ts:500

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"secureConnect"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[prependOnceListener](internal_.Socket.md#prependoncelistener)

#### Defined in

node_modules/@types/node/tls.d.ts:501

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"session"`` |
| `listener` | (`session`: [`Buffer`](../interfaces/internal_.Buffer.md)) => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[prependOnceListener](internal_.Socket.md#prependoncelistener)

#### Defined in

node_modules/@types/node/tls.d.ts:502

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"keylog"`` |
| `listener` | (`line`: [`Buffer`](../interfaces/internal_.Buffer.md)) => `void` |

#### Returns

`this`

#### Overrides

[Socket](internal_.Socket.md).[prependOnceListener](internal_.Socket.md#prependoncelistener)

#### Defined in

node_modules/@types/node/tls.d.ts:503

___

### push

▸ **push**(`chunk`, `encoding?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |

#### Returns

`boolean`

#### Inherited from

[Socket](internal_.Socket.md).[push](internal_.Socket.md#push)

#### Defined in

node_modules/@types/node/stream.d.ts:407

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

[Socket](internal_.Socket.md).[rawListeners](internal_.Socket.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:779

___

### read

▸ **read**(`size?`): `any`

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If`size` bytes are not available to be read, `null` will be returned _unless_the stream has ended, in which
case all of the data remaining in the internal
buffer will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the`size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](internal_.ReadableBase.md#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | Optional argument to specify how much data to read. |

#### Returns

`any`

**`Since`**

v0.9.4

#### Inherited from

[Socket](internal_.Socket.md).[read](internal_.Socket.md#read)

#### Defined in

node_modules/@types/node/stream.d.ts:204

___

### reduce

▸ **reduce**\<`T`\>(`fn`, `initial?`, `options?`): `Promise`\<`T`\>

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`previous`: `any`, `data`: `any`, `options?`: [`Pick`](../modules/internal_.md#pick)\<[`ArrayOptions`](../interfaces/internal_.ArrayOptions.md), ``"signal"``\>) => `T` | a reducer function to call over every chunk in the stream. Async or not. |
| `initial?` | `undefined` | the initial value to use in the reduction. |
| `options?` | [`Pick`](../modules/internal_.md#pick)\<[`ArrayOptions`](../interfaces/internal_.ArrayOptions.md), ``"signal"``\> | - |

#### Returns

`Promise`\<`T`\>

a promise for the final value of the reduction.

**`Since`**

v17.5.0

#### Inherited from

[Socket](internal_.Socket.md).[reduce](internal_.Socket.md#reduce)

#### Defined in

node_modules/@types/node/stream.d.ts:556

▸ **reduce**\<`T`\>(`fn`, `initial`, `options?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`previous`: `T`, `data`: `any`, `options?`: [`Pick`](../modules/internal_.md#pick)\<[`ArrayOptions`](../interfaces/internal_.ArrayOptions.md), ``"signal"``\>) => `T` |
| `initial` | `T` |
| `options?` | [`Pick`](../modules/internal_.md#pick)\<[`ArrayOptions`](../interfaces/internal_.ArrayOptions.md), ``"signal"``\> |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[Socket](internal_.Socket.md).[reduce](internal_.Socket.md#reduce)

#### Defined in

node_modules/@types/node/stream.d.ts:561

___

### ref

▸ **ref**(): `this`

Opposite of `unref()`, calling `ref()` on a previously `unref`ed socket will _not_ let the program exit if it's the only socket left (the default behavior).
If the socket is `ref`ed calling `ref` again will have no effect.

#### Returns

`this`

The socket itself.

**`Since`**

v0.9.1

#### Inherited from

[Socket](internal_.Socket.md).[ref](internal_.Socket.md#ref)

#### Defined in

node_modules/@types/node/net.d.ts:242

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

[Socket](internal_.Socket.md).[removeAllListeners](internal_.Socket.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:719

___

### removeListener

▸ **removeListener**(`event`, `listener`): `this`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

`this`

**`Since`**

v0.1.26

#### Inherited from

[Socket](internal_.Socket.md).[removeListener](internal_.Socket.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:1232

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[removeListener](internal_.Socket.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:1233

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[removeListener](internal_.Socket.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:1234

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[removeListener](internal_.Socket.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:1235

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[removeListener](internal_.Socket.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:1236

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[removeListener](internal_.Socket.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:1237

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[removeListener](internal_.Socket.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:1238

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[removeListener](internal_.Socket.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:1239

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[removeListener](internal_.Socket.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:1240

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[removeListener](internal_.Socket.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:1241

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[removeListener](internal_.Socket.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:1242

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Inherited from

[Socket](internal_.Socket.md).[removeListener](internal_.Socket.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:1243

___

### renegotiate

▸ **renegotiate**(`options`, `callback`): `undefined` \| `boolean`

The `tlsSocket.renegotiate()` method initiates a TLS renegotiation process.
Upon completion, the `callback` function will be passed a single argument
that is either an `Error` (if the request failed) or `null`.

This method can be used to request a peer's certificate after the secure
connection has been established.

When running as the server, the socket will be destroyed with an error after`handshakeTimeout` timeout.

For TLSv1.3, renegotiation cannot be initiated, it is not supported by the
protocol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.rejectUnauthorized?` | `boolean` | - |
| `options.requestCert?` | `boolean` | - |
| `callback` | (`err`: ``null`` \| [`Error`](../interfaces/internal_.Error.md)) => `void` | If `renegotiate()` returned `true`, callback is attached once to the `'secure'` event. If `renegotiate()` returned `false`, `callback` will be called in the next tick with an error, unless the `tlsSocket` has been destroyed, in which case `callback` will not be called at all. |

#### Returns

`undefined` \| `boolean`

`true` if renegotiation was initiated, `false` otherwise.

**`Since`**

v0.11.8

#### Defined in

node_modules/@types/node/tls.d.ts:394

___

### resetAndDestroy

▸ **resetAndDestroy**(): `this`

Close the TCP connection by sending an RST packet and destroy the stream.
If this TCP socket is in connecting status, it will send an RST packet and destroy this TCP socket once it is connected.
Otherwise, it will call `socket.destroy` with an `ERR_SOCKET_CLOSED` Error.
If this is not a TCP socket (for example, a pipe), calling this method will immediately throw an `ERR_INVALID_HANDLE_TYPE` Error.

#### Returns

`this`

**`Since`**

v18.3.0, v16.17.0

#### Inherited from

[Socket](internal_.Socket.md).[resetAndDestroy](internal_.Socket.md#resetanddestroy)

#### Defined in

node_modules/@types/node/net.d.ts:159

___

### resume

▸ **resume**(): `this`

Resumes reading after a call to `socket.pause()`.

#### Returns

`this`

The socket itself.

#### Inherited from

[Socket](internal_.Socket.md).[resume](internal_.Socket.md#resume)

#### Defined in

node_modules/@types/node/net.d.ts:164

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): `this`

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) | The new default encoding |

#### Returns

`this`

**`Since`**

v0.11.15

#### Inherited from

[Socket](internal_.Socket.md).[setDefaultEncoding](internal_.Socket.md#setdefaultencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:1115

___

### setEncoding

▸ **setEncoding**(`encoding?`): `this`

Set the encoding for the socket as a `Readable Stream`. See `readable.setEncoding()` for more information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |

#### Returns

`this`

The socket itself.

**`Since`**

v0.1.90

#### Inherited from

[Socket](internal_.Socket.md).[setEncoding](internal_.Socket.md#setencoding)

#### Defined in

node_modules/@types/node/net.d.ts:145

___

### setKeepAlive

▸ **setKeepAlive**(`enable?`, `initialDelay?`): `this`

Enable/disable keep-alive functionality, and optionally set the initial
delay before the first keepalive probe is sent on an idle socket.

Set `initialDelay` (in milliseconds) to set the delay between the last
data packet received and the first keepalive probe. Setting `0` for`initialDelay` will leave the value unchanged from the default
(or previous) setting.

Enabling the keep-alive functionality will set the following socket options:

* `SO_KEEPALIVE=1`
* `TCP_KEEPIDLE=initialDelay`
* `TCP_KEEPCNT=10`
* `TCP_KEEPINTVL=1`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable?` | `boolean` |
| `initialDelay?` | `number` |

#### Returns

`this`

The socket itself.

**`Since`**

v0.1.92

#### Inherited from

[Socket](internal_.Socket.md).[setKeepAlive](internal_.Socket.md#setkeepalive)

#### Defined in

node_modules/@types/node/net.d.ts:222

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

[Socket](internal_.Socket.md).[setMaxListeners](internal_.Socket.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:729

___

### setMaxSendFragment

▸ **setMaxSendFragment**(`size?`): `boolean`

The `tlsSocket.setMaxSendFragment()` method sets the maximum TLS fragment size.
Returns `true` if setting the limit succeeded; `false` otherwise.

Smaller fragment sizes decrease the buffering latency on the client: larger
fragments are buffered by the TLS layer until the entire fragment is received
and its integrity is verified; large fragments can span multiple roundtrips
and their processing can be delayed due to packet loss or reordering. However,
smaller fragments add extra TLS framing bytes and CPU overhead, which may
decrease overall server throughput.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | The maximum TLS fragment size. The maximum value is `16384`. |

#### Returns

`boolean`

**`Since`**

v0.11.11

#### Defined in

node_modules/@types/node/tls.d.ts:414

___

### setNoDelay

▸ **setNoDelay**(`noDelay?`): `this`

Enable/disable the use of Nagle's algorithm.

When a TCP connection is created, it will have Nagle's algorithm enabled.

Nagle's algorithm delays data before it is sent via the network. It attempts
to optimize throughput at the expense of latency.

Passing `true` for `noDelay` or not passing an argument will disable Nagle's
algorithm for the socket. Passing `false` for `noDelay` will enable Nagle's
algorithm.

#### Parameters

| Name | Type |
| :------ | :------ |
| `noDelay?` | `boolean` |

#### Returns

`this`

The socket itself.

**`Since`**

v0.1.90

#### Inherited from

[Socket](internal_.Socket.md).[setNoDelay](internal_.Socket.md#setnodelay)

#### Defined in

node_modules/@types/node/net.d.ts:202

___

### setTimeout

▸ **setTimeout**(`timeout`, `callback?`): `this`

Sets the socket to timeout after `timeout` milliseconds of inactivity on
the socket. By default `net.Socket` do not have a timeout.

When an idle timeout is triggered the socket will receive a `'timeout'` event but the connection will not be severed. The user must manually call `socket.end()` or `socket.destroy()` to
end the connection.

```js
socket.setTimeout(3000);
socket.on('timeout', () => {
  console.log('socket timeout');
  socket.end();
});
```

If `timeout` is 0, then the existing idle timeout is disabled.

The optional `callback` parameter will be added as a one-time listener for the `'timeout'` event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |
| `callback?` | () => `void` |

#### Returns

`this`

The socket itself.

**`Since`**

v0.1.90

#### Inherited from

[Socket](internal_.Socket.md).[setTimeout](internal_.Socket.md#settimeout)

#### Defined in

node_modules/@types/node/net.d.ts:186

___

### some

▸ **some**(`fn`, `options?`): `Promise`\<`boolean`\>

This method is similar to `Array.prototype.some` and calls *fn* on each chunk in the stream
until the awaited return value is `true` (or any truthy value). Once an *fn* call on a chunk
`await`ed return value is truthy, the stream is destroyed and the promise is fulfilled with `true`.
If none of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `false`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`data`: `any`, `options?`: [`Pick`](../modules/internal_.md#pick)\<[`ArrayOptions`](../interfaces/internal_.ArrayOptions.md), ``"signal"``\>) => `boolean` \| `Promise`\<`boolean`\> | a function to call on each chunk of the stream. Async or not. |
| `options?` | [`ArrayOptions`](../interfaces/internal_.ArrayOptions.md) | - |

#### Returns

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for at least one of the chunks.

**`Since`**

v17.5.0

#### Inherited from

[Socket](internal_.Socket.md).[some](internal_.Socket.md#some)

#### Defined in

node_modules/@types/node/stream.d.ts:475

___

### take

▸ **take**(`limit`, `options?`): [`Readable`](internal_.Readable.md)

This method returns a new stream with the first *limit* chunks.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | the number of chunks to take from the readable. |
| `options?` | [`Pick`](../modules/internal_.md#pick)\<[`ArrayOptions`](../interfaces/internal_.ArrayOptions.md), ``"signal"``\> | - |

#### Returns

[`Readable`](internal_.Readable.md)

a stream with *limit* chunks taken.

**`Since`**

v17.5.0

#### Inherited from

[Socket](internal_.Socket.md).[take](internal_.Socket.md#take)

#### Defined in

node_modules/@types/node/stream.d.ts:534

___

### toArray

▸ **toArray**(`options?`): `Promise`\<`any`[]\>

This method allows easily obtaining the contents of a stream.

As this method reads the entire stream into memory, it negates the benefits of streams. It's intended
for interoperability and convenience, not as the primary way to consume streams.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`Pick`](../modules/internal_.md#pick)\<[`ArrayOptions`](../interfaces/internal_.ArrayOptions.md), ``"signal"``\> |

#### Returns

`Promise`\<`any`[]\>

a promise containing an array with the contents of the stream.

**`Since`**

v17.5.0

#### Inherited from

[Socket](internal_.Socket.md).[toArray](internal_.Socket.md#toarray)

#### Defined in

node_modules/@types/node/stream.d.ts:465

___

### uncork

▸ **uncork**(): `void`

The `writable.uncork()` method flushes all data buffered since [cork](internal_.WritableBase.md#cork) was called.

When using `writable.cork()` and `writable.uncork()` to manage the buffering
of writes to a stream, defer calls to `writable.uncork()` using`process.nextTick()`. Doing so allows batching of all`writable.write()` calls that occur within a given Node.js event
loop phase.

```js
stream.cork();
stream.write('some ');
stream.write('data ');
process.nextTick(() => stream.uncork());
```

If the `writable.cork()` method is called multiple times on a stream, the
same number of calls to `writable.uncork()` must be called to flush the buffered
data.

```js
stream.cork();
stream.write('some ');
stream.cork();
stream.write('data ');
process.nextTick(() => {
  stream.uncork();
  // The data will not be flushed until uncork() is called a second time.
  stream.uncork();
});
```

See also: `writable.cork()`.

#### Returns

`void`

**`Since`**

v0.11.2

#### Inherited from

[Socket](internal_.Socket.md).[uncork](internal_.Socket.md#uncork)

#### Defined in

node_modules/@types/node/stream.d.ts:1120

___

### unpipe

▸ **unpipe**(`destination?`): `this`

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](internal_.ReadableBase.md#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
const fs = require('node:fs');
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination?` | [`WritableStream`](../interfaces/internal_.WritableStream.md) | Optional specific stream to unpipe |

#### Returns

`this`

**`Since`**

v0.9.4

#### Inherited from

[Socket](internal_.Socket.md).[unpipe](internal_.Socket.md#unpipe)

#### Defined in

node_modules/@types/node/stream.d.ts:314

___

### unref

▸ **unref**(): `this`

Calling `unref()` on a socket will allow the program to exit if this is the only
active socket in the event system. If the socket is already `unref`ed calling`unref()` again will have no effect.

#### Returns

`this`

The socket itself.

**`Since`**

v0.9.1

#### Inherited from

[Socket](internal_.Socket.md).[unref](internal_.Socket.md#unref)

#### Defined in

node_modules/@types/node/net.d.ts:235

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
const { StringDecoder } = require('node:string_decoder');
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.includes('\n\n')) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
        return;
      }
      // Still reading the header.
      header += str;
    }
  }
}
```

Unlike [push](internal_.ReadableBase.md#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [_read](internal_.ReadableBase.md#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](internal_.ReadableBase.md#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must be a string, `Buffer`, `Uint8Array`, or `null`. For object mode streams, `chunk` may be any JavaScript value. |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) | Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`. |

#### Returns

`void`

**`Since`**

v0.9.11

#### Inherited from

[Socket](internal_.Socket.md).[unshift](internal_.Socket.md#unshift)

#### Defined in

node_modules/@types/node/stream.d.ts:380

___

### wrap

▸ **wrap**(`stream`): `this`

Prior to Node.js 0.10, streams did not implement the entire `node:stream`module API as it is currently defined. (See `Compatibility` for more
information.)

When using an older Node.js library that emits `'data'` events and has a [pause](internal_.ReadableBase.md#pause) method that is advisory only, the`readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
const { OldReader } = require('./old-api-module.js');
const { Readable } = require('node:stream');
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) | An "old style" readable stream |

#### Returns

`this`

**`Since`**

v0.9.4

#### Inherited from

[Socket](internal_.Socket.md).[wrap](internal_.Socket.md#wrap)

#### Defined in

node_modules/@types/node/stream.d.ts:406

___

### write

▸ **write**(`buffer`, `cb?`): `boolean`

Sends data on the socket. The second parameter specifies the encoding in the
case of a string. It defaults to UTF8 encoding.

Returns `true` if the entire data was flushed successfully to the kernel
buffer. Returns `false` if all or part of the data was queued in user memory.`'drain'` will be emitted when the buffer is again free.

The optional `callback` parameter will be executed when the data is finally
written out, which may not be immediately.

See `Writable` stream `write()` method for more
information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `string` \| `Uint8Array` |
| `cb?` | (`err?`: [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`boolean`

**`Since`**

v0.1.90

#### Inherited from

[Socket](internal_.Socket.md).[write](internal_.Socket.md#write)

#### Defined in

node_modules/@types/node/net.d.ts:115

▸ **write**(`str`, `encoding?`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` \| `Uint8Array` |
| `encoding?` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `cb?` | (`err?`: [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`boolean`

#### Inherited from

[Socket](internal_.Socket.md).[write](internal_.Socket.md#write)

#### Defined in

node_modules/@types/node/net.d.ts:116

___

### addAbortListener

▸ **addAbortListener**(`signal`, `resource`): [`Disposable`](../interfaces/internal_.Disposable.md)

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | `AbortSignal` |
| `resource` | (`event`: `Event`) => `void` |

#### Returns

[`Disposable`](../interfaces/internal_.Disposable.md)

Disposable that removes the `abort` listener.

**`Since`**

v20.5.0

#### Inherited from

[Socket](internal_.Socket.md).[addAbortListener](internal_.Socket.md#addabortlistener)

#### Defined in

node_modules/@types/node/events.d.ts:400

___

### from

▸ **from**(`src`): [`Duplex`](internal_.Duplex.md)

A utility method for creating duplex streams.

- `Stream` converts writable stream into writable `Duplex` and readable stream
  to `Duplex`.
- `Blob` converts into readable `Duplex`.
- `string` converts into readable `Duplex`.
- `ArrayBuffer` converts into readable `Duplex`.
- `AsyncIterable` converts into a readable `Duplex`. Cannot yield `null`.
- `AsyncGeneratorFunction` converts into a readable/writable transform
  `Duplex`. Must take a source `AsyncIterable` as first parameter. Cannot yield
  `null`.
- `AsyncFunction` converts into a writable `Duplex`. Must return
  either `null` or `undefined`
- `Object ({ writable, readable })` converts `readable` and
  `writable` into `Stream` and then combines them into `Duplex` where the
  `Duplex` will write to the `writable` and read from the `readable`.
- `Promise` converts into readable `Duplex`. Value `null` is ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` \| [`Object`](../interfaces/internal_.Object.md) \| `Promise`\<`any`\> \| [`Stream`](internal_.Stream.md) \| `ArrayBuffer` \| [`Iterable`](../interfaces/internal_.Iterable.md)\<`any`\> \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`any`\> \| [`Blob`](internal_.Blob.md) \| [`AsyncGeneratorFunction`](../interfaces/internal_.AsyncGeneratorFunction.md) |

#### Returns

[`Duplex`](internal_.Duplex.md)

**`Since`**

v16.8.0

#### Inherited from

[Socket](internal_.Socket.md).[from](internal_.Socket.md#from)

#### Defined in

node_modules/@types/node/stream.d.ts:1091

___

### fromWeb

▸ **fromWeb**(`duplexStream`, `options?`): [`Duplex`](internal_.Duplex.md)

A utility method for creating a `Duplex` from a web `ReadableStream` and `WritableStream`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `duplexStream` | `Object` |
| `duplexStream.readable` | [`ReadableStream`](../interfaces/internal_.ReadableStream.md)\<`any`\> |
| `duplexStream.writable` | [`WritableStream`](../interfaces/internal_.WritableStream-1.md)\<`any`\> |
| `options?` | [`Pick`](../modules/internal_.md#pick)\<[`DuplexOptions`](../interfaces/internal_.DuplexOptions.md), ``"encoding"`` \| ``"highWaterMark"`` \| ``"objectMode"`` \| ``"signal"`` \| ``"decodeStrings"`` \| ``"allowHalfOpen"``\> |

#### Returns

[`Duplex`](internal_.Duplex.md)

**`Since`**

v17.0.0

#### Inherited from

[Socket](internal_.Socket.md).[fromWeb](internal_.Socket.md#fromweb)

#### Defined in

node_modules/@types/node/stream.d.ts:1135

___

### getEventListeners

▸ **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md)\<[`DefaultEventMap`](../modules/internal_.md#defaulteventmap)\> \| [`_DOMEventTarget`](../interfaces/internal_._DOMEventTarget.md) |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v15.2.0, v14.17.0

#### Inherited from

[Socket](internal_.Socket.md).[getEventListeners](internal_.Socket.md#geteventlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:321

___

### getMaxListeners

▸ **getMaxListeners**(`emitter`): `number`

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md)\<[`DefaultEventMap`](../modules/internal_.md#defaulteventmap)\> \| [`_DOMEventTarget`](../interfaces/internal_._DOMEventTarget.md) |

#### Returns

`number`

**`Since`**

v19.9.0

#### Inherited from

[Socket](internal_.Socket.md).[getMaxListeners](internal_.Socket.md#getmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:350

___

### isDisturbed

▸ **isDisturbed**(`stream`): `boolean`

Returns whether the stream has been read from or cancelled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`Readable`](internal_.Readable.md) \| [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) |

#### Returns

`boolean`

**`Since`**

v16.8.0

#### Inherited from

[Socket](internal_.Socket.md).[isDisturbed](internal_.Socket.md#isdisturbed)

#### Defined in

node_modules/@types/node/stream.d.ts:58

___

### listenerCount

▸ **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md)\<[`DefaultEventMap`](../modules/internal_.md#defaulteventmap)\> | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Inherited from

[Socket](internal_.Socket.md).[listenerCount](internal_.Socket.md#listenercount-1)

#### Defined in

node_modules/@types/node/events.d.ts:293

___

### on

▸ **on**(`emitter`, `eventName`, `options?`): [`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)\<`any`\>

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md)\<[`DefaultEventMap`](../modules/internal_.md#defaulteventmap)\> | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/internal_.StaticEventEmitterOptions.md) | - |

#### Returns

[`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)\<`any`\>

that iterates `eventName` events emitted by the `emitter`

**`Since`**

v13.6.0, v12.16.0

#### Inherited from

[Socket](internal_.Socket.md).[on](internal_.Socket.md#on-1)

#### Defined in

node_modules/@types/node/events.d.ts:271

___

### once

▸ **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md)\<[`DefaultEventMap`](../modules/internal_.md#defaulteventmap)\> |
| `eventName` | `string` \| `symbol` |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/internal_.StaticEventEmitterOptions.md) |

#### Returns

`Promise`\<`any`[]\>

**`Since`**

v11.13.0, v10.16.0

#### Inherited from

[Socket](internal_.Socket.md).[once](internal_.Socket.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:206

▸ **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`_DOMEventTarget`](../interfaces/internal_._DOMEventTarget.md) |
| `eventName` | `string` |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/internal_.StaticEventEmitterOptions.md) |

#### Returns

`Promise`\<`any`[]\>

#### Inherited from

[Socket](internal_.Socket.md).[once](internal_.Socket.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:211

___

### setMaxListeners

▸ **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | ([`EventEmitter`](../interfaces/internal_.EventEmitter-2.md)\<[`DefaultEventMap`](../modules/internal_.md#defaulteventmap)\> \| [`_DOMEventTarget`](../interfaces/internal_._DOMEventTarget.md))[] | - |

#### Returns

`void`

**`Since`**

v15.4.0

#### Inherited from

[Socket](internal_.Socket.md).[setMaxListeners](internal_.Socket.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:365

___

### toWeb

▸ **toWeb**(`streamDuplex`): `Object`

A utility method for creating a web `ReadableStream` and `WritableStream` from a `Duplex`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamDuplex` | [`Duplex`](internal_.Duplex.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `readable` | [`ReadableStream`](../interfaces/internal_.ReadableStream.md)\<`any`\> |
| `writable` | [`WritableStream`](../interfaces/internal_.WritableStream-1.md)\<`any`\> |

**`Since`**

v17.0.0

#### Inherited from

[Socket](internal_.Socket.md).[toWeb](internal_.Socket.md#toweb)

#### Defined in

node_modules/@types/node/stream.d.ts:1126
