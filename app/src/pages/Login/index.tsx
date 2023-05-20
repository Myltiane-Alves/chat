import { useNavigate } from 'react-router-dom';
import { FormEvent, useContext, useEffect, useState } from "react";
import * as S from "./styles";
// import { useForm } from 'react-hook-form';
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from '../../api';



const Login = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const [document, setDocument] = useState("");
    // const [password, setPassword] = useState("");
    const [values, setValues] = useState({
        document: "",
        password: "",
      });
    const navigate = useNavigate();

    const toastOptions: ToastOptions =  {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }
    
    useEffect(() => {
        if(localStorage.getItem("chat-app-user")) {
            navigate("/");
        }
    }, [navigate]);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(handleValidation()) {
            let { password, document  } = values;

            try {
                const { data } = await login({password, document}) 
                if (data.status === false) {
                    toast.error(data.msg, toastOptions);
                  }
                  if (data.status === true) {
                    localStorage.setItem("chat-app-user", JSON.stringify(data.user));
                  
                    navigate("/chat");
                  }

            } catch (error) {
                console.error(error)
            }

        }
    }

    const handleValidation = () => {
        const { password, document} = values;
        if(password === "") {
            toast.error("CPF e senha são obrigatários", toastOptions)
            return false;
        } else if(document === "") {
            toast.error("CPF e senha são obrigatários", toastOptions)
            return false;
        }
        return true;
    }
    
    return (
        <S.Container>
            <div className="login-img">
                <img src="/img/chat-login.png" alt="" />
            </div>
            <form className="formArea" onSubmit={(e) => handleSubmit(e)} >
                <header className="brand">
                    <img src="/img/chat2.png" alt="" />"
                    <h1>Faça seu Login</h1>

                </header>

                <div className="inputArea">

                    <input
                        type="text"
                        placeholder='Digite seu cpf'
                  
                      
                        // {...register("document", {
                        //     required: true, maxLength: 80,
                        // })}
                        // onChange:(e) => setValues({...values, document: e.target.value})

                    // onChange={handeChange}
                    />
                </div>
                <div className="inputArea">
                    <input
                        type="password"
                        placeholder='Digite sua  senha'
                    
                        // {...register("password", {

                            // onChange: (e) => setValues({...values, password: e.target.value})
                        // })}
                    />
                </div>
                <div className="inputArea">
                    <button type="submit" >Entrar</button>
                </div>
                <span>
                    Ainda não tem uma conta? <a href="/register">Cadastra-se</a>
                </span>
            </form>
            <ToastContainer />
        </S.Container>
    );
}

export default Login;