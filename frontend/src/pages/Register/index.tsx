import { FormEvent, useState } from "react";
import * as S from "./styles";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../api";

const Register = () => {
 
    const [values, setValues] = useState({
        cpf: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    const toastOptions: ToastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if(handleValidation()) {
            const {password, email, cpf, username } = values;

            const { data } = await signUp({password, email, cpf, username})
            if(data.status === true) {
                toast.error(data.msg, toastOptions)
            }
            console.log(data)
            if(data.status === true) {
                localStorage.setItem("chat-app-user", JSON.stringify(data.user));
                navigate("/chat")
            }
        }
    }

    const handleValidation = () => {
        const { password, confirmPassword,  email, cpf } = values;
        if (password !== confirmPassword) {
          toast.error("As senhas não correspondem ", toastOptions);
          return false;
        } else if (cpf.length < 10) {
            toast.error("O CPF deve conter pelo menos 11 digitos ", toastOptions);
            return false;
        }
        return true;
    };

    return (
        <S.Container>
            <div className="register-img">
                <img src="/img/chat-login.png" alt="" />
            </div>
            <form className="formArea"  onSubmit={(e) => handleSubmit(e)} >
                <header className="brand">
                    <img src="/img/chat2.png" alt="" />"
                    <h1>Faça seu Cadastro</h1>

                </header>

                <div className="inputArea">

                    <input
                        type="text"
                        placeholder="Digite seu Nome"
                        name="username"
                        onChange={(e) => setValues({...values, username: e.target.value })}          
                    />
                </div>
                <div className="inputArea">

                    <input
                        type="text"
                        placeholder="Digite seu cpf"
                        name="cpf"
                        onChange={(e) => setValues({...values, cpf: e.target.value })}                     
                    />
                </div>
                <div className="inputArea">

                    <input
                        type="emai"
                        placeholder="Digite seu E-mail"
                        name="email"
                        onChange={(e) => setValues({...values, email: e.target.value })}
                    />
                </div>
                <div className="inputArea">
                    <input
                        type="password"
                        placeholder="Digite sua  senha"
                        name="password"
                        onChange={(e) => setValues({...values, password: e.target.value })}
                    />
                </div>
                <div className="inputArea">
                    <input
                        type="password"
                        placeholder="Confirme sua senha"
                        name="confirmPassword"
                        onChange={(e) => setValues({...values, confirmPassword: e.target.value })}    
                    />
                </div>
                <div className="inputArea">
                    <button type="submit" > Salvar </button>
                </div>
                <span>
                    Já tem uma conta? <a href="/login">Login</a>
                </span>
            </form>
            <ToastContainer />
        </S.Container>
    );
}

export default Register;