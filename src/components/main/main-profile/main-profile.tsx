import React from "react";
import Link from "next/link";
import { MainProfileStyle } from "./main-profilestyle";

const MainProfile = () => {
  return (
    <MainProfileStyle>
      <section className="profile-contain">
        <div className="title-wrap">
          <h2>ABOUT ME</h2>
        </div>
        <div className="logo-wrap">
          {/* <img src="" alt="" /> */}
          <h2>Leemit</h2>
        </div>
        <section className="contents-contain">
          <div className="profile-wrap">
            <p className="job">Graphic Designer & Web Designer</p>
            <p className="name">안규현</p>
            <div className="email-wrap">
              <span className="ew-title">E-Mail</span>
              <a href="">
                <span className="email">leelimit97@gmail.com</span>
              </a>
            </div>
            <div className="blog-wrap">
              <span className="bw-title">Blog</span>
              <a href="https://limiitlibrary.tistory.com">
                <span className="blog">https://limiitlibrary.tistory.com</span>
              </a>
            </div>
          </div>
          <div className="bar"></div>
          <div className="pj-contain">
            {/* <p>다양하게 다루는 저에 대해 더 알아 보기</p> */}
            <div className="front-box">
              <div className="fb-img"></div>
              <div className="fb-title">프론트 개발자로서</div>
              <div className="fb-btn">
                <Link href="">
                  <a href="">
                    <span>더 알아보기</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="video-box">
              <div className="vb-img"></div>
              <div className="vb-title">영상 편집자로서</div>
              <div className="vb-btn">
                <Link href="">
                  <a href="">
                    <span>더 알아보기</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </MainProfileStyle>
  );
};

export default MainProfile;
