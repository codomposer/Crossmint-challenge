import axios from "axios";
import { API_URL, candidateId } from "../config";
import { PolyanetParams } from "../type/global";

const BASE_URL = `${API_URL}/polyanets`;

export const createPolyanet = async ({
  row,
  column,
}: PolyanetParams): Promise<void> => {
  if (!candidateId) {
    throw new Error("No candidate id");
  }

  try {
    const response = await axios.post(BASE_URL, {
      candidateId,
      row,
      column,
    });
    console.log("Polyanet created:", response.data);
  } catch (error: any) {
    console.error("Error creating Polyanet:", error.message);
    throw Error("Error creating Polyanet");
  }
};

export const deletePolyanet = async ({
  row,
  column,
}: PolyanetParams): Promise<void> => {
  if (!candidateId) {
    throw new Error("No candidate id");
  }

  try {
    const response = await axios.delete(BASE_URL, {
      data: {
        candidateId,
        row,
        column,
      },
    });
    console.log("Polyanet deleted:", response.data);
  } catch (error: any) {
    console.error("Error deleting Polyanet:", error.message);
    throw Error("Error deleting Polyanet");
  }
};
