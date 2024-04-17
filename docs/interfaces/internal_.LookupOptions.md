[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / LookupOptions

# Interface: LookupOptions

[\<internal\>](../modules/internal_.md).LookupOptions

## Table of contents

### Properties

- [all](internal_.LookupOptions.md#all)
- [family](internal_.LookupOptions.md#family)
- [hints](internal_.LookupOptions.md#hints)
- [verbatim](internal_.LookupOptions.md#verbatim)

## Properties

### all

• `Optional` **all**: `boolean`

When `true`, the callback returns all resolved addresses in an array. Otherwise, returns a single address.

**`Default`**

```ts
false
```

#### Defined in

node_modules/@types/node/dns.d.ts:82

___

### family

• `Optional` **family**: `number` \| ``"IPv4"`` \| ``"IPv6"``

The record family. Must be `4`, `6`, or `0`. For backward compatibility reasons,`'IPv4'` and `'IPv6'` are interpreted
as `4` and `6` respectively. The value 0 indicates that either an IPv4 or IPv6 address is returned. If the value `0` is used
with `{ all: true } (see below)`, both IPv4 and IPv6 addresses are returned.

**`Default`**

```ts
0
```

#### Defined in

node_modules/@types/node/dns.d.ts:72

___

### hints

• `Optional` **hints**: `number`

One or more [supported `getaddrinfo`](https://nodejs.org/docs/latest-v20.x/api/dns.html#supported-getaddrinfo-flags) flags. Multiple flags may be
passed by bitwise `OR`ing their values.

#### Defined in

node_modules/@types/node/dns.d.ts:77

___

### verbatim

• `Optional` **verbatim**: `boolean`

When `true`, the callback receives IPv4 and IPv6 addresses in the order the DNS resolver returned them. When `false`, IPv4
addresses are placed before IPv6 addresses. Default value is configurable using setDefaultResultOrder()
or [`--dns-result-order`](https://nodejs.org/docs/latest-v20.x/api/cli.html#--dns-result-orderorder).

**`Default`**

```ts
true (addresses are not reordered)
```

#### Defined in

node_modules/@types/node/dns.d.ts:89
