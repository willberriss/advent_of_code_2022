export function check(input: string): number {
    if ("" === input) {
        return 0;
    } else {
        return input.length;
    }
}

const input = "hello";
console.log(check(input));
