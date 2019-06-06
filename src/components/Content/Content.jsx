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
    overflow:hidden;
    @media(min-width:767px){
       margin-left:10vw;
     }

`

const Content = () => {
    return (  <ContentContainer>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/myworks" component={MyWorks} />
        <Route path="/contact" component={Contact} />
        </ContentContainer>


    );
}
 
export default Content;