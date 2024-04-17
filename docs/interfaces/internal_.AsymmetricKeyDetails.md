[base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / AsymmetricKeyDetails

# Interface: AsymmetricKeyDetails

[\<internal\>](../modules/internal_.md).AsymmetricKeyDetails

## Table of contents

### Properties

- [divisorLength](internal_.AsymmetricKeyDetails.md#divisorlength)
- [hashAlgorithm](internal_.AsymmetricKeyDetails.md#hashalgorithm)
- [mgf1HashAlgorithm](internal_.AsymmetricKeyDetails.md#mgf1hashalgorithm)
- [modulusLength](internal_.AsymmetricKeyDetails.md#moduluslength)
- [namedCurve](internal_.AsymmetricKeyDetails.md#namedcurve)
- [publicExponent](internal_.AsymmetricKeyDetails.md#publicexponent)
- [saltLength](internal_.AsymmetricKeyDetails.md#saltlength)

## Properties

### divisorLength

• `Optional` **divisorLength**: `number`

Size of q in bits (DSA).

#### Defined in

node_modules/@types/node/crypto.d.ts:551

___

### hashAlgorithm

• `Optional` **hashAlgorithm**: `string`

Name of the message digest (RSA-PSS).

#### Defined in

node_modules/@types/node/crypto.d.ts:539

___

### mgf1HashAlgorithm

• `Optional` **mgf1HashAlgorithm**: `string`

Name of the message digest used by MGF1 (RSA-PSS).

#### Defined in

node_modules/@types/node/crypto.d.ts:543

___

### modulusLength

• `Optional` **modulusLength**: `number`

Key size in bits (RSA, DSA).

#### Defined in

node_modules/@types/node/crypto.d.ts:531

___

### namedCurve

• `Optional` **namedCurve**: `string`

Name of the curve (EC).

#### Defined in

node_modules/@types/node/crypto.d.ts:555

___

### publicExponent

• `Optional` **publicExponent**: `bigint`

Public exponent (RSA).

#### Defined in

node_modules/@types/node/crypto.d.ts:535

___

### saltLength

• `Optional` **saltLength**: `number`

Minimal salt length in bytes (RSA-PSS).

#### Defined in

node_modules/@types/node/crypto.d.ts:547
