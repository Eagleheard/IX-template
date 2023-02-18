import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { getUserStatus } from "store/actions/user.action";
import { Button } from "components/button";

import "./styles.scss";
import { MuiInput } from "components/input";
import { IUser } from "interfaces";

export const SignIn = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: IUser) => state.userReducer);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const signIn = (value: FieldValues) => {
    dispatch<any>(getUserStatus(value));
  };

  const submitForm: SubmitHandler<FieldValues> = (data) => {
    signIn(data);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit(submitForm)} className="login__form">
        {errors.username && <p className="login__error">Something wrong</p>}
        <MuiInput name="username" control={control} />
        <MuiInput name="password" control={control} />
        <div className="login__submit">
          <Button
            text="Sign In"
            onClick={() => submitForm}
            styles="sign-in"
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
};
