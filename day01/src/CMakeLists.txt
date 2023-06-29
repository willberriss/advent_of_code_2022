cmake_minimum_required(VERSION 3.22)

#set(CMAKE_CXX_STANDARD 11)
#set(CMAKE_CXX_STANDARD 14)
#set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD 20)  # aka c++2a
#set(CMAKE_CXX_STANDARD 23) # Works: probably passes -std=c++2b to clang 
                            # c++2b is another name for c++23
#set(CMAKE_CXX_STANDARD 28) # INVALID VALUE, OBVS

project(day01_part1)
 
# Link program
add_executable(day01_part1 day01_part1.cpp)

