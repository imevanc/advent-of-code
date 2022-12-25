interface Solution {
  sumOfPriorities: number;
  groupSum: number;
}

export const RuckSack = (data: string[]): Solution => {
  const arrayOfCommonElements = (data: string[]): string[] => {
    return data.map((row: string) => {
      const firstPart: string = row.substring(0, Math.floor(row.length / 2));
      const secondPart: string = row.substring(
        Math.floor(row.length / 2),
        row.length
      );
      const hashTable = firstPart.split("").reduce((hashTable, el: string) => {
        if (el in hashTable) {
          hashTable[el] += 1;
        } else {
          hashTable[el] = 1;
        }
        return hashTable;
      }, {});
      return secondPart
        .split("")
        .reduce((commonElements: string, el: string) => {
          if (el in hashTable && hashTable[el] > 0) {
            commonElements += el;
            hashTable[el] -= 1;
          }
          return commonElements;
        }, "");
    });
  };
  const sumOfPriorities: number = arrayOfCommonElements(data).reduce(
    (sumOfPriorities: number, row: string) => {
      sumOfPriorities += row
        .split("")
        .reduce((priority: number, char: string): number => {
          if (/[a-z]/.test(char)) {
            priority = char.charCodeAt(0) - 96;
          } else {
            priority = char.charCodeAt(0) - 65 + 27;
          }
          return priority;
        }, 0);
      return sumOfPriorities;
    },
    0
  );
  let groupSum = 0;
  const getPriority = (char: string): number => {
    if (/[a-z]/.test(char)) {
      return char.charCodeAt(0) - 96;
    } else {
      return char.charCodeAt(0) - 65 + 27;
    }
  };
  for (let i = 0; i < data.length; i += 3) {
    const groupOfRucksacks: Array<string[]> = [
      data[i].split(""),
      data[i + 1].split(""),
      data[i + 2].split(""),
    ];

    const firstSet = new Set<string>(groupOfRucksacks[0]);
    const intersectionBetweenFirstAndSecond: string[] =
      groupOfRucksacks[1].filter((char: string): boolean => firstSet.has(char));

    const intersectedSet = new Set<string>(intersectionBetweenFirstAndSecond);
    const intersectionBetweenIntersectedAndThird: string[] =
      groupOfRucksacks[2].filter((char: string): boolean =>
        intersectedSet.has(char)
      );

    const resSet = [new Set<string>(intersectionBetweenIntersectedAndThird)];

    groupSum += getPriority(Array.from(resSet[0]).join());
  }
  return { sumOfPriorities, groupSum };
};
