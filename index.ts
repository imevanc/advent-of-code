import { getInput } from "./utils/getInput";
import { Elf } from "./day-01/day-01";
import { Tournament } from "./day-02/day-02";

interface Day01Solution {
  calories: number;
  topThreeCalories: number;
}

interface Day02Solution {
  totalScore: number;
  totalScoreStrategy: number;
}

const day01Solution: Day01Solution = Elf(getInput("01"));
// console.log(solution.calories);
// console.log(solution.topThreeCalories);
const day02Solution: Day02Solution = Tournament(getInput("02"));
console.log(day02Solution.totalScore);
console.log(day02Solution.totalScoreStrategy);
