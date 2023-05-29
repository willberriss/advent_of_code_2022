
# Building the code

STEP 1: Create the Ninga build file in the subdirectory build/
```bash
cmake -Bbuild -H. -GNinja
```

STEP 2: Update the ninja build file (cf. Makefile)
```bash
cd build
cmake -H. -GNinja ..        
```

STEP 3: Build the code
```bash
cd build
ninja
```
        
# Running the code

```bash
cd build
./day01_part
```

