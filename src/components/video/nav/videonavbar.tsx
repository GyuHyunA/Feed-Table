import React from "react";
import { VideoNavBarStyle } from "./navstyle";
import Link from "next/link";

const list = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "skill",
    name: "Skill",
  },
  {
    id: "Project",
    name: "Project",
  },
  {
    id: "footer",
    name: "copyright",
  },
];
const VideoNavBar = () => {
  return (
    <VideoNavBarStyle>
      <div className="logo-wrap">
        <Link href="/">
          <a>
            <span className="logo">Leemit</span>
          </a>
        </Link>
      </div>
      <div className="list-wrap">
        <ul className="list">
          {list.map((v, i) => (
            <li key={i}>
              <Link href={`/front`}>
                <a>{v.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </VideoNavBarStyle>
  );
};

export default VideoNavBar;
