import axios from "axios";
import { ApiResponse } from "@/types/ApiResponse";

export const getQuestion = async (id: any): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(
    `/api/dashboard/my-tests/test/questions/${id}`
  );
  return response.data;
};
