import styled from 'styled-components';

export const FormContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  form {
    max-width: 500px;
    .brand {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      
      img {
        height: 8rem;
      }
      h1 {
        font-size: 1.8rem;
        color: white;
        text-transform: uppercase;
      }
    }
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00152C;
    border-radius: 2rem;
    padding: 2rem 2rem;
 
    input {
      background-color: transparent;
      padding-left: 1rem;
      border: 0.1rem solid #092749;
      border-radius: 0.4rem;
      color: #BDBDBD;
      width: 100%;
      height: 50px;
      max-width: 300px;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #02CCC0;
        outline: none;
      }
    }
    button {
      background-color: #092749;
      color: #BDBDBD;
      /* padding: 1rem 2rem; */
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      width: 100%;
      height: 50px;
      max-width: 300px;
      &:hover {
        background-color: #052140;
        transition: all  0.5s ease-in-out;
      }
    }
    
    span {
      color: #ffffff;
      text-transform: uppercase;
      a {
        color: #57B5FD;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
  .login-img {
    display: none;
    img {
      height: 24rem;
    
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .login-img {
      display: flex;
      justify-content: center;
      img {
        width: 80%;
        height: 100%;
      }
    }
  }
  @media (min-width: 1280px) {
    padding: 100px;
    .login-img {
      display: flex;
      img {
        width: 80%;
        height: 100%;
      }
    }
  }
`;