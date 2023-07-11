import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css"

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="login--component">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Login")} placeholder="Usuário" />

                <input {...register("Password", {required: true})} placeholder="Senha"/>
                {errors.Password && <p>This field is required</p>}

                <input type="submit" value={"Entrar"}/>
            </form>
        </div>
    )
}

export default Login;