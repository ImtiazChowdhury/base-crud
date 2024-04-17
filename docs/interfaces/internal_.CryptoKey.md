[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / CryptoKey

# Interface: CryptoKey

[\<internal\>](../modules/internal_.md).CryptoKey

**`Since`**

v15.0.0

## Table of contents

### Properties

- [algorithm](internal_.CryptoKey.md#algorithm)
- [extractable](internal_.CryptoKey.md#extractable)
- [type](internal_.CryptoKey.md#type)
- [usages](internal_.CryptoKey.md#usages)

## Properties

### algorithm

• `Readonly` **algorithm**: [`KeyAlgorithm`](internal_.KeyAlgorithm.md)

An object detailing the algorithm for which the key can be used along with additional algorithm-specific parameters.

**`Since`**

v15.0.0

#### Defined in

node_modules/@types/node/crypto.d.ts:4117

___

### extractable

• `Readonly` **extractable**: `boolean`

When `true`, the [CryptoKey](internal_.CryptoKey.md) can be extracted using either `subtleCrypto.exportKey()` or `subtleCrypto.wrapKey()`.

**`Since`**

v15.0.0

#### Defined in

node_modules/@types/node/crypto.d.ts:4122

___

### type

• `Readonly` **type**: [`KeyType`](../modules/internal_.md#keytype-1)

A string identifying whether the key is a symmetric (`'secret'`) or asymmetric (`'private'` or `'public'`) key.

**`Since`**

v15.0.0

#### Defined in

node_modules/@types/node/crypto.d.ts:4127

___

### usages

• `Readonly` **usages**: [`KeyUsage`](../modules/internal_.md#keyusage)[]

An array of strings identifying the operations for which the key may be used.

The possible usages are:
- `'encrypt'` - The key may be used to encrypt data.
- `'decrypt'` - The key may be used to decrypt data.
- `'sign'` - The key may be used to generate digital signatures.
- `'verify'` - The key may be used to verify digital signatures.
- `'deriveKey'` - The key may be used to derive a new key.
- `'deriveBits'` - The key may be used to derive bits.
- `'wrapKey'` - The key may be used to wrap another key.
- `'unwrapKey'` - The key may be used to unwrap another key.

Valid key usages depend on the key algorithm (identified by `cryptokey.algorithm.name`).

**`Since`**

v15.0.0

#### Defined in

node_modules/@types/node/crypto.d.ts:4144
