import React from "react";
import { HomeInfoStyle } from "../home-css/homestyle";

interface InfoProps {
  title: string;
  subtitle: string;
  img: string;
}
const HomeInfo = ({ title, subtitle, img }: InfoProps) => {
  return (
    <HomeInfoStyle style={{backgroundImage:`url(${img})`}}>
      <div className="info-wrap">
        <div className="title-wrap">
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
    </HomeInfoStyle>
  );
};

export default HomeInfo;
