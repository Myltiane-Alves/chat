import styled from 'styled-components';

export const Container = styled.div`
  /* display: grid; */
  align-items: center;
  /* grid-template-columns: 15% 70% 15%; */
  background-color: #052140;
  border-top: 0.2px solid #ffffff15;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-content: space-between;
  @media screen and (min-width: 590px) {
    /* grid-template-columns: 10% 90%; */
  }
  @media screen and (min-width: 1000px) {
    /* grid-template-columns: 5% 95%; */
    /* gap: 0.5rem; */
  }
  .btnContainer {
    display: flex;
    align-items: center;
    color: white;
    padding-right: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffffff;
        cursor: pointer;
      }
      .emoji-picker-react {
        position: absolute;
        top: -470px;
        border-color: #9a86f3;
        border-radius: 5%;
        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;
          &-thumb {
            background-color: #9a86f3;
          }
        }
        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }
        .emoji-search {
          background-color: transparent;
          border-color: #9a86f3;
        }
        .emoji-group:before {
          background-color: #080420;
        }
      }
    }
  }
  .inputContainer {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 2rem;

      font-size: 1.1rem;
      background-color: #ffffff34;
      &::selection {
        background-color: #9a86f3;
      }
      &:focus {
        outline: none;
      }
    }

    button {
      padding: 0.1rem 0.1rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: none;
      @media screen and (min-width: 720px) {
        padding: 0.2rem 0.2rem;

        svg {
          font-size: 1rem;
        }
      }
      svg {
        font-size: 2rem;
        color: #fff;
      }
    }
  }
  .image-send {
    .addImageBtn {
      color: white;
      background: transparent;
      outline: none;
      border: none;
      padding-left: 0.6rem;
      cursor: pointer;
      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;