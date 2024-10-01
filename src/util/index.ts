import { GoalData } from "../type/global";

export const transformGoalData = (data: GoalData): string => {
  const symbols = {
    SPACE: "🌌",
    POLYANET: "🪐",
    BLUE_SOLOON: "🔵",
    RED_SOLOON: "🔴",
    PURPLE_SOLOON: "🟣",
    WHITE_SOLOON: "⚪",
    UP_COMETH: "⬆️",
    DOWN_COMETH: "⬇️",
    LEFT_COMETH: "⬅️",
    RIGHT_COMETH: "➡️",
  };

  return data.goal
    .map((row) =>
      row.map((cell) => symbols[cell as keyof typeof symbols] || "❓").join(" ")
    )
    .join("\n");
};


export const findPolyanetPositions = (
  data: GoalData
): { row: number; column: number }[] => {
  const positions: { row: number; column: number }[] = [];

  data.goal.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (cell === "POLYANET") {
        positions.push({ row: rowIndex, column: columnIndex });
      }
    });
  });

  return positions;
};
