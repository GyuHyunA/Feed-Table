import React from "react";
import { HomeInfoStyle } from "../home-css/homestyle";
import Link from "next/link"

interface InfoProps {
  title: string;
  subtitle: string;
  img: string;
  pageIndex:number;
  link: JSX.Element;
}
const HomeInfo = ({ title, subtitle, img, link, pageIndex }: InfoProps) => {
  return (
    <HomeInfoStyle style={{ backgroundImage: `url(${img})` }}>
      <div className="info-wrap">
        <div className="title-wrap">
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
          {link}
          <a href={`${pageIndex === 3 && 4 ? "ready" :"/detail?link=" + pageIndex}`} >
            <button>다음장으로</button>
          </a>
        </div>
      </div>
    </HomeInfoStyle>
  );
};

export default HomeInfo;
