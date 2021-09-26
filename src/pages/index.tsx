import { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import HomeMain from "../components/home/main/home-main";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import InfoHome from "../components/home/info/info-hom";
import { Dummylist } from "../dummy/itemDummy";
import useInnerHeight from "../hook/use-innerHeight";

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

  .subnav-contain {
    padding: 0 40px;
    position: fixed;
    top: 83px;
    z-index: 1000;
    width: 100%;
    .subnav-wrap {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
    button {
      width: 70px;
      height: 30px;
      border: 0;
      background-color: rgba(255, 255, 255, 0.2);
      cursor: pointer;
      span {
        font-weight: 700;
        color: white;
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
    pageIndex: 1.5,
  },
  {
    text: "POST",
    index: 2,
    pageIndex: 2.5,
  },
  {
    text: "GLOBAL",
    index: 3,
    pageIndex: 3.5,
  },
];

const SubNavList = [
  { text: "메인 1", id: 0, pageIndex: 1 },
  { text: "메인 2", id: 0, pageIndex: 1 },
  { text: "메인 3", id: 0, pageIndex: 1 },
];

const Home = () => {
  const innerHeight = useInnerHeight();
  const [pageIndex, setPageIndex] = useState<number>(0);

  console.log(pageIndex);

  const uphandle = () => {
    if (pageIndex === 0) {
      return;
    } else {
      setPageIndex(pageIndex - 1);
    }
  };
  const downhandle = () => {
    if (pageIndex === 3) {
      return;
    } else {
      setPageIndex(pageIndex + 1);
    }
  };

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
      <div className="subnav-contain">
        <div className="subnav-wrap">
          {SubNavList.map((v, i) => (
            <button
              className={`subnav-list`}
              key={i}
              onClick={() => setPageIndex(i)}
            >
              <span>{v.text}</span>
            </button>
          ))}
        </div>
      </div>
      <ReactScrollWheelHandler
        style={{ top: pageIndex * -innerHeight }}
        className="root-container"
        upHandler={() => uphandle()}
        downHandler={() => downhandle()}
        timeout={500}
      >
        <HomeMain />
        {Dummylist.map((v, i) => (
          <InfoHome title={v.title} subtitle={v.subtitle} img={v.img} key={i} />
        ))}
      </ReactScrollWheelHandler>
    </HomeStyle>
  );
};

export default Home;
