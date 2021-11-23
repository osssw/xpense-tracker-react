import axios from "axios";
import { UserData } from "../provider/AuthProvider";
import { apiUrl } from "./api";

export type Session = {
  accessToken: string;
};

export type LoginResponseData = {
  session: Session;
};

export const login = (userData: UserData) => {
  return axios.post<LoginResponseData>(`${apiUrl}/sessions`, userData);
};
