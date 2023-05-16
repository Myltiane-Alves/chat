import React, { useState } from "react";
import "./styles.css";

export default function Login() {
    const [name, setName] = useState("");

    return (
        <div className="container-login">


            <form className="formArea">
                <header>
                    <h2>Login</h2>
                </header>
            
                <div className="inputArea">
                    <input
                      
                        placeholder='Digite seu e-mail'
                       
                    />
                </div>
                <div className="inputArea">
                    <input
                        
                        placeholder='Digite sua  senha'
                      
                    />
                </div>
                <div className="inputArea">
                    <button
                
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
