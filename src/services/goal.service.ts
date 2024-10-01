import axios from "axios";
import { API_URL, candidateId } from "../config";

export const getGoalAPI = async () => {
  if (!candidateId) {
    throw new Error("No candidate id");
  }
  
  try {
    const res = await axios.get(`${API_URL}/map/${candidateId}/goal`);
    return res.data
  } catch (err) {
    throw new Error("Error occured while fetching goal");
  }
};


