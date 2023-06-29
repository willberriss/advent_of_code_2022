# Building the code

STEP 0: Present working directory

The code is divided into days, so change directory to the day of interest, e.g.

```bash
cd day01
```

STEP 1: Create the CMake and Ninga build files in the subdirectory build/

```bash
cmake -B <build tree> -S <source tree>
cmake --build <build tree>
```

e.g.

```bash
cmake -B build -S src -GNinja
```


STEP 2: Build a CMake-generated project binary tree (i.e. build the executable)

```bash
cmake --build <build tree>
```
e.g. 

```bash
cmake --build build
```

Alternatively, run ninja manually

```bash
ninja -C build
```

# Running the code

```bash
./build/day01_part1 input.txt
```


