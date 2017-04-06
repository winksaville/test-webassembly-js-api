/**
 * Test WebAssembly
 */
import {
    SetupFixture,
    Expect,
    TeardownFixture,
    Test,
    TestCase,
    TestFixture,
} from "alsatian";

import * as debugModule from "debug";
const debug = debugModule("wasm.spec");

/**
 * Test WebAssembly JS API
 */
@TestFixture("WebAssembly JS API tests")
export class WebAssemblyTests {
    @SetupFixture
    public setupFixture() {
        debug("setupFixture:#");
    }

    @TeardownFixture
    public teardownFixture() {
        debug("setupFixture:#");
    }

    @Test("Test WebAssembly Memory")
    @TestCase(0, 0)
    @TestCase(1, 0)
    @TestCase(0, 1)
    @TestCase(1, 1)
    @TestCase(0xA5, 0x5A)
    @TestCase(0x5A, 0xA5)
    @TestCase(0, 0xFF)
    @TestCase(0xFF, 0)
    @TestCase(0xFF, 0xFF)
    public testMemory(v1: number, v2: number) {
        // Create Memory arena
        let memory = new WebAssembly.Memory({initial: 2, maximum: 8});

        // Check grow
        let growResult = memory.grow(6);
        debug(`growResult=${growResult}`);
        Expect(growResult).toBe(2);

        // Check
        let u8 = new Uint8Array(memory.buffer);
        u8[0] = v1;
        u8[1] = v2;
        console.log(`u8[0]=${u8[0].toString(16)}`);
        Expect(u8[0]).toBe(v1);
        console.log(`u8[1]=${u8[1].toString(16)}`);
        Expect(u8[1]).toBe(v2);
    }
}
