import React from 'react';
import styled from "styled-components"
import image01 from "./images/image01.webp"
import image02 from "./images/image02.webp"
import image03 from "./images/image03.webp"
import image04 from "./images/image04.webp"
import image05 from "./images/image05.webp"
import image06 from "./images/image06.webp"
import image07 from "./images/image07.webp"
import image08 from "./images/image08.webp"
import SingleWork from './SingleWork';

const WorksTitle=styled.h1`
    color:#F8F8F2;
    min-height:10vh;
    font-size:3rem;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    animation:fadeIn 0.5s;
`


const WorksWrapper=styled.section`
    width:80vw;
    display:grid;
    grid-template-columns:80vw;
    grid-template-rows:80vw 80vw 80vw 80vw 80vw 80vw 80vw 80vw;
    margin-left:auto;
    margin-right:auto;
    grid-gap: 1em;
    margin-bottom:10vh;
    @media(min-width:576px){
        grid-template-rows:40vw 40vw 40vw 40vw ;
        grid-template-columns:40vw 40vw ;}
    @media(min-width:768px){
        grid-template-rows:25vh 25vh 25vh ;
        grid-template-columns:25vw 25vw 25vw;}
    @media(min-width:1200px){
        grid-template-rows:40vh 40vh ;
        grid-template-columns:20vw 20vw 20vw 20vw ;
        
    }
`

const projects=[{name:"Zegar binarny", link:"https://binaryclock.netlify.com/",github:"https://github.com/bambusmalpa/binary-clock",foto:image01,desc:"Moje początki z JS, zegar pokazujący godzinę w formie kodu binarnego",tech:[{color:"#e34f26",className:"fab fa-html5"},{color:"#0099e5",className:"fab fa-css3-alt"},{color:"#f7df1e",className:"fab fa-js"}]},
{name:"Aplikacja pogodowa", link:"https://bambusmalpa.github.io/React-Weather-App/",github:"https://github.com/bambusmalpa/React-Weather-App",foto:image02,desc:`Pomysł na aplikację pochodzi z warsztatów "Software Talks", pobiera dane z API, generuje wykresy prognozy pogody dla wybranych miast`,tech:[{color:"#e34f26",className:"fab fa-html5"},{color:"#0099e5",className:"fab fa-css3-alt"},{color:"#f7df1e",className:"fab fa-js"},{color:"#9933CC",className:"fab fa-bootstrap"},{color:"#00d8ff",className:"fab fa-react"}]},
{name:"Portfolio dla fotografa", link:"https://marcinpiotrowfoto.netlify.com/",github:"https://github.com/bambusmalpa/reactfotographerportfolio",foto:image03,desc:`Strona wykonana w React, z użyciem React Router. Strona w produkcji`,tech:[{color:"#e34f26",className:"fab fa-html5"},{color:"#0099e5",className:"fab fa-css3-alt"},{color:"#f7df1e",className:"fab fa-js"},{color:"#9933CC",className:"fab fa-bootstrap"},{color:"#00d8ff",className:"fab fa-react"}]},
{name:"Nowy projekt logo", link:"https://mplogo.netlify.com/",github:"https://github.com/bambusmalpa/smirasowelogo",foto:image04,desc:`Przeprojektowane logo dla prywatnego fotografa`,tech:[{color:"#e34f26",className:"fab fa-html5"},{color:"#cc0000",className:"fas fa-file-image"}]},
{name:"Moje portfolio", link:"https://marcinkrawiecfrontend.netlify.com",github:"https://github.com/bambusmalpa/myportfolio",foto:image05,desc:`Moje portfolio, layout ma nawiązywać do edytora kodu Visual Sudio Code, kolorystyka zaczerpnięta z motywu "Dracula soft" `,tech:[{color:"#00d8ff",className:"fab fa-react"},{color:"#c51162",className:"fab fa-sass"},{color:"#0099e5",className:"fab fa-css3-alt"},{color:"#cc0000",className:"fas fa-file-image"},{color:"#e34f26",className:"fab fa-html5"}]},
{name:`Złote myśli "Krula" `, link:"https://krulewskiezlotemysli.netlify.com/",github:"https://github.com/bambusmalpa/kingsSentencesGenerator",foto:image06,desc:`Moja odpowiedź na "analogową" wersję generatora wypowiedzi jednego z najbardziej "memicznych" polityków w Polsce :D`,tech:[{color:"#0099e5",className:"fab fa-css3-alt"},{color:"#e34f26",className:"fab fa-html5"}]},
{name:`WWC30`, link:"https://wwc30bambusmalpa.netlify.com/",github:"https://github.com/bambusmalpa/wwc30",foto:image07,desc:`Projekt "PSD to HTML&CSS". Wzór pobrany z grupy "Weekly WebDev Challenge"`,tech:[{color:"#0099e5",className:"fab fa-css3-alt"},{color:"#e34f26",className:"fab fa-html5"},{color:"#c51162",className:"fab fa-sass"}]},

{name:`WWC37`, link:"https://wwc37bambusmalpa.netlify.com/",github:"https://github.com/bambusmalpa/weeklyWebChallange37",foto:image08,desc:`Projekt "PSD to HTML&CSS". Wzór pobrany z grupy "Weekly WebDev Challenge".`,tech:[{color:"#0099e5",className:"fab fa-css3-alt"},{color:"#e34f26",className:"fab fa-html5"},{color:"#c51162",className:"fab fa-sass"},{color:"#f7df1e",className:"fab fa-js"}]}
]
const works=projects.map((el,index)=>{

    return <SingleWork key={index} data={el}/>
})

const MyWorks = () => {
    return (<>
        <WorksTitle className="works__title">MOJE PROJEKTY</WorksTitle>
    <WorksWrapper>
       
       
{works}
</WorksWrapper>
</>);
}
 
export default MyWorks;