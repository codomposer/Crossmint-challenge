import { createCometh } from "../services/comeths.service";
import { getGoalAPI } from "../services/goal.service";
import { createPolyanet } from "../services/polyanet.service";
import { createSoloon } from "../services/soloons.service";
import { PolyanetParams } from "../type/global";
import { findPolyanetPositions, transformGoalData } from "../util";

export const getGoal = async () => {
  try {
    const res = await getGoalAPI();
    const result = transformGoalData(res);
    console.log("result\n", result);
    // const polyanetPositions: PolyanetParams[]  = findPolyanetPositions(res);
    // await createPolyanet({ row: position.row, column: position.column });
    // Delay for 100 ms
    // await new Promise(resolve => setTimeout(resolve, 100));

    for (let row = 0; row < res.goal.length; row++) {
      for (let column = 0; column < res.goal[row].length; column++) {
        const cell = res.goal[row][column];

        switch (true) {
          case cell === "POLYANET":
            await createPolyanet({ row, column });
            break;

          case cell.endsWith("_SOLOON"):
            const color = cell.split("_")[0].toLowerCase() as
              | "blue"
              | "red"
              | "purple"
              | "white";
            await createSoloon({ row, column, color });
            break;

          case cell.endsWith("_COMETH"):
            const direction = cell.split("_")[0].toLowerCase() as
              | "up"
              | "down"
              | "right"
              | "left";
            await createCometh({ row, column, direction });
            break;

          default:
            break;
        }

        // Delay for 50 ms
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    }
    console.log("done");
  } catch (err) {
    console.log(err);
  }
};

