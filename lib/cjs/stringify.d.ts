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
import { LineWriter } from './LineWriter.js';
import type { Step, UserFlow } from './Schema.js';
import { StringifyExtension } from './StringifyExtension.js';
export interface StringifyOptions {
    extension?: StringifyExtension;
    writer?: LineWriter;
    indentation?: string;
}
/**
 * The format is [version, [lineNo, length], [lineNo, length] ... [lineNo, length]].
 */
export declare type SourceMap = Array<number>;
/**
 * Stringifes an entire recording. The following hooks are invoked with the `flow` parameter containing the entire flow:
 * - `beforeAllSteps` (once)
 * - `beforeEachStep` (per step)
 * - `stringifyStep` (per step)
 * - `afterEachStep` (per step)
 * - `afterAllSteps` (once)
 */
export declare function stringify(flow: UserFlow, opts?: StringifyOptions): Promise<string>;
/**
 * Stringifes a single step. Only the following hooks are invoked with the `flow` parameter as undefined:
 * - `beforeEachStep`
 * - `stringifyStep`
 * - `afterEachStep`
 */
export declare function stringifyStep(step: Step, opts?: StringifyOptions): Promise<string>;
/**
 * Extracts a source map from a text.
 */
export declare function parseSourceMap(text: string): SourceMap | undefined;
export declare function stripSourceMap(text: string): string;
//# sourceMappingURL=stringify.d.ts.map