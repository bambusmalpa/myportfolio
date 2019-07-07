import React from 'react';
import {Route} from "react-router-dom";
import Home from "../Pages/Home"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Skills from "../Pages/Skills"
import MyWorks from "../Pages/MyWorks"
import styled from "styled-components"

const ContentContainer=styled.main`
    flex: 1;
    background-color:#44475A;
    transition:0.5s;
    overflow-x: hidden;
    min-height:70vh;
    &.small{
        margin-top:10vh;
        
    }
    &.big{
        margin-top:0vh;
        transition-delay:1.2s;
    }
    @media(min-width:767px){
        flex-direction:row;
        height:95vh;
       
       &.small{
        padding-top:0vh;
        
     }

`

const Content = (props) => {
    return (  <ContentContainer className={props.menuOn?"small":"big"}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/myworks" component={MyWorks} />
        <Route path="/contact" component={Contact} />
        </ContentContainer>


    );
}
 
export default Content;