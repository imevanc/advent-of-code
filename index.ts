import { getInput } from "./utils/getInput";
import { Elf } from "./day-01/day-01";

interface Day01Solution {
  calories: number;
  topThreeCalories: number;
}

const day01Solution: Day01Solution = Elf(getInput("01"));
// console.log(solution.calories);
// console.log(solution.topThreeCalories);
const day02Solution: Day02Solution = Elf(getInput("02", false));
