# Events (Typescript)

| WARNING: This codebase is auto-generated. Do not modify the source code directly. |
| --- |

This repository holds the compiled [Events](https://github.com/chasdevs/events) for Typescript.

### Dependencies:

- Node.js >= 10

### Testing Event Serialization

It can be helpful when writing unit tests to verify that your events actually serialize. Use the Serializer class to have an event serialize itself using its own schema.

```typescript
import {Serializer} from "@chasdevs/events-ts/lib/util/Serializer"

const serializes: boolean = Serializer.doesSerialize(event)
```
