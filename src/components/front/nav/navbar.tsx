import React from "react";
import { NavBarStyle } from "./navstyle";
import Link from "next/link";

const list = [
  {
    id: "home",
    name: "home",
  },
  {
    id: "about",
    name: "About Me",
  },
  {
    id: "skill",
    name: "Skill",
  },
  {
    id: "copyright",
    name: "copyright",
  },
];
const NavBar = () => {
  return (
    <NavBarStyle>
      <div className="logo-wrap">
        <Link href="/front">
          <a>
            <span className="logo">Leemit</span>
          </a>
        </Link>
      </div>
      <div className="list-wrap">
        <ul className="list">
          {list.map((v, i) => (
            <li key={i}>
              <Link href={`/front/${v.id}`}>
                <a>{v.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </NavBarStyle>
  );
};

export default NavBar;
