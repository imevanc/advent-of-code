import * as fs from "fs";

export const getInput = (day: string): number[] => {
  const input: string = fs.readFileSync(
    `./day-${day}/puzzle-input-${day}.txt`,
    "utf-8"
  );
  return input.split("\n").map((stringEl) => parseInt(stringEl));
};
