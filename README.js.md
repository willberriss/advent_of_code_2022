Advent of Code 2022
Language: TypeScript

1. Running the TypeScript compiler tsc
2. Running the JavaScript code using node
3. Running the text formatter prettier
4. Running the linter eslint
5. Running the unittests using jest

# 1. Running the TypeScript compiler tsc

```bash
tsc day01/day01_part1.ts
```

This creates the JavaScript file day01_part1.js which you can run using node

# 2. Running the JavaScript code using node: Example shown for day01

```bash
node day01/day01_part1.js day01/input.txt
```

# 3. Running the text formatter prettier

```bash
npx prettier --write day01
```

or

```bash
npx prettier --write .
```

# 4. Running the linter eslint

```bash
npx eslint --ext .ts .
```

or to run the script alias "lint" that I added to package.json

```bash
npm run lint
```

# 5. Running the unittests

To run only the tests in the subdirectory day01

```bash
npx jest day01
```

To run the tests in all the subdirectories

```bash
npx jest
```

# 6. Running JavaScript code in a browser

Compile the ts code to js code:

```bash
tsc day01/web/day01_part1.ts
```

In a web browser, open the file **day01/web/day01_part1.html**  

For instance, to open an html file in github directly, use the prefix:

```bash
https://htmlpreview.github.io/?
```  

e.g.
```bash
https://htmlpreview.github.io/?https://github.com/willberriss/advent_of_code_2022/blob/main/day01/web/day01a.html
```  

Click on the button **Choose file** and select the file **input.txt**  

The results for Elf Id and Elf Calories will appear automatically.


