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
import type { LineWriter } from './LineWriter.js';
import type { Step } from './Schema.js';
import { StringifyExtension } from './StringifyExtension.js';
/**
 * Stringifies a user flow to a script that uses \@puppeteer/replay's own API.
 */
export declare class PuppeteerReplayStringifyExtension extends StringifyExtension {
    beforeAllSteps(out: LineWriter): Promise<void>;
    afterAllSteps(out: LineWriter): Promise<void>;
    stringifyStep(out: LineWriter, step: Step): Promise<void>;
}
//# sourceMappingURL=PuppeteerReplayStringifyExtension.d.ts.map