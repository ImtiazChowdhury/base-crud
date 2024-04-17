[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / KeyObject

# Class: KeyObject

[\<internal\>](../modules/internal_.md).KeyObject

Node.js uses a `KeyObject` class to represent a symmetric or asymmetric key,
and each kind of key exposes different functions. The createSecretKey, createPublicKey and createPrivateKey methods are used to create `KeyObject`instances. `KeyObject`
objects are not to be created directly using the `new`keyword.

Most applications should consider using the new `KeyObject` API instead of
passing keys as strings or `Buffer`s due to improved security features.

`KeyObject` instances can be passed to other threads via `postMessage()`.
The receiver obtains a cloned `KeyObject`, and the `KeyObject` does not need to
be listed in the `transferList` argument.

**`Since`**

v11.6.0

## Table of contents

### Constructors

- [constructor](internal_.KeyObject.md#constructor)

### Properties

- [asymmetricKeyDetails](internal_.KeyObject.md#asymmetrickeydetails)
- [asymmetricKeySize](internal_.KeyObject.md#asymmetrickeysize)
- [asymmetricKeyType](internal_.KeyObject.md#asymmetrickeytype)
- [symmetricKeySize](internal_.KeyObject.md#symmetrickeysize)
- [type](internal_.KeyObject.md#type)

### Methods

- [equals](internal_.KeyObject.md#equals)
- [export](internal_.KeyObject.md#export)
- [from](internal_.KeyObject.md#from)

## Constructors

### constructor

• **new KeyObject**(): [`KeyObject`](internal_.KeyObject.md)

#### Returns

[`KeyObject`](internal_.KeyObject.md)

#### Defined in

node_modules/@types/node/crypto.d.ts:571

## Properties

### asymmetricKeyDetails

• `Optional` **asymmetricKeyDetails**: [`AsymmetricKeyDetails`](../interfaces/internal_.AsymmetricKeyDetails.md)

This property exists only on asymmetric keys. Depending on the type of the key,
this object contains information about the key. None of the information obtained
through this property can be used to uniquely identify a key or to compromise
the security of the key.

For RSA-PSS keys, if the key material contains a `RSASSA-PSS-params` sequence,
the `hashAlgorithm`, `mgf1HashAlgorithm`, and `saltLength` properties will be
set.

Other key details might be exposed via this API using additional attributes.

**`Since`**

v15.7.0

#### Defined in

node_modules/@types/node/crypto.d.ts:629

___

### asymmetricKeySize

• `Optional` **asymmetricKeySize**: `number`

For asymmetric keys, this property represents the size of the embedded key in
bytes. This property is `undefined` for symmetric keys.

#### Defined in

node_modules/@types/node/crypto.d.ts:615

___

### asymmetricKeyType

• `Optional` **asymmetricKeyType**: [`KeyType`](../modules/internal_.md#keytype)

For asymmetric keys, this property represents the type of the key. Supported key
types are:

* `'rsa'` (OID 1.2.840.113549.1.1.1)
* `'rsa-pss'` (OID 1.2.840.113549.1.1.10)
* `'dsa'` (OID 1.2.840.10040.4.1)
* `'ec'` (OID 1.2.840.10045.2.1)
* `'x25519'` (OID 1.3.101.110)
* `'x448'` (OID 1.3.101.111)
* `'ed25519'` (OID 1.3.101.112)
* `'ed448'` (OID 1.3.101.113)
* `'dh'` (OID 1.2.840.113549.1.3.1)

This property is `undefined` for unrecognized `KeyObject` types and symmetric
keys.

**`Since`**

v11.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:610

___

### symmetricKeySize

• `Optional` **symmetricKeySize**: `number`

For secret keys, this property represents the size of the key in bytes. This
property is `undefined` for asymmetric keys.

**`Since`**

v11.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:668

___

### type

• **type**: [`KeyObjectType`](../modules/internal_.md#keyobjecttype)

Depending on the type of this `KeyObject`, this property is either`'secret'` for secret (symmetric) keys, `'public'` for public (asymmetric) keys
or `'private'` for private (asymmetric) keys.

**`Since`**

v11.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:674

## Methods

### equals

▸ **equals**(`otherKeyObject`): `boolean`

Returns `true` or `false` depending on whether the keys have exactly the same
type, value, and parameters. This method is not [constant time](https://en.wikipedia.org/wiki/Timing_attack).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherKeyObject` | [`KeyObject`](internal_.KeyObject.md) | A `KeyObject` with which to compare `keyObject`. |

#### Returns

`boolean`

**`Since`**

v17.7.0, v16.15.0

#### Defined in

node_modules/@types/node/crypto.d.ts:662

___

### export

▸ **export**(`options`): `string` \| [`Buffer`](../interfaces/internal_.Buffer.md)

For symmetric keys, the following encoding options can be used:

For public keys, the following encoding options can be used:

For private keys, the following encoding options can be used:

The result type depends on the selected encoding format, when PEM the
result is a string, when DER it will be a buffer containing the data
encoded as DER, when [JWK](https://tools.ietf.org/html/rfc7517) it will be an object.

When [JWK](https://tools.ietf.org/html/rfc7517) encoding format was selected, all other encoding options are
ignored.

PKCS#1, SEC1, and PKCS#8 type keys can be encrypted by using a combination of
the `cipher` and `format` options. The PKCS#8 `type` can be used with any`format` to encrypt any key algorithm (RSA, EC, or DH) by specifying a`cipher`. PKCS#1 and SEC1 can only be
encrypted by specifying a `cipher`when the PEM `format` is used. For maximum compatibility, use PKCS#8 for
encrypted private keys. Since PKCS#8 defines its own
encryption mechanism, PEM-level encryption is not supported when encrypting
a PKCS#8 key. See [RFC 5208](https://www.rfc-editor.org/rfc/rfc5208.txt) for PKCS#8 encryption and [RFC 1421](https://www.rfc-editor.org/rfc/rfc1421.txt) for
PKCS#1 and SEC1 encryption.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`KeyExportOptions`](../interfaces/internal_.KeyExportOptions.md)\<``"pem"``\> |

#### Returns

`string` \| [`Buffer`](../interfaces/internal_.Buffer.md)

**`Since`**

v11.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:653

▸ **export**(`options?`): [`Buffer`](../interfaces/internal_.Buffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`KeyExportOptions`](../interfaces/internal_.KeyExportOptions.md)\<``"der"``\> |

#### Returns

[`Buffer`](../interfaces/internal_.Buffer.md)

#### Defined in

node_modules/@types/node/crypto.d.ts:654

▸ **export**(`options?`): [`JsonWebKey`](../interfaces/internal_.JsonWebKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`JwkKeyExportOptions`](../interfaces/internal_.JwkKeyExportOptions.md) |

#### Returns

[`JsonWebKey`](../interfaces/internal_.JsonWebKey.md)

#### Defined in

node_modules/@types/node/crypto.d.ts:655

___

### from

▸ **from**(`key`): [`KeyObject`](internal_.KeyObject.md)

Example: Converting a `CryptoKey` instance to a `KeyObject`:

```js
const { KeyObject } = await import('node:crypto');
const { subtle } = globalThis.crypto;

const key = await subtle.generateKey({
  name: 'HMAC',
  hash: 'SHA-256',
  length: 256,
}, true, ['sign', 'verify']);

const keyObject = KeyObject.from(key);
console.log(keyObject.symmetricKeySize);
// Prints: 32 (symmetric key size in bytes)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`CryptoKey`](../interfaces/internal_.CryptoKey.md) |

#### Returns

[`KeyObject`](internal_.KeyObject.md)

**`Since`**

v15.0.0

#### Defined in

node_modules/@types/node/crypto.d.ts:591
