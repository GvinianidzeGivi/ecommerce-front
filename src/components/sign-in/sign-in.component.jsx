import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [form, setForm] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          id="email"
          type="email"
          name="email"
          label="email"
          value={form.email || ""}
          handleChange={handleChange}
          required
        />
        <FormInput
          id="password"
          type="password"
          name="password"
          label="password"
          value={form.password || ""}
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
