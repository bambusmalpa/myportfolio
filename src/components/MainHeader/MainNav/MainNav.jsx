import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUserAlt, faTools, faLaptopCode, faMobileAlt} from '@fortawesome/free-solid-svg-icons'

import styled from "styled-components";

const MainNavList=styled.nav`
  position:absolute;
    display:block;
    top:100%;
    left:0;
    
    .navList{
     display:flex;
     justify-content:flex-start;
     width:100vw;
     height:10vh;
     transition:1s;
     background-color:#282A36;
     
    }
    .navList.off{
      transform:translateX(-100%)
    }


    .navList__li{
      margin:0;
      display:flex;
      width:20%;
      justify-content:center;
      align-items:center;
    }


    .navList__li>.navList__link{
      text-decoration:none;
     display:block;
     line-height:10vh;
     width:100%;
     text-align:center;
     color:#6272A4;
     font-size:1.2rem;
     transition:0.5s;
    }
    .navList__li>.navList__link.active{
      font-size:1.2rem;
      color:#F8F8F2;
      
      border-bottom:1px solid #FF79C6;
    }

    @media(min-width:767px){
      .navList{
        flex-direction:column;
        width:10vw;
        height:80vh;
        border-right:1px solid #000000;
      }
      .navList.off{
      transform:translateX(0%)
    
    }
      .navList__li{
      margin:0;
      display:flex;
      width:100%;
      justify-content:center;
      align-items:center;
    
    }
    .navList__li>.navList__link{



    }

    
    }
  
  `



const MainNav = (props) => {

  
  
    return (<MainNavList>
      <ul className={props.menuOn?"navList on":"navList off"}>
        <li className="navList__li">
          <NavLink className="navList__link" title="HOME" exact to="/"><FontAwesomeIcon icon={faHome} /></NavLink>
        </li>
        <li className="navList__li">
          <NavLink className="navList__link" title="O MNIE" to="/about"><FontAwesomeIcon icon={faUserAlt} /></NavLink>
        </li>
        <li className="navList__li">
          <NavLink className="navList__link" title="TECHNOLOGIE" to="/skills"><FontAwesomeIcon icon={faTools} /></NavLink>
        </li>
        <li className="navList__li">
          <NavLink className="navList__link" title="PROJEKTY"to="/myworks"><FontAwesomeIcon icon={faLaptopCode} /></NavLink>
        </li>
        <li className="navList__li">
          <NavLink className="navList__link" title="KONTAKT" to="/contact"><FontAwesomeIcon icon={faMobileAlt} /></NavLink>
        </li>
        </ul>
        </MainNavList>


    );
}
 
export default MainNav;