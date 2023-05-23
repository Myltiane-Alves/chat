import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";
import ChatLogo from "../../assets/chat.png";
import chatLogin from "../../assets/chat-login.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastOptions } from "react-toastify/dist/types";
import { signUp } from "../../api";

function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    cpf: "",
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

  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (handleValidation()) {
      const { password, username, email, cpf } = values;

      const { data } = await signUp({ password, username, email, cpf });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/setAvatar");
      }
      console.log(data);
    }
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email, cpf } = values;
    if (password !== confirmPassword) {
      toast.error("Passwords don't match", toastOptions);
      return false;
    } else if (username.length < 4) {
      toast.error("Username should have at least 4 characters", toastOptions);
      return false;
    } else if (password.length > 8) {
      toast.error("Password should have at least 8 characters", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email is required", toastOptions);
      return false;
    } else if (cpf === "") {
      toast.error("CPF is required", toastOptions);
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
            placeholder="Username"
            name="username"
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />
          <input
            type="text"
            placeholder="cpf"
            name="username"
            onChange={(e) => setValues({ ...values, cpf: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            onChange={(e) =>
              setValues({ ...values, confirmPassword: e.target.value })
            }
          />
          <button type="submit">Create User</button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </S.FormContainer>
      <ToastContainer />
    </>
  );
}

export default Register;