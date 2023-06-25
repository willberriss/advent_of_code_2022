/*
interface ElfData {
    Elf: number;
    Calories: number;
}
const check = (input: string): number => {
    if ("" === input) {
        return 0;
    } else {
        return input.length;
    }
};

const processDataLineByLine = async (data: string): Promise<ElfData> => {
    const lines = data.split('\n');
    const elfData: ElfData = { Elf: 1, Calories: 0 };
    let elfNumber = 1;
    let maxCalories = 0;
    let calories = 0;
    for await (const line of lines) {
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

const processText = async (input_data: string) => {
    const elfData: ElfData = await processDataLineByLine(input_data);
    console.log("Elf: ", elfData.Elf);
    console.log("Calories: ", elfData.Calories);

    // Display in a text box in html
    const elfId = elfData.Elf.toString();
    //const myText1 = document.createTextNode( elfId );
    //document.body.appendChild( myText1 );
    const elfCalories = elfData.Calories.toString();
    const myh2 = document.querySelector("h2");
    myh2.innerText = "Elf Id: " + elfId;
    //myh2.appendChild(elfId);
    const myh3 = document.querySelector("h3");
    myh3.innerText = "Elf Calories: " +elfCalories;
};
*/

const thename: HTMLElement = document.querySelector(".thename");
const btn = document.querySelector("button");
if (btn) {
    btn.addEventListener("click", function () {
        thename.style.color = "blue";
    });
} else {
    console.log("btn is null");
}
