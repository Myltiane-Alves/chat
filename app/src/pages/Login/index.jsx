import React, { useState } from "react";
import "./styles.css";
import { logIn } from "../../store/actions/authAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form';

const Login = () => {
 
    const [data, setData] = useState({
        password: "",
        document: "",
    });
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [document, setDocument] = useState("");
    // const [password, setPassword] = useState("");
    const loading = useSelector((state) => state.authReducer.loading);
    const dispatch = useDispatch();

    const resetForm = () => {
        setData(initialState);

    };

    const handeChange = (e) => {
        setData({ ...data, [e.target.document]: e.target.value });
    };

    function onSubmit(e) {
        e.preventDefaut()
        dispatch(logIn(data))
    }


    return (
        <div className="container-login">


            <form className="formArea" onSubmit={handleSubmit(onSubmit)}>
                <header>
                    <h2>Login</h2>
                </header>

                <div className="inputArea">
              
                    <input
                        type="text"
                        placeholder='Digite seu cpf'
                        name="document"
                        value={data.document}
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
                        value={data.password}
                        {...register("password", {
                            
                            onChange:  (e) => handeChange(e)
                        })}
                    />
                </div>
                <div className="inputArea">
                    <button
                        type="submit"
                        label='Entrar'

                    >Entrar</button>
                </div>
            </form>

            <p
                className="forgetArea"

            >
                Esqueceu sua senha? <a href="" >Clique Aqui</a>
            </p>



        </div>
    );
}

export default Login;