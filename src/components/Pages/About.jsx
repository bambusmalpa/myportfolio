import React from 'react';
import styled from "styled-components"
const AboutWraper=styled.section`
    padding-top:5vh;
    color:#F8F8F2;
    width:80%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    margin-left:auto;
    margin-right:auto;
    >.about__title{
        height:10vh;
        font-size:3rem;
        animation:fadeIn 0.5s;
        text-align:center;
    }
    >.about__paragraph{
        font-size:1rem;
        margin-bottom:1rem;
        @media(min-width:767px){
        font-size:1.5rem;}
    }

   
    }
    >.about__paragraph:nth-child(odd){
        animation:inLeft 0.5s ;
    }
    >.about__paragraph:nth-child(even){
        animation:inRight 0.5s ;
    }
    
    @keyframes inLeft{
        from{transform:translateX(-100%)};
        to{transform:translateX(0)}
    }
    @keyframes inRight{
        from{transform:translateX(100%)};
        to{transform:translateX(0)}
    }
    @keyframes fadeIn {
        from{transform:scale(0.1)};
        to{transform:scale(1)}
    }
    @media(min-width:767px){
        width:60%;

    }
    

`
const About = () => {
    return (
    <AboutWraper>
    <h1 className="about__title">O MNIE</h1>
    <p className="about__paragraph">Nazywam się Marcin Krawiec</p>
    <p className="about__paragraph">Zainteresowałem się front-endem pod koniec 2017 roku, przypadkiem trafiłem na film na YouTube pokazujący podstawy HTMLa.</p>
    <p className="about__paragraph">Zafascynowało mnie że prosty tekst napisany w "Notatniku" można zmienić w żywy mechanizm i pokazać całemu światu.</p>
    <p className="about__paragraph">Uczę się przy pomocy kursów internetowych, czytam dokumentację, pozyskuje informacje na forach programistycznych.</p>
    <p className="about__paragraph">Jesienią 2018 roku uczestniczyłem w warsztatach "FrontDev" organizowanych przez firmę PGS.</p>
    <p className="about__paragraph">Oprócz progranowania interesuję się militariami i airsoftem.</p>
    </AboutWraper>);
}
 
export default About;
