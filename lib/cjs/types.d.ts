export declare type ExcludeType<T, U> = {
    [K in keyof T]-?: T[K] extends U ? K : never;
}[keyof T];
export declare type PickType<T, U> = Pick<T, ExcludeType<T, U>>;
export declare type JSONValue = null | string | number | boolean | JSONObject | JSONArray;
export interface JSONObject {
    [key: string]: JSONValue;
}
export declare type JSONArray = JSONValue[];
export declare type JSONSerializable<Object extends object> = PickType<Object, JSONValue>;
//# sourceMappingURL=types.d.ts.map