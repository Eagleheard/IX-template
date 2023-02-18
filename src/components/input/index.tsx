import { TextField } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";

interface IInput {
  name: "username" | "password";
  control: Control<{ username: string; password: string }, any>;
}
export const MuiInput: React.FC<IInput> = ({ name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          id="outlined-basic"
          label={name}
          variant="outlined"
        />
      )}
    />
  );
};
