import { check, ElfData, processFileLineByLine } from "./day01_part1";

describe("zero input", () => {
    test("when input is empty result should be zero", () => {
        expect(check("")).toBe(0);
    });
});

describe("example input", () => {
    test("when inputting the example input the result should be 24000", () => {
        const testIt = async () => {
            const elfData: ElfData = await processFileLineByLine(
                "day01/input.test.txt"
            );
            expect(elfData.Calories).toBe(24000);
        };
        testIt();
    });
});

describe("puzzle input", () => {
    test("when inputting the puzzle input the result should be 68775", () => {
        const testIt = async () => {
            const elfData: ElfData = await processFileLineByLine(
                "day01/input.txt"
            );
            expect(elfData.Calories).toBe(68775);
        };
        testIt();
    });
});
