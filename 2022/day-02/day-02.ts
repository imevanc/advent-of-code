interface PairToPoints {
  AX: number;
  BY: number;
  CZ: number;
  AY: number;
  BZ: number;
  CX: number;
}

interface FirstColumn {
  A: number;
  B: number;
  C: number;
}

interface SecondColumn {
  X: number;
  Y: number;
  Z: number;
}

interface Solution {
  totalScore: number;
  totalScoreStrategy: number;
}

export const Tournament = (data: string[]): Solution => {
  const pairToPoints: PairToPoints = {
    AX: 3,
    BY: 3,
    CZ: 3,
    AY: 6,
    BZ: 6,
    CX: 6,
  };
  const secondColumn: SecondColumn = {
    X: 1,
    Y: 2,
    Z: 3,
  };

  const totalScore: number = data.reduce(
    (totalScore: number, pair: string): number => {
      totalScore +=
        (pairToPoints[pair.split(" ").join("")]
          ? pairToPoints[pair.split(" ").join("")]
          : 0) + secondColumn[pair.split(" ").join("")[1]];
      return totalScore;
    },
    0
  );
  const newData = data.reduce((newData: string[], pair: string): string[] => {
    const newPair = pair.split(" ").join("");

    let coefficient: number =
      newPair[1] === "X" ? -1 : newPair[1] === "Y" ? 0 : 1;
    newData.push(
      newPair[0] +
        ["X", "Y", "Z"][
          (["A", "B", "C"].indexOf(newPair[0]) + coefficient + 3) % 3
        ]
    );
    return newData;
  }, []);

  const totalScoreStrategy: number = newData.reduce(
    (totalScoreStrategy: number, pair: string): number => {
      totalScoreStrategy +=
        (pairToPoints[pair] ? pairToPoints[pair] : 0) + secondColumn[pair[1]];
      return totalScoreStrategy;
    },
    0
  );
  return {
    totalScore,
    totalScoreStrategy,
  };
};
