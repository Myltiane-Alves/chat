import React, { useState } from "react";
import * as S from "./styles";
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    return (
        <S.Container>
            <div className="register-img">
                <img src="/img/chat-login.png" alt="" />
            </div>
            <form className="formArea" onSubmit>
                <header className="brand">
                    <img src="/img/chat2.png" alt="" />"
                    <h1>Faça seu Cadastro</h1>

                </header>

                <div className="inputArea">

                    <input
                        type="text"
                        placeholder='Digite seu cpf'
                        name="document"
             
                        {...register("document", {
                            required: true, maxLength: 80,
                            onChange: (e) => handeChange(e)
                        })}

                    // onChange={handeChange}
                    />
                </div>
                <div className="inputArea">

                    <input
                        type="emai"
                        placeholder='Digite seu E-mail'
                        name="email"
                   
                        {...register("document", {
                            required: true, maxLength: 80,
                            onChange: (e) => handeChange(e)
                        })}

                    // onChange={handeChange}
                    />
                </div>
                <div className="inputArea">
                    <input
                        type="password"
                        placeholder='Digite sua  senha'
             
                        {...register("password", {

                            onChange: (e) => handeChange(e)
                        })}
                    />
                </div>
                <div className="inputArea">
                    <input
                        type="password"
                        placeholder='Confirme sua senha'
                    
                        {...register("password", {

                            onChange: (e) => handeChange(e)
                        })}
                    />
                </div>
                <div className="inputArea">
                    <button type="submit" label='Entrar'> Salvar </button>
                </div>

            </form>

        </S.Container>
    );
}

export default Login;