[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / LookupAddress

# Interface: LookupAddress

[\<internal\>](../modules/internal_.md).LookupAddress

## Table of contents

### Properties

- [address](internal_.LookupAddress.md#address)
- [family](internal_.LookupAddress.md#family)

## Properties

### address

• **address**: `string`

A string representation of an IPv4 or IPv6 address.

#### Defined in

node_modules/@types/node/dns.d.ts:101

___

### family

• **family**: `number`

`4` or `6`, denoting the family of `address`, or `0` if the address is not an IPv4 or IPv6 address. `0` is a likely indicator of a
bug in the name resolution service used by the operating system.

#### Defined in

node_modules/@types/node/dns.d.ts:106
