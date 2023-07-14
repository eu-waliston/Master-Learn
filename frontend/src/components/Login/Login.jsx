import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(watch);
  return (
    <div className="login--component">
      <div>
        <img src="images/template.png" alt="logo png" className="logo-img"/>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("Login")} placeholder="Usuário" />

          <input
            {...register("Password", { required: true })}
            placeholder="Senha"
            type="password"
          />
          {errors.Password && <p>This field is required</p>}

          <input type="submit" value={"Entrar"}  className="btn"/>
        </form>
      </div>
    </div>
  );
};

export default Login;
