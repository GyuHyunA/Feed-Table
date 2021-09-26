import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import { MainPageDummyList } from "../../../dummy/itemDummy";
import { HomeStyle } from "../home-css/homestyle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InfoHome from "../info/info-hom";

interface HProps {}

const HomeMain = ({}: HProps) => {
  const [current, setCurrent] = useState<number>(0);
  // const [btn, setBtn] = useState<number>(0)

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const upcurrent = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  return (
    <HomeStyle>
      <div className="indicator-wrap">
        <div className="indicator">
          <MdNavigateBefore className="icon" onClick={prev} />
          <div className="status">{`${current+1 } / ${MainPageDummyList.length}`}</div>
          <MdNavigateNext className="icon" onClick={next}/>
        </div>
      </div>
      <Carousel
        emulateTouch={true}
        autoFocus={false}
        autoPlay={true}
        centerMode={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        infiniteLoop={true}
        interval={14000}
        transitionTime={2000}
        onChange={upcurrent}
        selectedItem={current}
      >
        {MainPageDummyList.map((v, i) => (
          <div className="slide_wrap">
            <img src={v.img} alt="" className="slide-img" />
            <div className="slide-contents">
              <div className="text-wrap">
                <p>포스트 이미지에 오신것을 환영합니다</p>
                <p> 모든것은 여기에 다있습니다</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </HomeStyle>
  );
};

export default HomeMain;
