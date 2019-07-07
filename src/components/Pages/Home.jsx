import React from 'react';
import styled from "styled-components"
import face from "./images/face.svg"


const HomeWrapper= styled.section`
        display:flex;
        flex-direction:column;
        align-items:center;
        height:100%;
    >.home__title{
        color:#F8F8F2;
        width:100%;
        min-height:10vh;
        text-align:center;
        font-size:3rem;
        animation:fadeIn 0.5s;
        @media (min-width:767px){
        margin-top:5vh;
       }
    }
    >.logo__container{
       background-image:url(${face});
       background-repeat:no-repeat;
       background-position:center center;
       height:70vh;
       width:60vw;
       @media (min-width:767px){
        width:80vw;
       }
       
    }
`
const Home = () => {
  
    return (
        <HomeWrapper>
            <h1 className="home__title">WITAJ MA MOJEJ STRONIE!</h1>
            <div className="logo__container"></div>
        </HomeWrapper>

    );
}
 
export default Home;