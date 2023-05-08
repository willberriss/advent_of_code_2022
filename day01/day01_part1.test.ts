import { check } from "./day01_part1";

describe("testing the input", () => {
    test("when input is empty result should be zero", () => {
        expect(check("")).toBe(0);
    });
});
