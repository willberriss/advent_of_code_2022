import fs = require("fs");
import * as readline from "node:readline";

export interface ElfData {
    Elf: number;
    Calories: number;
}

export const check = (input: string): number => {
    if ("" === input) {
        return 0;
    } else {
        return input.length;
    }
};

export const processFileLineByLine = async (
    filename: string
): Promise<ElfData> => {
    const fileStream = fs.createReadStream(filename);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    const elfData: ElfData = { Elf: 1, Calories: 0 };
    let elfNumber = 1;
    let maxCalories = 0;
    let calories = 0;
    for await (const line of rl) {
        // Each line in input.txt will be successively available here as line
        if ("" === `${line}`) {
            if (calories > maxCalories) {
                maxCalories = calories;
                elfData.Elf = elfNumber;
                elfData.Calories = maxCalories;
            }
            calories = 0;
            elfNumber++;
        } else {
            calories += parseInt(`${line}`);
        }
    }
    return elfData;
};

export const doIt = async (input_file: string) => {
    //const {Elf, Calories} = await processFileLineByLine(`${input_file}`);
    const elfData: ElfData = await processFileLineByLine(`${input_file}`);
    console.log("Elf: ", elfData.Elf);
    console.log("Calories: ", elfData.Calories);
};

// Only call when running node.js; we don't want jest to call this.
if (typeof require !== "undefined" && require.main === module) {
    const args = process.argv;
    console.log(args);
    doIt(args[2]);
}
