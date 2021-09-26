import { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import HomeMain from "../components/home/main/home-main";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const HomeStyle = styled.div`
  height: 100vh;
  position: fixed;
  header {
    position: fixed;
    z-index: 1000000;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    /* 헤더 */
    .header-wrap {
      padding: 0 40px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      /* 로고 */
      .nav-logo {
        background-color: #80808016;
        padding: 10px 30px;
        cursor: pointer;
        .logo {
          font-weight: 700;
          color: white;
        }
      }
      /* 네비 목록 */
      .nav-list {
        display: flex;
        align-items: center;
        .list-item {
          margin-right: 30px;
          font-weight: 700;
          cursor: pointer;
          color: white;
        }
        .hamburger {
          cursor: pointer;

          .icon {
            position: relative;
            top: 2px;
            font-size: 20px;
            color: white;
          }
        }
      }
    }
  }
`;

const NavList = [
  {
    text: "HOME",
    index: 0,
    pageIndex: 0,
  },
  {
    text: "INTRODUCE",
    index: 1,
    pageIndex: 1,
  },
  {
    text: "POST",
    index: 2,
    pageIndex: 1,
  },
  {
    text: "GLOBAL",
    index: 3,
    pageIndex: 2,
  },
];

const Home = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);

  return (
    <HomeStyle>
      <header className="home">
        <div className="header-wrap">
          <div className="nav-logo">
            <Link href="/">
              <span className="logo">POST</span>
            </Link>
          </div>
          <div className="nav-list">
            {NavList.map((value, index) => (
              <span className="list-item" key={index}>
                {value.text}
              </span>
            ))}
            <div className="hamburger">
              <GiHamburgerMenu className="icon" />
            </div>
          </div>
        </div>
      </header>
      <ReactScrollWheelHandler>
        <HomeMain />
      </ReactScrollWheelHandler>
    </HomeStyle>
  );
};

export default Home;
