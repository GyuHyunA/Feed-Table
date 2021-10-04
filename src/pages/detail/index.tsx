import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { DetailHome, DetailIntro, DetailMobile, DetailPc } from "../../components/detail";
import useInnerHeight from "../../hook/use-innerHeight";
import router from "next/router";
import { GetServerSideProps } from "next";

interface IDetailPage{
query:{
  link:string
}
}

const DetailsPageStyle = styled.div`
  height: 100vh;
  position: fixed;
  transition: 0.5s;
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
          color: black;
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
          color: black;
          &.active {
            color: #fdbdbd;
          }
        }
        .hamburger {
          cursor: pointer;

          .icon {
            position: relative;
            top: 2px;
            font-size: 20px;
            color: black;
          }
        }
      }
    }
  }
  .testbtn{
    position: fixed;
    z-index: 1000;

  }
`;

const DetailsPage = ({query}:IDetailPage) => {
  const innerHeight = useInnerHeight();
  const [pageIndex, setPageIndex] = useState<number>(query.link ? Number(query.link) : 0);
  const [pageId, setPageId] = useState<string>(query.link);

  // const listFindPageId = DetailsNavList.find((v) => v.id === pageId)!;

  const uphandle =() => {
    if (pageIndex === 0) return
    if (pageIndex === 0.5) {
      setPageIndex(0)
      return
    } else if(pageIndex === 1){
      setPageIndex(0.5)
      return
    }
    setPageIndex(pageIndex - 1)
  }
  const downhandle = () => {
    if (pageIndex === 2) return
    if (pageIndex === 0) {
      setPageIndex(0.5)
      return
    } else if(pageIndex === 0.5){
      setPageIndex(1)
      return
    }
    setPageIndex(pageIndex + 1)
  }

  useEffect(() => {
    if(pageIndex === 0 || pageIndex === 0.5){
      router.replace(`/detail`)
    } else {
      router.replace(`/detail?link=${pageIndex}`)
    }
  }, [pageIndex])

  return (
    <DetailsPageStyle style={{ top : -innerHeight * pageIndex }}>
      <header className={pageIndex === 0 ? "home" : "none"}>
        <div className="header-wrap">
          <div className="nav-logo">
            <Link href="/">
              <span className="logo">POST</span>
            </Link>
          </div>
          <div className="nav-list">
            {DetailsNavList.map(
              (value, index) =>
                index <= 4 && (
                  <span
                    className={`list-item ${
                      pageIndex === value.pageIndex ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => {
                      setPageIndex(value.pageIndex);
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
        className="detail-contain"
        upHandler={() => uphandle()}
        downHandler={() => downhandle()}
        timeout={500}
        
      >
        <DetailHome />
        <DetailIntro />
        <DetailPc/>
        <DetailMobile/>
      </ReactScrollWheelHandler>
    </DetailsPageStyle>
  );
};

export default DetailsPage;

const DetailsNavList = [
  {
    id: "home",
    text: "HOME",
    pageIndex: 0,
    index: 0,
  },
  {
    id: "intro",
    text: "INTRO",
    pageIndex: 0.5,
    index: 1,
  },
  {
    id: "pc",
    text: "PC",
    pageIndex: 1,
    index: 2,
  },
  {
    id: "mobile",
    text: "MOBILE",
    pageIndex: 2,
    index: 3,
  },
];

export const getServerSideProps: GetServerSideProps = async ({
  query,
}) => {
  return {
    props: { query },
  }
}