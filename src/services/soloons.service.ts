import axios from "axios";
import { API_URL, candidateId } from "../config";
import { SoloonParams } from "../type/global";

const SOLOON_URL = `${API_URL}/soloons`;

// Function to create a Soloon
export const createSoloon = async (params: SoloonParams): Promise<void> => {
  if (!candidateId) {
    throw new Error("No candidate id");
  }

  try {
    const response = await axios.post(SOLOON_URL, { candidateId, ...params });
    console.log("Soloon created:", response.data);
  } catch (error: any) {
    console.error("Error creating Polyanet:", error.message);
    throw Error("Error creating Polyanet");
  }
};
