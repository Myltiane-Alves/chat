import styled from "styled-components";
export const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  overflow: hidden;

  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    border-bottom: 1px solid #ffffff15;
    -webkit-box-shadow: 0px 17px 20px -26px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 17px 20px -26px rgba(66, 68, 90, 1);
    box-shadow: 0px 17px 20px -26px rgba(66, 68, 90, 1);
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3.1rem;
        }
      }
      .username {
        h3 {
          color: #e4e6eb;
        }
      }
    }
    @media screen and (min-width: 720px) {
      .avatar {
        img {
          height: 3rem;
        }
      }
    }
  }

  .loading-messages {
    text-align: center;
    margin-top: 35vh;
    img {
      width: 120px;
      height: 120px;
    }
  }

  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    background-color: #092749;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      width: 100%;
      align-items: center;
      .content {
        display: block;
        max-width: 70%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 0.9rem;
        border-radius: 1rem;
        color: #d1d1d1;
        @media screen and (min-width: 720px) {
          max-width: 50%;
          font-size: 1.1rem;
        }
      }
      .content-image {
        max-width: 70%;
        img {
          max-width: 300px;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #57B5FD;
        p {
          color: #ffffff;
        }        
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #00152C;
      }
    }
  }
  @media screen and (max-width: 900px) and (orientation: landscape) {
    grid-template-rows: 15% 70% 15%;

    .chat-header {
      .user-details {
        .avatar {
          img {
            height: 2.6rem;
          }
        }
      }
    }
  }
`;