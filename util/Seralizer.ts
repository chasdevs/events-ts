import {BaseAvroRecord} from "@chasdevs/avro-to-typescript";
import {Type} from 'avsc'

export class Serializer {

    public static doesSerialize(event: BaseAvroRecord): boolean {
        try {
            this.serialize(event);
            return true
        } catch (err) {
            return false
        }
    }

    private static serialize(event: BaseAvroRecord): Buffer {
        const type = Type.forSchema(event.schema());
        return type.toBuffer(event)
    }

}
