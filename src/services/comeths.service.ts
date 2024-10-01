import axios from "axios";
import { API_URL, candidateId } from "../config";
import { ComethParams } from "../type/global";

const COMETH_URL = `${API_URL}/comeths`;

// Function to create a Cometh
export const createCometh = async (params: ComethParams): Promise<void> => {
  if (!candidateId) {
    throw new Error("No candidate id");
  }

  try {
    const response = await axios.post(COMETH_URL, { candidateId, ...params });
    console.log("Cometh created:", response.data);
  } catch (error: any) {
    console.error("Error creating Polyanet:", error.message);
    throw Error("Error creating Polyanet");
  }
};
