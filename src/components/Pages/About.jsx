import React from 'react';
import styled from "styled-components"
const AboutWraper=styled.section`
    color:#F8F8F2;
    height:90%;
    width:80%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    margin-left:auto;
    margin-right:auto;

    &::before{
        color:#BD93F9;
        content:"<body>";
        font-size:12px;
        opacity:0.5;
        animation:fadeIn 0.5s;
    }

    &::after{
        content:"</body>";
        color:#BD93F9;
        font-size:12px;
        opacity:0.5;
        animation:fadeIn 0.5s;
    }
    >.about__title{
        position:relative;
        animation:fadeIn 0.5s;
        &::before{
        top:-50%;
        left:0%;
        position:absolute;
        color:#BD93F9;
        content:"<h1>";
        font-size:12px;
        opacity:0.5;
        animation:fadeIn 0.5s;
        font-weight:400;
    }

    &::after{
        top:100%;
        left:0%;
        position:absolute;
        content:"</h1>";
        color:#BD93F9;
        font-size:12px;
        opacity:0.5;
        font-weight:400;
        animation:fadeIn 0.5s;
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
    <p className="about__paragraph">Zaintersowałem się front-endem pod koniec 2017 roku, przypadkiem trafiłem na film na YouTube pokazujący podstawy HTMLa.</p>
    <p className="about__paragraph">Zafascynowało mnie że prosty tekst napisany w "Notatniku" można zmienić w żywy mechanizm i pokazać całemu światu.</p>
    <p className="about__paragraph">Uczę się przy pomocy kursów internetowych, czytam dokumentację, pozyskuje informacje na forach programistycznych.</p>
    <p className="about__paragraph">Jesienią 2018 roku uczestniczyłem w warsztatach "Software Talks" organizowanych przez firmę PGS.</p>
    <p className="about__paragraph">Oprócz progranowania interesuję się militariami i airsoftem.</p>
    </AboutWraper>);
}
 
export default About;