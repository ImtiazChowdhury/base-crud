[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / TcpSocketConnectOpts

# Interface: TcpSocketConnectOpts

[\<internal\>](../modules/internal_.md).TcpSocketConnectOpts

## Hierarchy

- [`ConnectOpts`](internal_.ConnectOpts.md)

  ↳ **`TcpSocketConnectOpts`**

  ↳↳ [`TcpNetConnectOpts`](internal_.TcpNetConnectOpts.md)

## Table of contents

### Properties

- [autoSelectFamily](internal_.TcpSocketConnectOpts.md#autoselectfamily)
- [autoSelectFamilyAttemptTimeout](internal_.TcpSocketConnectOpts.md#autoselectfamilyattempttimeout)
- [family](internal_.TcpSocketConnectOpts.md#family)
- [hints](internal_.TcpSocketConnectOpts.md#hints)
- [host](internal_.TcpSocketConnectOpts.md#host)
- [keepAlive](internal_.TcpSocketConnectOpts.md#keepalive)
- [keepAliveInitialDelay](internal_.TcpSocketConnectOpts.md#keepaliveinitialdelay)
- [localAddress](internal_.TcpSocketConnectOpts.md#localaddress)
- [localPort](internal_.TcpSocketConnectOpts.md#localport)
- [lookup](internal_.TcpSocketConnectOpts.md#lookup)
- [noDelay](internal_.TcpSocketConnectOpts.md#nodelay)
- [onread](internal_.TcpSocketConnectOpts.md#onread)
- [port](internal_.TcpSocketConnectOpts.md#port)

## Properties

### autoSelectFamily

• `Optional` **autoSelectFamily**: `boolean`

**`Since`**

v18.13.0

#### Defined in

node_modules/@types/node/net.d.ts:67

___

### autoSelectFamilyAttemptTimeout

• `Optional` **autoSelectFamilyAttemptTimeout**: `number`

**`Since`**

v18.13.0

#### Defined in

node_modules/@types/node/net.d.ts:71

___

### family

• `Optional` **family**: `number`

#### Defined in

node_modules/@types/node/net.d.ts:59

___

### hints

• `Optional` **hints**: `number`

#### Defined in

node_modules/@types/node/net.d.ts:58

___

### host

• `Optional` **host**: `string`

#### Defined in

node_modules/@types/node/net.d.ts:55

___

### keepAlive

• `Optional` **keepAlive**: `boolean`

#### Defined in

node_modules/@types/node/net.d.ts:62

___

### keepAliveInitialDelay

• `Optional` **keepAliveInitialDelay**: `number`

#### Defined in

node_modules/@types/node/net.d.ts:63

___

### localAddress

• `Optional` **localAddress**: `string`

#### Defined in

node_modules/@types/node/net.d.ts:56

___

### localPort

• `Optional` **localPort**: `number`

#### Defined in

node_modules/@types/node/net.d.ts:57

___

### lookup

• `Optional` **lookup**: [`LookupFunction`](../modules/internal_.md#lookupfunction)

#### Defined in

node_modules/@types/node/net.d.ts:60

___

### noDelay

• `Optional` **noDelay**: `boolean`

#### Defined in

node_modules/@types/node/net.d.ts:61

___

### onread

• `Optional` **onread**: [`OnReadOpts`](internal_.OnReadOpts.md)

If specified, incoming data is stored in a single buffer and passed to the supplied callback when data arrives on the socket.
Note: this will cause the streaming functionality to not provide any data, however events like 'error', 'end', and 'close' will
still be emitted as normal and methods like pause() and resume() will also behave as expected.

#### Inherited from

[ConnectOpts](internal_.ConnectOpts.md).[onread](internal_.ConnectOpts.md#onread)

#### Defined in

node_modules/@types/node/net.d.ts:51

___

### port

• **port**: `number`

#### Defined in

node_modules/@types/node/net.d.ts:54
