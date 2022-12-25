interface Elf {
  calories: number;
  items: number[];
}

interface Solution {
  calories: number;
  topThreeCalories: number;
}

export const Elf = (data: string[]): Solution => {
  const numberData: number[] = data.map((stringEl) => parseInt(stringEl));
  const elves: Elf[] = [];
  let elf: Elf = { calories: 0, items: [] };
  numberData.forEach((calories: number): void => {
    if (isNaN(calories)) {
      elves.push(elf);
      elf = { calories: 0, items: [] };
      return;
    }
    elf.items.push(calories);
    elf.calories += calories;
  });
  elves.push(elf);
  elves.sort((a, b) => b.calories - a.calories);

  const topThreeElves: Elf[] = elves.slice(0, 3);
  const topThreeCalories: number = topThreeElves.reduce(
    (acc: number, elf: Elf) => acc + elf.calories,
    0
  );
  return { calories: elves[0].calories, topThreeCalories };
};
