import * as fs from "fs";

export const getInput = (day: string): string[] => {
  const input: string = fs.readFileSync(
    `./day-${day}/puzzle-input-${day}.txt`,
    "utf-8"
  );
  return input.split("\n");
};
