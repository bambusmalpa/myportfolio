import React from 'react';
import styled from "styled-components"

const Burger=styled.div`
  display:none;
  position:relative;
  width:40px;
  height:25px;
  
@media (max-width:767px){
  display:block;
}
&.hamburger>.bar{
  position:absolute;
  width:100%;
  height:25%;
  background-color:#F8F8F2;
  transition:0.5s;
  top:50%;
  transform:translateY(-50%);
  border-radius:12px;
}
&.hamburger>.bar:nth-of-type(1){
  top:10%;
  transform:translateY(-50%);
  
}
&.hamburger>.bar:nth-of-type(2){
  transform-origin:center center;
}
&.hamburger>.bar:nth-of-type(3){
  top:90%;
  transform:translateY(-50%);
  
}
&.hamburger.on>.bar:nth-of-type(1){
  top:50%;
  transform:translateY(-50%) rotate(-45deg);
  
}
&.hamburger.on>.bar:nth-of-type(2){
    transform:translateY(-50%) scale(0)
}
&.hamburger.on>.bar:nth-of-type(3){
   top:50%;
  transform:translateY(-50%)rotate(45deg);
  
}
`


const MenuButton = (props) => {
  return ( 
      <Burger onClick={props.toggleMenuOn} className={props.menuOn?"hamburger on":"hamburger"}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        </Burger>
   );
}
 
export default MenuButton;