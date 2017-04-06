/**
 * Test WebAssembly
 */
import {
    Expect,
    SetupFixture,
    TeardownFixture,
    Test,
    TestCase,
    TestFixture,
} from "alsatian";

import * as debugModule from "debug";
const debug = debugModule("webassembly-js-api.spec");

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
        debug("teardownFixture:#");
    }

    @Test("Test WebAssembly Memory grow")
    @TestCase(1, 3, 1, 1)
    @TestCase(4, 8, 1, 3)
    public testMemoryGrow(initialSize: number,maxSize: number, growSize1: number, growSize2: number) {
        // Create Memory arena
        let memory = new WebAssembly.Memory({initial: initialSize, maximum: maxSize});

        // Check growSize1
        let growResult = memory.grow(growSize1);
        debug(`growResult=${growResult}`);
        Expect(growResult).toBe(initialSize);

        // Check growSize2
        growResult = memory.grow(growSize2);
        debug(`growResult=${growResult}`);
        Expect(growResult).toBe(initialSize + growSize1);
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

        // Check we can read and write it
        let u8 = new Uint8Array(memory.buffer);
        u8[0] = v1;
        u8[1] = v2;
        debug(`u8[0]=${u8[0]} u8[1]=${u8[1]}`);
        Expect(u8[0]).toBe(v1);
        Expect(u8[1]).toBe(v2);
    }
}
