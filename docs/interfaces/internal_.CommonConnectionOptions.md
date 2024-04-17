[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / CommonConnectionOptions

# Interface: CommonConnectionOptions

[\<internal\>](../modules/internal_.md).CommonConnectionOptions

## Hierarchy

- **`CommonConnectionOptions`**

  ↳ [`ConnectionOptions`](internal_.ConnectionOptions.md)

  ↳ [`TLSSocketOptions`](internal_.TLSSocketOptions.md)

## Table of contents

### Properties

- [ALPNProtocols](internal_.CommonConnectionOptions.md#alpnprotocols)
- [SNICallback](internal_.CommonConnectionOptions.md#snicallback)
- [enableTrace](internal_.CommonConnectionOptions.md#enabletrace)
- [rejectUnauthorized](internal_.CommonConnectionOptions.md#rejectunauthorized)
- [requestCert](internal_.CommonConnectionOptions.md#requestcert)
- [secureContext](internal_.CommonConnectionOptions.md#securecontext)

## Properties

### ALPNProtocols

• `Optional` **ALPNProtocols**: `string`[] \| `Uint8Array` \| `Uint8Array`[]

An array of strings or a Buffer naming possible ALPN protocols.
(Protocols should be ordered by their priority.)

#### Defined in

node_modules/@types/node/tls.d.ts:526

___

### SNICallback

• `Optional` **SNICallback**: (`servername`: `string`, `cb`: (`err`: ``null`` \| [`Error`](internal_.Error.md), `ctx?`: [`SecureContext`](internal_.SecureContext.md)) => `void`) => `void`

SNICallback(servername, cb) <Function> A function that will be
called if the client supports SNI TLS extension. Two arguments
will be passed when called: servername and cb. SNICallback should
invoke cb(null, ctx), where ctx is a SecureContext instance.
(tls.createSecureContext(...) can be used to get a proper
SecureContext.) If SNICallback wasn't provided the default callback
with high-level API will be used (see below).

#### Type declaration

▸ (`servername`, `cb`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `servername` | `string` |
| `cb` | (`err`: ``null`` \| [`Error`](internal_.Error.md), `ctx?`: [`SecureContext`](internal_.SecureContext.md)) => `void` |

##### Returns

`void`

#### Defined in

node_modules/@types/node/tls.d.ts:536

___

### enableTrace

• `Optional` **enableTrace**: `boolean`

When enabled, TLS packet trace information is written to `stderr`. This can be
used to debug TLS connection problems.

**`Default`**

```ts
false
```

#### Defined in

node_modules/@types/node/tls.d.ts:515

___

### rejectUnauthorized

• `Optional` **rejectUnauthorized**: `boolean`

If true the server will reject any connection which is not
authorized with the list of supplied CAs. This option only has an
effect if requestCert is true.

**`Default`**

```ts
true
```

#### Defined in

node_modules/@types/node/tls.d.ts:543

___

### requestCert

• `Optional` **requestCert**: `boolean`

If true the server will request a certificate from clients that
connect and attempt to verify that certificate. Defaults to
false.

#### Defined in

node_modules/@types/node/tls.d.ts:521

___

### secureContext

• `Optional` **secureContext**: [`SecureContext`](internal_.SecureContext.md)

An optional TLS context object from tls.createSecureContext()

#### Defined in

node_modules/@types/node/tls.d.ts:509
