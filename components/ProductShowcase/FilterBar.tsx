"use client";

import style from "./productShowCase.module.css";
import arrowLeft from "../../public/icons/arrow-left.svg";
import arrowRight from "../../public/icons/arrow-right.svg";
import arrowDown from "../../public/icons/arrow-down.svg";
import right from "../../public/icons/right.svg";
import Image from "next/image";
import { listItems } from "@/utils/SeederData";
import { useState } from "react";
import useWindowWidth from "@/utils/useWindowWidth";
export default function FilterBar({filterToggle,setFilterToggle}:{filterToggle:boolean,setFilterToggle:()=>void}): React.ReactElement {
  const [dropDownToggle, setDropDownToggle] = useState<boolean>(false);
  const screenWidth=useWindowWidth()
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        {screenWidth > 620 &&<h2 style={{ fontWeight: "800", fontSize: "18px" }}>3425 ITEMS</h2>}
        <button
          onClick={() => {
            setFilterToggle(!filterToggle);
          }}
        >
          {screenWidth > 620 &&<Image
            src={filterToggle === true ? arrowRight : arrowLeft}
            alt="Image of an arrow"
          ></Image>}
          {filterToggle === true ? "HIDE " : "SHOW "}FILTER
        </button>
      </div>
      {screenWidth < 620 &&<div>|</div>}
      <div style={{ position: "relative" }}>
        <button onClick={() => setDropDownToggle(!dropDownToggle)}>
        {screenWidth > 620 &&<Image src={arrowDown} alt="Image of an arrow downwards"></Image>}
          RECOMMENDED
        </button>
        <DropDownMenu dropDownToggle={dropDownToggle}></DropDownMenu>
      </div>
    </form>
  );
}


function DropDownMenu({
    dropDownToggle,
  }: {
    dropDownToggle: boolean;
  }): React.ReactElement {
    const [selectedCategory, setSelectedCategory] = useState<number>(0);
    
    return (
      <>{dropDownToggle&&<div className={style["drop-down"]}>
        {listItems.map((el, i) => (
          <li
            style={{ fontWeight: `${selectedCategory === i ? "1000" : "100"}` }}
            onClick={() => setSelectedCategory(i)}
            key={i}
          >
            {selectedCategory === i && (
              <Image className={style.img} src={right} alt="correct option Indicator"></Image>
            )}{" "}
            {el.name}
          </li>
        ))}
      </div>}
      </>);
  }
  