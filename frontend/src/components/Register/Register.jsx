import React from "react";
import { useForm } from "react-hook-form";
import "../Login/Login.css";

const Register = () => {
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
        <img src="images/template.png" alt="logo png" className="logo-img" />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("Login")} placeholder="Usuário" />
          {errors.Password && <p>This field is required</p>}

          <input
            {...register("Password", { required: true })}
            placeholder="Senha"
            type="password"
          />
          {errors.Password && <p>This field is required</p>}

          <input {...register("Email")} placeholder="Email" type="email" />
          {errors.Password && <p>This field is required</p>}

          <input {...register("DatNasc")} placeholder="DatNasc" type="date" />
          {errors.Password && <p>This field is required</p>}

          <input type="submit" value={"Cadastrar"} className="btn" />
        </form>
      </div>
    </div>
  );
};

export default Register;
