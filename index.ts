import { getInput } from "./utils/getInput";
import { Elf } from "./day-01/day-01";
import { Tournament } from "./day-02/day-02";
import { RuckSack } from "./day-03/day-03";

interface Day01Solution {
  calories: number;
  topThreeCalories: number;
}

interface Day02Solution {
  totalScore: number;
  totalScoreStrategy: number;
}

interface Day03Solution {
  sumOfPriorities: number;
  groupSum: number;
}

const day01Solution: Day01Solution = Elf(getInput("01"));
// console.log(solution.calories);
// console.log(solution.topThreeCalories);
const day02Solution: Day02Solution = Tournament(getInput("02"));
// console.log(day02Solution.totalScore);
// console.log(day02Solution.totalScoreStrategy);
const day03Solution: Day03Solution = RuckSack(getInput("03"));
console.log(day03Solution.sumOfPriorities);
console.log(day03Solution.groupSum);
