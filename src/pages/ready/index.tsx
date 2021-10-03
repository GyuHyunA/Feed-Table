import React from "react";
import { GrFormClose } from "react-icons/gr";
import styled from "styled-components";

const ReadyPageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  .ready-contain {
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   .contents-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 56px;
    font-weight: 700;
    margin-bottom: 50px;
   }
  }
`;

const ReadyPage = () => {
  return (
    <ReadyPageStyle>
      <div className="ready-contain">
        <div className="contents-wrap">
          <GrFormClose />
          <p>페이지 준비중 입니다</p>
        </div>
        <a href="/">
            <button>돌아가기</button>
          </a>
      </div>
    </ReadyPageStyle>
  );
};

export default ReadyPage;
