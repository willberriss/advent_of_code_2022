// Target: C++20
// Uses the C++17 map/reduce algorithm (Note: map is called transform in C++)

#if PARALLEL
#include <execution>
#define PAR std::execution::par,
#else
#define PAR
#endif
 
#include <algorithm>
#include <functional>
#include <iostream>
#include <iterator>
#include <locale>
#include <numeric>
#include <vector>
#include <map>
#include <sstream>
#include <string>
#include <fstream>
#include <filesystem>

namespace fs = std::filesystem;

void data_exists(const fs::path &p, fs::file_status s = fs::file_status{})
{
    std::cout << "Data file " << p;
    if (fs::status_known(s) ? fs::exists(s) : fs::exists(p))
    {
        std::cout << " exists\n";
    }
    else
    {
        std::cout << " does not exist\n";
    }
}

struct ElfCalories {
    int id;
    int calories;
};

std::vector<ElfCalories> read_data(const fs::path &filename)
{
    // Read lines from file, first line is elfId #1
    // Create map of elfId to calories (each elf will have 1 or more rows):
    std::ifstream infile(filename);
    std::vector<ElfCalories> elves;
    std::string line;
    int elfId {1};
    while (std::getline(infile, line))
    {
        std::istringstream iss(line);
        if ( ! line.empty() ) {
            ElfCalories elf;
            elf.id = elfId;
            iss >> elf.calories;
            elves.emplace_back(elf);
        }
        else {
            ++elfId;
        }
    }
    return elves;
}

std::map<int, size_t> elves_calories(const std::vector<ElfCalories> &elves)
{
    std::map<int, size_t> elvesTotalCalories;

    // Populate a map that maps elfId to total calories for that elf
    for (auto const &elf : elves) {
        elvesTotalCalories[elf.id] += elf.calories;    
    }

    for (auto const &[elfId, calories] : elvesTotalCalories) {
        std::cout << "elfId: " << elfId << " calories: " << calories << '\n';
    }

    return elvesTotalCalories;
}

void print_max_calories(const std::map<int, size_t> &elvesTotalCalories)
{
    //using pair_type = decltype(elvesTotalCalories)::value_type;
    using pair_type=std::pair<int, size_t>;
    auto maxElf = std::max_element
    (
        std::begin(elvesTotalCalories), 
        std::end(elvesTotalCalories),
        [] (const pair_type &a, const pair_type &b) {
            return a.second < b.second;
        }
    );
    std::cout << "Max calories:" << std::endl;
    std::cout << "elfId: " << maxElf->first << " calories: " << maxElf->second << '\n'; 
    return;
}
 
int main(int argc, char * argv[])
{
    if (argc < 2)
    {
        std::cout << "Please specify input data filename on command line, e.g. input-test.txt." << std::endl;
        return 1;
    }
    const fs::path filename{argv[1]};
    std::cout << "Reading data from file: " << filename << std::endl;

    data_exists(filename, fs::status(filename));
    std::vector<ElfCalories> elves = read_data(filename); 
    std::map<int, size_t> elvesTotalCalories = elves_calories(elves);
    print_max_calories(elvesTotalCalories);

    return 0;
}

