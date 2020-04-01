// tslint:disable
import { BaseAvroRecord } from "../BaseAvroRecord";
import { Origin } from "./OriginEnum";

export interface Meta {
    uuid: string;
    emitted: number;
    origin: Origin;
}

export interface ExampleEventInterface {
    meta: Meta;
    x: number;
    y: number;
    foo?: null | string;
    bar: string;
    active: boolean;
    money: number;
}

export class ExampleEvent extends BaseAvroRecord implements ExampleEventInterface {

    public meta!: Meta;
    public x!: number;
    public y: number = 0;
    public foo?: null | string;
    public bar: string = "BAR BAR";
    public active: boolean = true;
    public money: number = 0;

    public static readonly subject: string = "example-event";
    public static readonly schema: object = {
    "type": "record",
    "name": "ExampleEvent",
    "namespace": "example",
    "fields": [
        {
            "name": "meta",
            "type": {
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
        },
        {
            "name": "x",
            "type": "int"
        },
        {
            "name": "y",
            "type": "float",
            "default": 0
        },
        {
            "name": "foo",
            "type": [
                "null",
                "string"
            ]
        },
        {
            "name": "bar",
            "type": "string",
            "default": "BAR BAR"
        },
        {
            "name": "active",
            "type": "boolean",
            "default": true
        },
        {
            "name": "money",
            "type": "double",
            "default": 0
        }
    ]
}

    public schema(): object {
        return ExampleEvent.schema;
    }

    public subject(): string {
        return ExampleEvent.subject;
    }
}
