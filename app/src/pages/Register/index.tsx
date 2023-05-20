import { FormEvent, useState } from "react";
import * as S from "./styles";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../api";

const Login = () => {
 
    const [values, setValues] = useState({
        username: "",
        cpf: "",
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
            const {password, username, email, cpf } = values;

            const { data } = await signUp({password, username, email, cpf})
            if(data.status === true) {
                toast.error(data.msg, toastOptions)
            }
            console.log(data)
            if(data.status === true) {
                localStorage.setItem("chat-app-user", JSON.stringify(data.user));
                navigate("/setAvatar")
            }
        }
    }

    const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
        if (password !== confirmPassword) {
          toast.error("As senhas não correspondem ", toastOptions);
          return false;
        } else if (username.length < 4) {
          toast.error("O nome de usuário deve ter pelo menos quatros caracteres", toastOptions);
          return false;
        } else if (password.length > 8) {
          toast.error("A senha deve ter pelo menos oito caracteres", toastOptions);
          return false;
        } else if (email === "") {
          toast.error("O E-mail é obrigatório", toastOptions);
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
                        placeholder='Digite seu Nome'
                        onChange={(e) => setValues({...values, username: e.target.value })}          
                    />
                </div>
                <div className="inputArea">

                    <input
                        type="text"
                        placeholder='Digite seu cpf'
                        onChange={(e) => setValues({...values, cpf: e.target.value })}                     
                    />
                </div>
                <div className="inputArea">

                    <input
                        type="emai"
                        placeholder='Digite seu E-mail'
                        onChange={(e) => setValues({...values, email: e.target.value })}
                    />
                </div>
                <div className="inputArea">
                    <input
                        type="password"
                        placeholder='Digite sua  senha'
                        onChange={(e) => setValues({...values, password: e.target.value })}
                    />
                </div>
                <div className="inputArea">
                    <input
                        type="password"
                        placeholder='Confirme sua senha'
                        onChange={(e) => setValues({...values, confirmPassword: e.target.value })}    
                    />
                </div>
                <div className="inputArea">
                    <button type="submit" > Salvar </button>
                </div>

            </form>
            <ToastContainer />
        </S.Container>
    );
}

export default Login;