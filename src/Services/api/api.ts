import { Team } from "../../Components/Statistics";
import {
  CardType,
  DashboardDispatch,
  formatCurrency,
} from "../../Contexts/DashboardContext";
import { User, UserDispatch } from "../../Contexts/UserContext";
import axiosInstance from "./axios";

export const getUsers = async (dispatch: UserDispatch) => {
  try {
    const response = await axiosInstance.get<User[]>("/users");
    dispatch({ type: "SET_USERS", payload: response.data });
    return response.data;
  } catch (e) {
    console.error("Get Users Failed");
  }
};

export const getDashboardData = async (dispatch: DashboardDispatch) => {
  try {
    const response = await axiosInstance.get<CardType[]>("/dashboard");
    const { data } = response;
    const formattedData = data.map((eachItem) => {
      return {
        ...eachItem,
        amountWithCurrency: formatCurrency(eachItem.currency, eachItem.amount),
      };
    });
    dispatch({ type: "SET_DASHBOARD_DATA", payload: formattedData });
    return response.data;
  } catch (e) {
    console.error("Get Dashboard Api Failed");
  }
};

export const getMatchStats = async () => {
  try {
    const response = await axiosInstance.get<Team[]>("/match-stats");
    return response.data;
  } catch (e) {
    console.error("Get Match Stats Failed");
  }
};
