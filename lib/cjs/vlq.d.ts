/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */
/**
 * Encoding variable length integer into base64 (6-bit):
 *
 * 1 N N N N N | 0 N N N N N
 *
 * The first bit indicates if there is more data for the int.
 */
export declare function encodeInt(num: number): string;
export declare function encode(nums: number[]): string;
export declare function decode(str: string): number[];
//# sourceMappingURL=vlq.d.ts.map