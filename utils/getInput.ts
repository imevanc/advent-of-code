import * as fs from "fs";

export const getInput = (
  day: string,
  inputNumbers: boolean | undefined = true
): number[] | string[] => {
  const input: string = fs.readFileSync(
    `./day-${day}/puzzle-input-${day}.txt`,
    "utf-8"
  );
  return inputNumbers
    ? input.split("\n").map((stringEl) => parseInt(stringEl))
    : input.split("\n");
};
