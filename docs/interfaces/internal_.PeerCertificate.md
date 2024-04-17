[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / PeerCertificate

# Interface: PeerCertificate

[\<internal\>](../modules/internal_.md).PeerCertificate

## Hierarchy

- **`PeerCertificate`**

  ↳ [`DetailedPeerCertificate`](internal_.DetailedPeerCertificate.md)

## Table of contents

### Properties

- [asn1Curve](internal_.PeerCertificate.md#asn1curve)
- [bits](internal_.PeerCertificate.md#bits)
- [ca](internal_.PeerCertificate.md#ca)
- [exponent](internal_.PeerCertificate.md#exponent)
- [ext\_key\_usage](internal_.PeerCertificate.md#ext_key_usage)
- [fingerprint](internal_.PeerCertificate.md#fingerprint)
- [fingerprint256](internal_.PeerCertificate.md#fingerprint256)
- [fingerprint512](internal_.PeerCertificate.md#fingerprint512)
- [infoAccess](internal_.PeerCertificate.md#infoaccess)
- [issuer](internal_.PeerCertificate.md#issuer)
- [modulus](internal_.PeerCertificate.md#modulus)
- [nistCurve](internal_.PeerCertificate.md#nistcurve)
- [pubkey](internal_.PeerCertificate.md#pubkey)
- [raw](internal_.PeerCertificate.md#raw)
- [serialNumber](internal_.PeerCertificate.md#serialnumber)
- [subject](internal_.PeerCertificate.md#subject)
- [subjectaltname](internal_.PeerCertificate.md#subjectaltname)
- [valid\_from](internal_.PeerCertificate.md#valid_from)
- [valid\_to](internal_.PeerCertificate.md#valid_to)

## Properties

### asn1Curve

• `Optional` **asn1Curve**: `string`

The ASN.1 name of the OID of the elliptic curve.
Well-known curves are identified by an OID.
While it is unusual, it is possible that the curve
is identified by its mathematical properties,
in which case it will not have an OID.

#### Defined in

node_modules/@types/node/tls.d.ts:126

___

### bits

• `Optional` **bits**: `number`

For RSA keys: The RSA bit size.

For EC keys: The key size in bits.

#### Defined in

node_modules/@types/node/tls.d.ts:106

___

### ca

• **ca**: `boolean`

`true` if a Certificate Authority (CA), `false` otherwise.

**`Since`**

v18.13.0

#### Defined in

node_modules/@types/node/tls.d.ts:48

___

### exponent

• `Optional` **exponent**: `string`

The RSA exponent, as a string in hexadecimal number notation.

#### Defined in

node_modules/@types/node/tls.d.ts:110

___

### ext\_key\_usage

• `Optional` **ext\_key\_usage**: `string`[]

The extended key usage, a set of OIDs.

#### Defined in

node_modules/@types/node/tls.d.ts:91

___

### fingerprint

• **fingerprint**: `string`

The SHA-1 digest of the DER encoded certificate.
It is returned as a `:` separated hexadecimal string.

#### Defined in

node_modules/@types/node/tls.d.ts:77

___

### fingerprint256

• **fingerprint256**: `string`

The SHA-256 digest of the DER encoded certificate.
It is returned as a `:` separated hexadecimal string.

#### Defined in

node_modules/@types/node/tls.d.ts:82

___

### fingerprint512

• **fingerprint512**: `string`

The SHA-512 digest of the DER encoded certificate.
It is returned as a `:` separated hexadecimal string.

#### Defined in

node_modules/@types/node/tls.d.ts:87

___

### infoAccess

• `Optional` **infoAccess**: [`Dict`](internal_.Dict.md)\<`string`[]\>

An array describing the AuthorityInfoAccess, used with OCSP.

#### Defined in

node_modules/@types/node/tls.d.ts:100

___

### issuer

• **issuer**: [`Certificate`](internal_.Certificate.md)

The certificate issuer, described in the same terms as the `subject`.

#### Defined in

node_modules/@types/node/tls.d.ts:60

___

### modulus

• `Optional` **modulus**: `string`

The RSA modulus, as a hexadecimal string.

#### Defined in

node_modules/@types/node/tls.d.ts:114

___

### nistCurve

• `Optional` **nistCurve**: `string`

The NIST name for the elliptic curve,if it has one
(not all well-known curves have been assigned names by NIST).

#### Defined in

node_modules/@types/node/tls.d.ts:131

___

### pubkey

• `Optional` **pubkey**: [`Buffer`](internal_.Buffer.md)

The public key.

#### Defined in

node_modules/@types/node/tls.d.ts:118

___

### raw

• **raw**: [`Buffer`](internal_.Buffer.md)

The DER encoded X.509 certificate data.

#### Defined in

node_modules/@types/node/tls.d.ts:52

___

### serialNumber

• **serialNumber**: `string`

The certificate serial number, as a hex string.

#### Defined in

node_modules/@types/node/tls.d.ts:72

___

### subject

• **subject**: [`Certificate`](internal_.Certificate.md)

The certificate subject.

#### Defined in

node_modules/@types/node/tls.d.ts:56

___

### subjectaltname

• `Optional` **subjectaltname**: `string`

A string containing concatenated names for the subject,
an alternative to the `subject` names.

#### Defined in

node_modules/@types/node/tls.d.ts:96

___

### valid\_from

• **valid\_from**: `string`

The date-time the certificate is valid from.

#### Defined in

node_modules/@types/node/tls.d.ts:64

___

### valid\_to

• **valid\_to**: `string`

The date-time the certificate is valid to.

#### Defined in

node_modules/@types/node/tls.d.ts:68
