import styled from "styled-components";

export const DetailsHomeStyle = styled.div`
  height: 50vh;
  width: 100vw;
  background-color: white;
  box-shadow: inset -1px 0px 10px rgba(0, 0, 0, 0.1);
  .text-wrap {
    padding: 0 40px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    p {
      font-size: 56px;
      font-weight: 700;
      color: #ff9e9e;
    }
  }
`;

export const DetailIntroStyle = styled.div`
  height: 50vh;
  width: 100vw;
  background-color: lightcoral;
`;

export const DetailPcStyle = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const DetailMobileStyle = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  position: relative;
  .btn-contain {
      width: 100%;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: center;
    }
  .mobile-contain {
    position: relative;
    height: 100%;
    background-color: lightskyblue;
    
  }
`;
