import styled from "styled-components";

export const HomeStyle = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  transition: 0.5s;
  /* 슬라이드 */
  .slide_wrap {
    height: 100vh;
    width: 100%;
  }

  .slide-img {
    width: 100%;
    height: 100%;
    top: 0;
    object-fit: cover;
  }
  .slide-contents {
    position: fixed;
    top: 45%;
    margin-left: 70px;
    width: 100%;
    text-align: left;
    .text-wrap {
      p {
        font-size: 48px;
        font-weight: 700;
        color: white;
      }
    }
  }

  /* 인디케이터 */
  .indicator-wrap {
    position: absolute;
    z-index: 10000;
    bottom: 40px;
    right: 50px;
    .indicator {
      display: flex;
      align-items: center;
      .status {
        font-size: 24px;
        font-weight: 700;
        color: white;
      }
      .icon {
        font-size: 48px;
        color: white;
        cursor: pointer;
      }
    }
  }
`;

export const HomeInfoStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .info-wrap {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 40px;
    .title-wrap {
      position: absolute;
      font-size: 36px;
      font-weight: 700;
      color: white;
      .link-wrap {
        color: lightcoral;
      }
      button {
        position: absolute;
        padding: 9px 20px;
        border-radius: 5px;
        border: 0;
        background-color: #fdbdbd;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
        transition: 0.5s;
        cursor: pointer;
        &:hover {
          background-color: #ff5353;
        }
      }
    }
    /* .btn-wrap{
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      
    } */
  }
`;
