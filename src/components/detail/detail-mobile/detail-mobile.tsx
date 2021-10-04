import React, { useState } from "react";
import { DetailMobileStyle } from "../detail-css/detail-css";

const DetailMobile = () => {
    const [changeWidth, setChangeWidth] = useState<number>(375)
  return (
    <DetailMobileStyle>
      <div className="mobile-contain" style={{width: changeWidth}}>
        <div className="mobile-wrap">mobile화면 입니다</div>
      </div>
      <div className="btn-contain">
            <div className="btn-wrap">
                <button onClick={() => setChangeWidth(375)}>375</button>
                <button onClick={() => setChangeWidth(411)}>411</button>
                <button onClick={() => setChangeWidth(768)}>768</button>
            </div>
        </div>
    </DetailMobileStyle>
  );
};

export default DetailMobile;
