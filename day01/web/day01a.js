"use strict";
//import fs = require("fs");
// import * as fs from "fs";
//import * as readline from "node:readline";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
const check = (input) => {
    if ("" === input) {
        return 0;
    }
    else {
        return input.length;
    }
};
const processDataLineByLine = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c;
    const lines = data.split('\n');
    const elfData = { Elf: 1, Calories: 0 };
    let elfNumber = 1;
    let maxCalories = 0;
    let calories = 0;
    try {
        for (var _d = true, lines_1 = __asyncValues(lines), lines_1_1; lines_1_1 = yield lines_1.next(), _a = lines_1_1.done, !_a;) {
            _c = lines_1_1.value;
            _d = false;
            try {
                const line = _c;
                // Each line in input.txt will be successively available here as line
                if ("" === `${line}`) {
                    if (calories > maxCalories) {
                        maxCalories = calories;
                        elfData.Elf = elfNumber;
                        elfData.Calories = maxCalories;
                    }
                    calories = 0;
                    elfNumber++;
                }
                else {
                    calories += parseInt(`${line}`);
                }
            }
            finally {
                _d = true;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (!_d && !_a && (_b = lines_1.return)) yield _b.call(lines_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return elfData;
});
const processText = (input_data) => __awaiter(void 0, void 0, void 0, function* () {
    const elfData = yield processDataLineByLine(input_data);
    console.log("Elf: ", elfData.Elf);
    console.log("Calories: ", elfData.Calories);
    // Display in a text box in html
    const elfId = elfData.Elf.toString();
    //const myText1 = document.createTextNode( elfId );
    //document.body.appendChild( myText1 );
    const elfCalories = elfData.Calories.toString();
    let myh2 = document.querySelector("h2");
    myh2.innerText = "Elf Id: " + elfId;
    //myh2.appendChild(elfId);
    let myh3 = document.querySelector("h3");
    myh3.innerText = "Elf Calories: " + elfCalories;
});
const thename = document.querySelector(".thename");
const btn = document.querySelector("button");
if (btn) {
    btn.addEventListener("click", function () {
        thename.style.color = "blue";
    });
}
else {
    console.log("btn is null");
}
//# sourceMappingURL=day01a.js.map