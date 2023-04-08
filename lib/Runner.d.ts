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
import { RunnerExtension } from './RunnerExtension.js';
import { UserFlow, Step } from './Schema.js';
export declare class Runner {
    #private;
    abort(): void;
    set flow(flow: UserFlow);
    runBeforeAllSteps(flow?: UserFlow): Promise<void>;
    runAfterAllSteps(flow?: UserFlow): Promise<void>;
    /**
     * Runs the provided `step` with `beforeEachStep` and `afterEachStep` hooks.
     * Parameters from the `flow` apply if the `flow` is set.
     */
    runStep(step: Step): Promise<void>;
    /**
     * Run all the steps in the flow
     * @returns whether all the steps are run or the execution is aborted
     */
    run(): Promise<boolean>;
}
export declare function createRunner(): Promise<Runner>;
export declare function createRunner(flow: UserFlow): Promise<Runner>;
export declare function createRunner(extension: RunnerExtension): Promise<Runner>;
export declare function createRunner(flow: UserFlow, extension: RunnerExtension): Promise<Runner>;
//# sourceMappingURL=Runner.d.ts.map