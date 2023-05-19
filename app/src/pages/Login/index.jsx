import React, { useState } from "react";
import * as S from "./styles";
import "./styles.css";
import { useForm } from 'react-hook-form';



const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [document, setDocument] = useState("");
    const [password, setPassword] = useState("");

    return (
        <S.Container>
            <form className="formArea" onSubmit>
                <header className="brand">
                    <img src="/img/chat2.png" alt="" />"
                    <h1>Faça seu Login</h1>

                </header>

                <div className="inputArea">

                    <input
                        type="text"
                        placeholder='Digite seu cpf'
                        name="document"
                        value={document}
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
                        value={password}
                        {...register("password", {

                            onChange: (e) => handeChange(e)
                        })}
                    />
                </div>
                <div className="inputArea">
                    <button type="submit" label='Entrar'>Entrar</button>
                </div>
                <span>
                    Ainda não tem uma conta? <a href="/register">Cadastra-se</a>
                </span>
            </form>

        </S.Container>
    );
}

export default Login;