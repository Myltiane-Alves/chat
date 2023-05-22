import styled from 'styled-components';

export const Container = styled.div`
  background-color: #131324;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  .avatarSelector {
    &:hover {
      cursor: pointer;
    }
  }
  .buttons {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media screen and (min-width: 600px) {
      flex-direction: row;
    }
    .submit-btn {
      background-color: #4e0eff;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      min-width: 150px;
      &:hover {
        background-color: #4206e7;
      }
      &:disabled {
        background-color: #828282;
        cursor: default;
      }
    }
    .cancel {
      background-color: rgb(255, 82, 161);
      &:hover {
        background-color: rgb(245, 43, 134);
      }
    }
  }
`;