import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "components/button";

import "./style.scss";

export const Form = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitForm: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit(submitForm)} className="login__form">
        {errors.email && <p className="login__error">Something wrong</p>}
        <div className="login__group">
          <input
            {...register("email", {
              required: true,
            })}
            type="email"
            id="email"
            placeholder="Email"
            className="login__email"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <label htmlFor="email" className="login__label">
            Email
          </label>
        </div>
        <div className="login__group">
          <textarea
            {...register("text")}
            id="message"
            placeholder="password"
            className="login__password"
            onChange={(e) => setMessage(e.currentTarget.value)}
          />
          <label htmlFor="message" className="login__label">
            Message
          </label>
        </div>
        <div className="login__submit">
          <Button text="Send" onClick={() => submitForm} styles="sign-in" />
        </div>
      </form>
      <a href={`mailto:${email}?body=${message}`}>Send</a>
    </div>
  );
};
