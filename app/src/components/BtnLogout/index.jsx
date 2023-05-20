
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
const Logout = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      localStorage.clear();
      navigate("/");
    };
    return (
      <S.Button >
        <MdLogout />
      </S.Button>
    );
  };

  export default Logout;