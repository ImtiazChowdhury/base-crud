[@imtiazchowdhury/base-crud](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / UnderlyingSinkWriteCallback

# Interface: UnderlyingSinkWriteCallback\<W\>

[\<internal\>](../modules/internal_.md).UnderlyingSinkWriteCallback

## Type parameters

| Name |
| :------ |
| `W` |

## Callable

### UnderlyingSinkWriteCallback

▸ **UnderlyingSinkWriteCallback**(`chunk`, `controller`): `void` \| [`PromiseLike`](internal_.PromiseLike.md)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `W` |
| `controller` | [`WritableStreamDefaultController`](internal_.WritableStreamDefaultController.md) |

#### Returns

`void` \| [`PromiseLike`](internal_.PromiseLike.md)\<`void`\>

#### Defined in

node_modules/@types/node/stream/web.d.ts:102
