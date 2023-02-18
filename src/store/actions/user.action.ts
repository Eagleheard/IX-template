import { FieldValues } from "react-hook-form";
import { IUser } from "interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUser } from "api/users";

export const getUserStatus = createAsyncThunk(
  "user/getUser",
  async (value: FieldValues) => {
    try {
      const { data } = await fetchUser(value);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);
