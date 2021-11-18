import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

interface IhomeStyle {}

const HomeStyle = styled.div`
  width: 100%;
  height: 100vh;
  .contain {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-wrap {
    text-align: center;
    margin-bottom: 30px;
    h2 {
      font-weight: bold;
      font-size: 36px;
      line-height: 79px;
      span {
        color: white;
        background-color: #c5c5c5;
      }
    }
  }

  .link-wrap {
    display: flex;
    justify-content: center;
    a{
      background-color:#c5c5c5;
      font-size: 18px;
      width: 138px;
      height: 41px;
      border-radius: 10px;
      p:nth-child(1){
        font-size: 18px;
        font-weight:bold;
      }
      p:nth-child(2){
        font-size: 8px;
      }
    }
    a:nth-child(1){
      margin-right: 12px;
    }
  }
`;

const Home = () => {
  return (
    <HomeStyle>
      <div className="contain">
        <div className="align-wrap">
          <div className="text-wrap">
            <h2>
              안녕하세요 <br />
              제한없는 경험을 나아가는
              <br />
              <span>Leemit입니다</span>
              <br />
            </h2>
          </div>
          <div className="link-wrap">
            <Link href="">
              <a>
                <p>프론트 개발자로서</p>
                <p>더 알아보기</p>
              </a>
            </Link>
            <Link href="">
              <a>
                <p>영상 편집자로서</p>
                <p>더 알아보기</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </HomeStyle>
  );
};

export default Home;
