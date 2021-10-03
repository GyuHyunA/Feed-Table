import { IMAGES } from "../assets/images";

export const MainPageDummyList = [
  { id: 0, img: IMAGES.MAIN_IMG1 },
  { id: 1, img: IMAGES.MAIN_IMG2 },
  { id: 2, img: IMAGES.MAIN_IMG3 },
  { id: 3, img: IMAGES.MAIN_IMG4 },
];

export const Dummylist = [
  {
    id: 0,
    title: "메인 1",
    subtitle: "메인서브 1",
    link: (
      <div className="link-wrap">
        <span>링크1</span>
      </div>
    ),
    img: IMAGES.MAIN_IMG1,
  },
  {
    id: 1,
    title: "메인 2",
    subtitle: "메인서브 2",
    link: (
      <div className="link-wrap">
        <span>링크2</span>
      </div>
    ),
    img: IMAGES.MAIN_IMG2,
  },
  {
    id: 2,
    title: "메인 3",
    subtitle: "메인서브 3",
    link: (
      <div className="link-wrap">
        <span>링크3</span>
      </div>
    ),
    img: IMAGES.MAIN_IMG3,
  },
  {
    id: 3,
    title: "메인 4",
    subtitle: "메인서브 4",
    link: (
      <div className="link-wrap">
        <span>링크4</span>
      </div>
    ),
    img: IMAGES.MAIN_IMG4,
  },
];
