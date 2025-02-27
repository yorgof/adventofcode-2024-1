# Advent of Code 2024 - Day 1

This is a solution for the Advent of Code 2024, Day 1 puzzle about calculating the total distance between two lists of location IDs.

https://adventofcode.com/2024/day/1

## How to Run

1. Using the default input file with bun
   ```
   bun install
   bun run start
   ```
2. Using the default input file with node
   ```
   node install
   node run start
   ```

## How to run unit tests

```
bun test
```

## Input Format

The input format should be a list of pairs of numbers, with each pair on a new line, separated by whitespace:

```
number1   number2
number1   number2
...
```

## Solution Approach

The solution:
1. Reads the input data from a file 
2. Parses the two columns into separate lists
3. Sorts both lists in ascending order
4. Calculates the distance between corresponding pairs
5. Sums up all the distances to get the total distance
