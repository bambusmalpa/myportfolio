import React from 'react';
import styled from "styled-components"
import image01 from "./images/image01.webp"
import image02 from "./images/image02.webp"
import image03 from "./images/image03.webp"
import image04 from "./images/image04.webp"
import SingleWork from './SingleWork';

const WorksTitle=styled.h1`
    color:#F8F8F2;
    height:10vh;
    display:flex;
    justify-content:center;
    align-items:center;
`


const WorksWrapper=styled.section`
    width:90vw;
    height:350vw;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    margin-left:auto;
    margin-right:auto;
    @media(min-width:767px){
        flex-direction:row;
        justify-content:space-around;
        height:85vh;
    }

`

const projects=[{name:"Zegar binarny", link:"https://binaryclock.netlify.com/",github:"https://github.com/bambusmalpa/binary-clock",foto:image01,desc:"Moje początki z JS, zegar pokazujący godzinę w formie kodu binarnego",tech:[{color:"#e34f26",className:"fab fa-html5"},{color:"#0099e5",className:"fab fa-css3-alt"},{color:"#f7df1e",className:"fab fa-js"}]},
{name:"Aplikacja pogodowa", link:"https://bambusmalpa.github.io/React-Weather-App/",github:"https://github.com/bambusmalpa/React-Weather-App",foto:image02,desc:`Pomysł na aplikację pochodzi z warsztatów "Software Talks", pobiera dane z API, generuje wykresy prognozy pogody dla wybranych miast`,tech:[{color:"#e34f26",className:"fab fa-html5"},{color:"#0099e5",className:"fab fa-css3-alt"},{color:"#f7df1e",className:"fab fa-js"},{color:"#9933CC",className:"fab fa-bootstrap"},{color:"#00d8ff",className:"fab fa-react"}]},
{name:"Portfolio dla fotografa", link:"https://marcinpiotrowfoto.netlify.com/",github:"https://github.com/bambusmalpa/reactfotographerportfolio",foto:image03,desc:`Strona wykonana w React, z użyciem React Router. Strona w produkcji`,tech:[{color:"#e34f26",className:"fab fa-html5"},{color:"#0099e5",className:"fab fa-css3-alt"},{color:"#f7df1e",className:"fab fa-js"},{color:"#9933CC",className:"fab fa-bootstrap"},{color:"#00d8ff",className:"fab fa-react"}]},
{name:"Nowy projekt logo", link:"https://mplogo.netlify.com/",github:"https://github.com/bambusmalpa/smirasowelogo",foto:image04,desc:`Przeprojektowane logo dla prywatnego fotografa`,tech:[{color:"#e34f26",className:"fab fa-html5"},{color:"#cc0000",className:"fas fa-file-image"}]}
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