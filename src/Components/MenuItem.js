import React, { useState } from "react";
import "../style.css";
import Menu from './menuapi.js';
import MenuCard from "./MenuCard";

const MenuItem = () => {
   const[item,setItem] =  useState(Menu);
   
   const filterItem = (category) =>{
    const updatedList = Menu.filter((curElem) =>{
      return curElem.category === category;
    });

    setItem(updatedList);
   }
  return (
    <>
        <div id="nav-bar">
          <div className="nav-bar_content flex-1">
            <a onClick={()=>filterItem("BREAKFAST")}>breakfast</a>
            <a onClick={()=>filterItem("LUNCH")}>lunch</a>
            <a onClick={()=>filterItem("DINNER")}>dinner</a>
            <a onClick={()=>setItem(Menu)}>all</a>
          </div>
        </div>
        <div className="ternary-section flex-1">
            <MenuCard item = {item}/>      
        </div>
    </>
  );
};

export default MenuItem;
