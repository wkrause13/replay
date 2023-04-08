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
import { SelectorType, Step, UserFlow } from './Schema.js';
export declare function assertAllStepTypesAreHandled(s: never): never;
export declare const typeableInputTypes: ReadonlySet<string>;
export declare const pointerDeviceTypes: ReadonlySet<string>;
export declare const mouseButtonMap: ReadonlyMap<string, 'left' | 'middle' | 'right' | 'back' | 'forward'>;
export declare function parseStep(step: unknown, idx?: number): Step;
export declare const minTimeout = 1;
export declare const maxTimeout = 30000;
export declare function validTimeout(timeout: number): boolean;
export declare function parse(data: unknown): UserFlow;
/**
 * Detects what type of a selector the string contains. For example,
 * `aria/Label` is a SelectorType.ARIA.
 *
 * Note that CSS selectors are special and usually don't require a prefix,
 * therefore, SelectorType.CSS is the default type if other types didn't match.
 */
export declare function getSelectorType(selector: string): SelectorType;
//# sourceMappingURL=SchemaUtils.d.ts.map