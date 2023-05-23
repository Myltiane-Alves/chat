import { FormEvent, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";
import ChatLogo from "../../assets/chat.png";
import chatLogin from "../../assets/chat-login.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastOptions } from "react-toastify/dist/types";
import { login } from "../../api";


function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const toastOptions: ToastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (handleValidation()) {
      const { password, username } = values;

      const { data } = await login({ password, username });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };

  const handleValidation = () => {
    const { password, username } = values;
    if (password === "") {
      toast.error("cpf and password are required", toastOptions);
      return false;
    } else if (username.length < 4) {
      toast.error("cpf and password are required", toastOptions);
      return false;
    }
    return true;
  };

  return (
    <>
      <S.FormContainer>
        <div className="login-img">
          <img src={chatLogin} alt="ilustração de um chat" />
        </div>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={ChatLogo} alt="logo" />
            <h1>chat</h1>
          </div>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={(e) => setValues({ ...values, username: e.target.value })}
            min="11"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />

          <button type="submit">Login</button>
          <span>
            Dont' have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </S.FormContainer>
      <ToastContainer />
    </>
  );
}

export default Login;