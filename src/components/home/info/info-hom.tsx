import React from "react";
import { InfoHomeStyle } from "../home-css/homestyle";

interface InfoProps {
  title: string;
  subtitle: string;
  img: string;
}
const InfoHome = ({ title, subtitle, img }: InfoProps) => {
  return (
    <InfoHomeStyle style={{backgroundImage:`url(${img})`}}>
      <div className="info-wrap">
        <div className="title-wrap">
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
    </InfoHomeStyle>
  );
};

export default InfoHome;
