import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  /* background-color: #131324; */
  padding: 1rem;
  form {
    .brand {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      img {
        height: 10rem;
      }
      h1 {
        font-size: 2rem;
        color: white;
        text-transform: uppercase;
      }
    }
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00152C;
    border-radius: 2rem;
    padding: 3rem 2rem;
    .inputArea {
      flex-direction: column;
      input {
        background-color: transparent;
        padding: 1rem;
        border: 0.1rem solid #092749;
        border-radius: 0.4rem;
        color: #BDBDBD;
        width: 100%;
        font-size: 1rem;
        &:focus {
          border: 0.1rem solid #02CCC0;
          outline: none;
        }
      }
      button {
        background-color: #052140;
        color: #BDBDBD;
        padding: 1rem 2rem;
        border: none;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.4rem;
        font-size: 1rem;
        text-transform: uppercase;
        &:hover {
          background-color: #02CCC0;
        }
      }
    }
    span {
      color: #ffffff;
      text-transform: uppercase;
      a {
        color: #052140;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;