import React, { useState } from "react";
import "./styles.css";
import { addUser } from "../../store/user";

export default function Login() {
    const [document, setDocument] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState(initialState);

    const initialState = {
        document: "",
        password: "",
    
    }
    function handleSubmit(e) {
        e.preventDefaut()

        if(document) {
            dispatch(addUser({ document }))
            history.pushState("/dashboard")
        }
    }
    return (
        <div className="container-login">


            <form className="formArea" handleSubmit={handleSubmit}>
                <header>
                    <h2>Login</h2>
                </header>
            
                <div className="inputArea">
                    <input
                        type="text"
                        placeholder='Digite seu cpf'
                        handleChange={setDocument}
                        value={data.document}
                    />
                </div>
                <div className="inputArea">
                    <input
                        type="password"
                        placeholder='Digite sua  senha'
                        value={data.password}
                    />
                </div>
                <div className="inputArea">
                    <button
                        type="submit"
                        handleSubmit={handleSubmit}
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
