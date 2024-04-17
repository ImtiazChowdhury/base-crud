[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / X509Certificate

# Class: X509Certificate

[\<internal\>](../modules/internal_.md).X509Certificate

Encapsulates an X509 certificate and provides read-only access to
its information.

```js
const { X509Certificate } = await import('node:crypto');

const x509 = new X509Certificate('{... pem encoded cert ...}');

console.log(x509.subject);
```

**`Since`**

v15.6.0

## Table of contents

### Constructors

- [constructor](internal_.X509Certificate.md#constructor)

### Properties

- [ca](internal_.X509Certificate.md#ca)
- [fingerprint](internal_.X509Certificate.md#fingerprint)
- [fingerprint256](internal_.X509Certificate.md#fingerprint256)
- [fingerprint512](internal_.X509Certificate.md#fingerprint512)
- [infoAccess](internal_.X509Certificate.md#infoaccess)
- [issuer](internal_.X509Certificate.md#issuer)
- [issuerCertificate](internal_.X509Certificate.md#issuercertificate)
- [keyUsage](internal_.X509Certificate.md#keyusage)
- [publicKey](internal_.X509Certificate.md#publickey)
- [raw](internal_.X509Certificate.md#raw)
- [serialNumber](internal_.X509Certificate.md#serialnumber)
- [subject](internal_.X509Certificate.md#subject)
- [subjectAltName](internal_.X509Certificate.md#subjectaltname)
- [validFrom](internal_.X509Certificate.md#validfrom)
- [validTo](internal_.X509Certificate.md#validto)

### Methods

- [checkEmail](internal_.X509Certificate.md#checkemail)
- [checkHost](internal_.X509Certificate.md#checkhost)
- [checkIP](internal_.X509Certificate.md#checkip)
- [checkIssued](internal_.X509Certificate.md#checkissued)
- [checkPrivateKey](internal_.X509Certificate.md#checkprivatekey)
- [toJSON](internal_.X509Certificate.md#tojson)
- [toLegacyObject](internal_.X509Certificate.md#tolegacyobject)
- [toString](internal_.X509Certificate.md#tostring)
- [verify](internal_.X509Certificate.md#verify)

## Constructors

### constructor

• **new X509Certificate**(`buffer`): [`X509Certificate`](internal_.X509Certificate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BinaryLike`](../modules/internal_.md#binarylike) |

#### Returns

[`X509Certificate`](internal_.X509Certificate.md)

#### Defined in

node_modules/@types/node/crypto.d.ts:3692

## Properties

### ca

• `Readonly` **ca**: `boolean`

Will be `true` if this is a Certificate Authority (CA) certificate.

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3580

___

### fingerprint

• `Readonly` **fingerprint**: `string`

The SHA-1 fingerprint of this certificate.

Because SHA-1 is cryptographically broken and because the security of SHA-1 is
significantly worse than that of algorithms that are commonly used to sign
certificates, consider using `x509.fingerprint256` instead.

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3589

___

### fingerprint256

• `Readonly` **fingerprint256**: `string`

The SHA-256 fingerprint of this certificate.

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3594

___

### fingerprint512

• `Readonly` **fingerprint512**: `string`

The SHA-512 fingerprint of this certificate.

Because computing the SHA-256 fingerprint is usually faster and because it is
only half the size of the SHA-512 fingerprint, `x509.fingerprint256` may be
a better choice. While SHA-512 presumably provides a higher level of security in
general, the security of SHA-256 matches that of most algorithms that are
commonly used to sign certificates.

**`Since`**

v17.2.0, v16.14.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3605

___

### infoAccess

• `Readonly` **infoAccess**: `undefined` \| `string`

A textual representation of the certificate's authority information access
extension.

This is a line feed separated list of access descriptions. Each line begins with
the access method and the kind of the access location, followed by a colon and
the value associated with the access location.

After the prefix denoting the access method and the kind of the access location,
the remainder of each line might be enclosed in quotes to indicate that the
value is a JSON string literal. For backward compatibility, Node.js only uses
JSON string literals within this property when necessary to avoid ambiguity.
Third-party code should be prepared to handle both possible entry formats.

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3646

___

### issuer

• `Readonly` **issuer**: `string`

The issuer identification included in this certificate.

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3656

___

### issuerCertificate

• `Optional` `Readonly` **issuerCertificate**: [`X509Certificate`](internal_.X509Certificate.md)

The issuer certificate or `undefined` if the issuer certificate is not
available.

**`Since`**

v15.9.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3662

___

### keyUsage

• `Readonly` **keyUsage**: `string`[]

An array detailing the key usages for this certificate.

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3651

___

### publicKey

• `Readonly` **publicKey**: [`KeyObject`](internal_.KeyObject.md)

The public key `KeyObject` for this certificate.

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3667

___

### raw

• `Readonly` **raw**: [`Buffer`](../interfaces/internal_.Buffer.md)

A `Buffer` containing the DER encoding of this certificate.

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3672

___

### serialNumber

• `Readonly` **serialNumber**: `string`

The serial number of this certificate.

Serial numbers are assigned by certificate authorities and do not uniquely
identify certificates. Consider using `x509.fingerprint256` as a unique
identifier instead.

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3681

___

### subject

• `Readonly` **subject**: `string`

The complete subject of this certificate.

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3610

___

### subjectAltName

• `Readonly` **subjectAltName**: `undefined` \| `string`

The subject alternative name specified for this certificate.

This is a comma-separated list of subject alternative names. Each entry begins
with a string identifying the kind of the subject alternative name followed by
a colon and the value associated with the entry.

Earlier versions of Node.js incorrectly assumed that it is safe to split this
property at the two-character sequence `', '` (see [CVE-2021-44532](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44532)). However,
both malicious and legitimate certificates can contain subject alternative names
that include this sequence when represented as a string.

After the prefix denoting the type of the entry, the remainder of each entry
might be enclosed in quotes to indicate that the value is a JSON string literal.
For backward compatibility, Node.js only uses JSON string literals within this
property when necessary to avoid ambiguity. Third-party code should be prepared
to handle both possible entry formats.

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3630

___

### validFrom

• `Readonly` **validFrom**: `string`

The date/time from which this certificate is considered valid.

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3686

___

### validTo

• `Readonly` **validTo**: `string`

The date/time until which this certificate is considered valid.

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3691

## Methods

### checkEmail

▸ **checkEmail**(`email`, `options?`): `undefined` \| `string`

Checks whether the certificate matches the given email address.

If the `'subject'` option is undefined or set to `'default'`, the certificate
subject is only considered if the subject alternative name extension either does
not exist or does not contain any email addresses.

If the `'subject'` option is set to `'always'` and if the subject alternative
name extension either does not exist or does not contain a matching email
address, the certificate subject is considered.

If the `'subject'` option is set to `'never'`, the certificate subject is never
considered, even if the certificate contains no subject alternative names.

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | `string` |
| `options?` | [`Pick`](../modules/internal_.md#pick)\<[`X509CheckOptions`](../interfaces/internal_.X509CheckOptions.md), ``"subject"``\> |

#### Returns

`undefined` \| `string`

Returns `email` if the certificate matches, `undefined` if it does not.

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3709

___

### checkHost

▸ **checkHost**(`name`, `options?`): `undefined` \| `string`

Checks whether the certificate matches the given host name.

If the certificate matches the given host name, the matching subject name is
returned. The returned name might be an exact match (e.g., `foo.example.com`)
or it might contain wildcards (e.g., `*.example.com`). Because host name
comparisons are case-insensitive, the returned subject name might also differ
from the given `name` in capitalization.

If the `'subject'` option is undefined or set to `'default'`, the certificate
subject is only considered if the subject alternative name extension either does
not exist or does not contain any DNS names. This behavior is consistent with [RFC 2818](https://www.rfc-editor.org/rfc/rfc2818.txt) ("HTTP Over TLS").

If the `'subject'` option is set to `'always'` and if the subject alternative
name extension either does not exist or does not contain a matching DNS name,
the certificate subject is considered.

If the `'subject'` option is set to `'never'`, the certificate subject is never
considered, even if the certificate contains no subject alternative names.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | [`X509CheckOptions`](../interfaces/internal_.X509CheckOptions.md) |

#### Returns

`undefined` \| `string`

Returns a subject name that matches `name`, or `undefined` if no subject name matches `name`.

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3732

___

### checkIP

▸ **checkIP**(`ip`): `undefined` \| `string`

Checks whether the certificate matches the given IP address (IPv4 or IPv6).

Only [RFC 5280](https://www.rfc-editor.org/rfc/rfc5280.txt) `iPAddress` subject alternative names are considered, and they
must match the given `ip` address exactly. Other subject alternative names as
well as the subject field of the certificate are ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`undefined` \| `string`

Returns `ip` if the certificate matches, `undefined` if it does not.

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3742

___

### checkIssued

▸ **checkIssued**(`otherCert`): `boolean`

Checks whether this certificate was issued by the given `otherCert`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherCert` | [`X509Certificate`](internal_.X509Certificate.md) |

#### Returns

`boolean`

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3747

___

### checkPrivateKey

▸ **checkPrivateKey**(`privateKey`): `boolean`

Checks whether the public key for this certificate is consistent with
the given private key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `privateKey` | [`KeyObject`](internal_.KeyObject.md) | A private key. |

#### Returns

`boolean`

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3754

___

### toJSON

▸ **toJSON**(): `string`

There is no standard JSON encoding for X509 certificates. The`toJSON()` method returns a string containing the PEM encoded
certificate.

#### Returns

`string`

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3760

___

### toLegacyObject

▸ **toLegacyObject**(): [`PeerCertificate`](../interfaces/internal_.PeerCertificate.md)

Returns information about this certificate using the legacy `certificate object` encoding.

#### Returns

[`PeerCertificate`](../interfaces/internal_.PeerCertificate.md)

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3765

___

### toString

▸ **toString**(): `string`

Returns the PEM-encoded certificate.

#### Returns

`string`

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3770

___

### verify

▸ **verify**(`publicKey`): `boolean`

Verifies that this certificate was signed by the given public key.
Does not perform any other validation checks on the certificate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publicKey` | [`KeyObject`](internal_.KeyObject.md) | A public key. |

#### Returns

`boolean`

**`Since`**

v15.6.0

#### Defined in

node_modules/@types/node/crypto.d.ts:3777
