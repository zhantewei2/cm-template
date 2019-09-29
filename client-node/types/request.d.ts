/// <reference types="node" />
import { Readable } from "stream";
export declare const post: <T>(uri: string, body?: any) => Promise<{
    res: any;
    body: T;
}>;
export declare const postStream: (uri: string, body?: any) => Readable;
export declare const get: () => Promise<any>;
