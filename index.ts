import { getInput } from "./utils/getInput";
import { Elf } from "./day-01/day-01";

interface Solution {
  calories: number;
  topThreeCalories: number;
}

const solution: Solution = Elf(getInput("01"));
console.log(solution.calories);
console.log(solution.topThreeCalories);
