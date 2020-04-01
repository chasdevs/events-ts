// tslint:disable
import { BaseAvroRecord } from "../../BaseAvroRecord";
import { Origin } from "./OriginEnum";

export interface MetaInterface {
    uuid: string;
    emitted: number;
    origin: Origin;
}

export class Meta extends BaseAvroRecord implements MetaInterface {

    public uuid!: string;
    public emitted!: number;
    public origin!: Origin;

    public static readonly subject: string = "meta";
    public static readonly schema: object = {
    "type": "record",
    "name": "Meta",
    "namespace": "example.common",
    "fields": [
        {
            "name": "uuid",
            "type": "string"
        },
        {
            "name": "emitted",
            "type": {
                "type": "long",
                "logicalType": "timestamp-millis"
            }
        },
        {
            "name": "origin",
            "type": {
                "type": "enum",
                "name": "Origin",
                "symbols": [
                    "SITE_ONE",
                    "SITE_TWO",
                    "OUTDATED_SCHEMA"
                ],
                "default": "OUTDATED_SCHEMA"
            }
        }
    ]
}

    public schema(): object {
        return Meta.schema;
    }

    public subject(): string {
        return Meta.subject;
    }
}
