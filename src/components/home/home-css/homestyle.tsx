import styled from "styled-components";

export const HomeStyle = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
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
    position: fixed;
    z-index: 10000;
    bottom: 40px;
    right: 50px;
    .indicator {
      display: flex;
      align-items: center;
      .status{
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

export const InfoHomeStyle = styled.div``;
