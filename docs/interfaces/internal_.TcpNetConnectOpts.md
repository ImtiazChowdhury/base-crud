[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / TcpNetConnectOpts

# Interface: TcpNetConnectOpts

[\<internal\>](../modules/internal_.md).TcpNetConnectOpts

## Hierarchy

- [`TcpSocketConnectOpts`](internal_.TcpSocketConnectOpts.md)

- [`SocketConstructorOpts`](internal_.SocketConstructorOpts.md)

  ↳ **`TcpNetConnectOpts`**

## Table of contents

### Properties

- [allowHalfOpen](internal_.TcpNetConnectOpts.md#allowhalfopen)
- [autoSelectFamily](internal_.TcpNetConnectOpts.md#autoselectfamily)
- [autoSelectFamilyAttemptTimeout](internal_.TcpNetConnectOpts.md#autoselectfamilyattempttimeout)
- [family](internal_.TcpNetConnectOpts.md#family)
- [fd](internal_.TcpNetConnectOpts.md#fd)
- [hints](internal_.TcpNetConnectOpts.md#hints)
- [host](internal_.TcpNetConnectOpts.md#host)
- [keepAlive](internal_.TcpNetConnectOpts.md#keepalive)
- [keepAliveInitialDelay](internal_.TcpNetConnectOpts.md#keepaliveinitialdelay)
- [localAddress](internal_.TcpNetConnectOpts.md#localaddress)
- [localPort](internal_.TcpNetConnectOpts.md#localport)
- [lookup](internal_.TcpNetConnectOpts.md#lookup)
- [noDelay](internal_.TcpNetConnectOpts.md#nodelay)
- [onread](internal_.TcpNetConnectOpts.md#onread)
- [port](internal_.TcpNetConnectOpts.md#port)
- [readable](internal_.TcpNetConnectOpts.md#readable)
- [signal](internal_.TcpNetConnectOpts.md#signal)
- [timeout](internal_.TcpNetConnectOpts.md#timeout)
- [writable](internal_.TcpNetConnectOpts.md#writable)

## Properties

### allowHalfOpen

• `Optional` **allowHalfOpen**: `boolean`

#### Inherited from

[SocketConstructorOpts](internal_.SocketConstructorOpts.md).[allowHalfOpen](internal_.SocketConstructorOpts.md#allowhalfopen)

#### Defined in

node_modules/@types/node/net.d.ts:31

___

### autoSelectFamily

• `Optional` **autoSelectFamily**: `boolean`

**`Since`**

v18.13.0

#### Inherited from

[TcpSocketConnectOpts](internal_.TcpSocketConnectOpts.md).[autoSelectFamily](internal_.TcpSocketConnectOpts.md#autoselectfamily)

#### Defined in

node_modules/@types/node/net.d.ts:67

___

### autoSelectFamilyAttemptTimeout

• `Optional` **autoSelectFamilyAttemptTimeout**: `number`

**`Since`**

v18.13.0

#### Inherited from

[TcpSocketConnectOpts](internal_.TcpSocketConnectOpts.md).[autoSelectFamilyAttemptTimeout](internal_.TcpSocketConnectOpts.md#autoselectfamilyattempttimeout)

#### Defined in

node_modules/@types/node/net.d.ts:71

___

### family

• `Optional` **family**: `number`

#### Inherited from

[TcpSocketConnectOpts](internal_.TcpSocketConnectOpts.md).[family](internal_.TcpSocketConnectOpts.md#family)

#### Defined in

node_modules/@types/node/net.d.ts:59

___

### fd

• `Optional` **fd**: `number`

#### Inherited from

[SocketConstructorOpts](internal_.SocketConstructorOpts.md).[fd](internal_.SocketConstructorOpts.md#fd)

#### Defined in

node_modules/@types/node/net.d.ts:30

___

### hints

• `Optional` **hints**: `number`

#### Inherited from

[TcpSocketConnectOpts](internal_.TcpSocketConnectOpts.md).[hints](internal_.TcpSocketConnectOpts.md#hints)

#### Defined in

node_modules/@types/node/net.d.ts:58

___

### host

• `Optional` **host**: `string`

#### Inherited from

[TcpSocketConnectOpts](internal_.TcpSocketConnectOpts.md).[host](internal_.TcpSocketConnectOpts.md#host)

#### Defined in

node_modules/@types/node/net.d.ts:55

___

### keepAlive

• `Optional` **keepAlive**: `boolean`

#### Inherited from

[TcpSocketConnectOpts](internal_.TcpSocketConnectOpts.md).[keepAlive](internal_.TcpSocketConnectOpts.md#keepalive)

#### Defined in

node_modules/@types/node/net.d.ts:62

___

### keepAliveInitialDelay

• `Optional` **keepAliveInitialDelay**: `number`

#### Inherited from

[TcpSocketConnectOpts](internal_.TcpSocketConnectOpts.md).[keepAliveInitialDelay](internal_.TcpSocketConnectOpts.md#keepaliveinitialdelay)

#### Defined in

node_modules/@types/node/net.d.ts:63

___

### localAddress

• `Optional` **localAddress**: `string`

#### Inherited from

[TcpSocketConnectOpts](internal_.TcpSocketConnectOpts.md).[localAddress](internal_.TcpSocketConnectOpts.md#localaddress)

#### Defined in

node_modules/@types/node/net.d.ts:56

___

### localPort

• `Optional` **localPort**: `number`

#### Inherited from

[TcpSocketConnectOpts](internal_.TcpSocketConnectOpts.md).[localPort](internal_.TcpSocketConnectOpts.md#localport)

#### Defined in

node_modules/@types/node/net.d.ts:57

___

### lookup

• `Optional` **lookup**: [`LookupFunction`](../modules/internal_.md#lookupfunction)

#### Inherited from

[TcpSocketConnectOpts](internal_.TcpSocketConnectOpts.md).[lookup](internal_.TcpSocketConnectOpts.md#lookup)

#### Defined in

node_modules/@types/node/net.d.ts:60

___

### noDelay

• `Optional` **noDelay**: `boolean`

#### Inherited from

[TcpSocketConnectOpts](internal_.TcpSocketConnectOpts.md).[noDelay](internal_.TcpSocketConnectOpts.md#nodelay)

#### Defined in

node_modules/@types/node/net.d.ts:61

___

### onread

• `Optional` **onread**: [`OnReadOpts`](internal_.OnReadOpts.md)

If specified, incoming data is stored in a single buffer and passed to the supplied callback when data arrives on the socket.
Note: this will cause the streaming functionality to not provide any data, however events like 'error', 'end', and 'close' will
still be emitted as normal and methods like pause() and resume() will also behave as expected.

#### Inherited from

[TcpSocketConnectOpts](internal_.TcpSocketConnectOpts.md).[onread](internal_.TcpSocketConnectOpts.md#onread)

#### Defined in

node_modules/@types/node/net.d.ts:51

___

### port

• **port**: `number`

#### Inherited from

[TcpSocketConnectOpts](internal_.TcpSocketConnectOpts.md).[port](internal_.TcpSocketConnectOpts.md#port)

#### Defined in

node_modules/@types/node/net.d.ts:54

___

### readable

• `Optional` **readable**: `boolean`

#### Inherited from

[SocketConstructorOpts](internal_.SocketConstructorOpts.md).[readable](internal_.SocketConstructorOpts.md#readable)

#### Defined in

node_modules/@types/node/net.d.ts:32

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Inherited from

[SocketConstructorOpts](internal_.SocketConstructorOpts.md).[signal](internal_.SocketConstructorOpts.md#signal)

#### Defined in

node_modules/@types/node/net.d.ts:34

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

node_modules/@types/node/net.d.ts:746

___

### writable

• `Optional` **writable**: `boolean`

#### Inherited from

[SocketConstructorOpts](internal_.SocketConstructorOpts.md).[writable](internal_.SocketConstructorOpts.md#writable)

#### Defined in

node_modules/@types/node/net.d.ts:33
