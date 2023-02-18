import { FieldValues } from "react-hook-form";
import { axiosInstanse } from "./../index";

export const fetchUser = (value: FieldValues) => {
  return axiosInstanse.post("https://dummyjson.com/auth/login", value, {
    headers: { "Content-type": "application/json" },
  });
};
