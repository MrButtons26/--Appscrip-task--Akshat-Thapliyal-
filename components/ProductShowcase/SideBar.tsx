'use client'


import style from './productShowCase.module.css';
import { sideBarData } from '@/utils/SeederData';
import arrowDown from '../../public/icons/arrow-down.svg';
import Image from 'next/image';
import { useState } from 'react';

export default function SideBar({filterToggle}:{filterToggle:boolean}): React.ReactElement {
  const [activeDropDown,setActiveDropDown]=useState<number[]>([-1])
  return (
    <>
    {filterToggle&&<aside className={style['side-bar']}>
        <form action="" style={{display:'flex',gap:'10px', padding:'20px 0px 15px 5px', borderBottom:'1.5px solid rgba(233, 230, 230, 0.774)'}}><input  type="checkbox" id="customize" />
        <label style={{fontFamily:"simplonNorm",fontWeight:'800',fontSize:'14px',color:'rgba(179, 176, 176, 0.774)'}} htmlFor="customize">CUSTOMIZABLE</label>
        </form>
      {sideBarData.map((el, i) => (
        <button key={i}>
           <div> 
          <h2>{el.category}</h2>
          <Image onClick={()=>{if(activeDropDown.find((el)=>el===i+1)){setActiveDropDown(activeDropDown.filter((el)=>el!==i+1))}else{setActiveDropDown((el)=>[...el,i+1])}}} 
          style={{cursor:'pointer'}}
            src={arrowDown}
            alt="Image of an arrow facing downwards"
          />
          </div>
          <h3>{el.subCategory}</h3>
          {activeDropDown.find((el)=>el===i+1)&&<DropDownSideBar></DropDownSideBar>}
        </button>
      ))}
    </aside>}
    </>
  );
}
function DropDownSideBar():React.ReactElement{
  return(
    <form className={style['side-bar-drop-down']}>
      <div>
      <input type="checkbox"/>
      <label style={{fontFamily:"simplonNorm",fontWeight:'800',fontSize:'14px',color:'rgba(179, 176, 176, 0.774)',marginLeft:'6px'}} htmlFor="customize">MEN</label>
      </div>
       <div>
      <input type="checkbox" />
      <label style={{fontFamily:"simplonNorm",fontWeight:'800',fontSize:'14px',color:'rgba(179, 176, 176, 0.774)',marginLeft:'6px'}} htmlFor="customize">WOMEN</label>
      </div>
      <div>      
      <input type="checkbox" />
      <label style={{fontFamily:"simplonNorm",fontWeight:'800',fontSize:'14px',color:'rgba(179, 176, 176, 0.774)',marginLeft:'6px'}} htmlFor="customize">BABY</label>
      </div>    
    </form> 
  )
}