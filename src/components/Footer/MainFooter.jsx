import React from 'react';
import styled from "styled-components"

const Foot=styled.footer`
    width:100vw;
    background-color:#282A36;
    color:#F8F8F2;
    height:5vh;
    display:flex;
    justify-content:center;
    align-items:center;
    border-top:1px solid #BD93F9;
    box-sizing:border-box;
    position:fixed;
    bottom:0;
    left:0;
    z-index:100;
`

const MainFooter = () => {
    return ( <Foot>made with&nbsp;<i style={{color:"#F21A25"}} className="fas fa-heart"></i>&nbsp;to&nbsp;<i style={{color:"#61DBFB"}} className="fab fa-react fa-spin"></i>&nbsp;by bambusMalpa&copy; 2019</Foot>);
}
 
export default MainFooter;