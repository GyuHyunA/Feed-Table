import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { Dummylist } from "../dummy/itemDummy";
import useInnerHeight from "../hook/use-innerHeight";
import { HomeFooter, HomeInfo, HomeMain } from "../components/home";

interface IhomeStyle{

}

const HomeStyle = styled.div`
  height: 100vh;
  position: fixed;
  transition: 1.5s ease-in-out;
  header {
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    transition: 0.5s;
    transition-delay: 0.5s;
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
          &.active{
            color: #fdbdbd;
          }
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
    &.home {
      top: -83px;
      opacity: 0;
    }
    &.none {
      opacity: 1;
      background-color: rgba(46, 46, 46, 0.5);
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
  .root-container {
    width: 100vw;
    height: 100vh;
    transition: 0.5s ease-in;
  }
`;

const NavList = [
  {
    id: "home",
    text: "HOME",
    index: 0,
    pageIndex: 0,
  },
  {
    id: "introduce",
    text: "INTRODUCE",
    index: 1,
    pageIndex: 1,
  },
  {
    id: "post",
    text: "POST",
    index: 2,
    pageIndex: 2,
  },
  {
    id: "global",
    text: "GLOBAL",
    index: 3,
    pageIndex: 3,
  },
  {
    id: "mobile",
    text: "MOBILE",
    index: 4,
    pageIndex: 4,
  },
  {
    id: "footer",
    text: "FOOTER",
    index: 5,
    pageIndex: 4.3,
  },
];

const SubNavList = [
  { text: "HOME", id: 1, pageIndex: 1 },
  { text: "메인 1", id: 2, pageIndex: 2 },
  { text: "메인 2", id: 3, pageIndex: 3 },
  { text: "메인 3", id: 4, pageIndex: 4 },
];

const Home = () => {
  const innerHeight = useInnerHeight();
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageId, setPageId] = useState<string>("home");
  const scrollRef = useRef<HTMLDivElement>(null);

  const listFindPageId = NavList.find((v) => v.id === pageId);

  // console.log(listFindPageId!.index - 1);
  // console.log("pageIndex", pageIndex)

  const uphandle = () => {
    if (pageIndex === 0) return;
    setPageId(NavList[listFindPageId!.index - 1].id);

  };
  const downhandle = () => {
    if (pageIndex === 4.3) return;
    setPageId(NavList[listFindPageId!.index + 1].id);
  };

  useEffect(() => {
    setPageIndex(listFindPageId!.pageIndex);
  }, [pageId]);

  return (
    <HomeStyle style={{ top: pageIndex * -innerHeight }}>
      {pageIndex === 0 && (
        <header>
          <div className="header-wrap">
            <div className="nav-logo">
              <Link href="/">
                <span className="logo">POST</span>
              </Link>
            </div>
          </div>
        </header>
      )}
      <header className={pageIndex === 0 ? "home" : "none"}>
        <div className="header-wrap">
          <div className="nav-logo">
            <Link href="/">
              <span className="logo">POST</span>
            </Link>
          </div>
          <div className="nav-list">
            {NavList.map(
              (value, index) =>
                index <= 4 && (
                  <span
                    className={`list-item ${pageIndex === index ? "active" : ""}`}
                    key={index}
                    onClick={() => {
                      setPageId(value.id);
                    }}
                  >
                    {value.text}
                  </span>
                )
            )}
            <div className="hamburger">
              <GiHamburgerMenu className="icon" />
            </div>
          </div>
        </div>
      </header>
      <ReactScrollWheelHandler
        className="root-container"
        upHandler={() => uphandle()}
        downHandler={() => downhandle()}
        timeout={500}
      >
        <HomeMain />
        {Dummylist.map((v, i) => (
          <div className="scrollselct" ref={scrollRef} key={i}>
            <HomeInfo
              title={v.title}
              subtitle={v.subtitle}
              img={v.img}
              link={v.link}
              key={i}
              pageIndex={pageIndex}
            />
          </div>
        ))}
        <HomeFooter />
      </ReactScrollWheelHandler>
    </HomeStyle>
  );
};

export default Home;
