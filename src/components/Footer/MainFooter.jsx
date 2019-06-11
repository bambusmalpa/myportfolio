import React from 'react';
import styled from "styled-components"

const Foot=styled.footer`
    width:100;
    background-color:#282A36;
    color:#F8F8F2;
    height:5vh;
    display:flex;
    justify-content:center;
    align-items:center;
    border-top:1px solid #BD93F9;
    box-sizing:border-box;

`

const MainFooter = () => {
    return ( <Foot>made with  <i style={{color:"#F21A25"}} className="fas fa-heart"></i>  to  <i style={{color:"#61DBFB"}} className="fab fa-react fa-spin"></i> by bambusMalpa &copy; 2019</Foot>);
}
 
export default MainFooter;