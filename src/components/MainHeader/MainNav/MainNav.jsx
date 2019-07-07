import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUserAlt, faTools, faLaptopCode, faMobileAlt} from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";

const MainNavList=styled.nav`
    
    .navList{
    top:100%;
    left:0;
    position:absolute;
    width:100%;
    height:10vh;
    display:flex;
    flex-direction:row;
    transition:0.5s;
    transition-delay:0.5s;
    background-color:#282A36;
    z-index:10;
    }
    .navList.off{
      transform:translateX(-100%)
    }


    .navList__li{
      display:block;
      width:20%;
      
    }


    .navList__li>.navList__link{
      position: relative;
      display:flex;
      width:100%;
      height:100%;
      color:#6272A4;
      justify-content:center;
      align-items:center;
      transition:1s;
    
    }
    .navList__li>.navList__link.active{
      color:#F8F8F2;
      border-bottom:1px solid #FF79C6;
    }

    @media(min-width:767px){
      .navList{
        width:10vw;
        height:50vh;
        position:static;
        flex-direction:column;
       
      }
      .navList.off{
        transform:translateX(0)
    
    }
      .navList__li{
        width:100%;
        height:10vh;

        >.navList__link{
          z-index:10;
          width:100%;
        }
        
       
  
       

        }}
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