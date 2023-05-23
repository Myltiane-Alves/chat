import styled from 'styled-components';

export const Container = styled.section`
  height: -webkit-fill-available;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  
  .container {
    height: 100vh;
    width: 100vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 20% 80%;

    @media screen and (min-width: 720px) {
      grid-template-columns: 35% 65%;
      grid-template-rows: none;
      width: 100vw;
      height: 100vh;
    }

    @media screen and (min-width: 1100px) {
      grid-template-columns: 28% 72%;
    }
  }
`;