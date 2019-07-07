import React from 'react';
import SingleSkill from "./SingleSkill"
import styled from 'styled-components' 

const SkillsTitle=styled.h1`
    font-size:3rem;
    height:10vh;
    color:#F8F8F2;
    text-align:center;

    
`

const SkilsWrapper=styled.section`
    width:100%;
    display:flex;
    color:#F8F8F2;
    list-style:none;
    background-color:#44475A;
    
    flex-direction:column;
    justify-content:flex-start;
  

    
    @media(min-width:767px){
        height:90%;
        
        justify-content:center;
        >ul{
        margin-left:auto;
        margin-right:auto;
        justify-content:space-between;
        display:flex;
        flex-wrap:wrap;
        flex-direction:row;
        height:85vh;
        width:80vw;
        animation:getIn 1s;
        @keyframes getIn {
           from{opacity:0}
           to{opacity:1}
       }
    }
       
    }
     

`
const skillArray=[{color:"#e34f26",className:"fab fa-html5", name:"index.html",description
:"W projektach korzystam z semantycznych tagów HTML, staram się dbać o jak najlepszą dostępność."},
{color:"#0099e5",className:"fab fa-css3-alt",name:"style.css",description
:"Świetnie radzę sobie z nowymi funkcjami CSS jak flex i grid."},
{color:"#f7df1e",className:"fab fa-js",name:"sctipt.js",description
:"Znam metody tablic, stringów i obiektów. Potrafię odnaleźć się w asynchronicznym JS, korzystam z API."},
{color:"#9933CC",className:"fab fa-bootstrap",name:"bootstrap.css",description
:"Bootstrapa używam głównie do stylowania prototypów prostych aplikacji."},
{color:"#6cc24a",className:"fab fa-node",name:"node.js",description
:"W Node stawiam dopiero pierwsze kroki. NPM używam w codziennej nauce."},
{color:"#c51162",className:"fab fa-sass",name:"style.sass",description
:"Znam składnię, korzystam głównie w postaci biblioteki React Styled Components."},
{color:"#00d8ff",className:"fab fa-react",name:"React.jsx",description
:"Moja sympatia do Reacta zaczęła się z pierwszym napisanym stanowym komponentem;D"},
{color:"#F1502F",className:"fab fa-git-alt",name:".git",description
:"Swobodnie używam systemów kontroli wersji:D"},
{color:"#cc0000",className:"fas fa-file-image",name:"Photoshop.psd",description
:"Do obróbki grafik głównie używam Gimpa, pracowałem z grafiką wektorową."},
];

const skills=skillArray.map((el)=>{
    return <SingleSkill key={el.name} className="SkillWrapper__element"txt={el}/>
})

class Skills extends React.Component {
   
render(){
    return (
        
            
            <SkilsWrapper>
               
                <SkillsTitle>UMIEJĘTNOŚCI I TECHNOLOGIE</SkillsTitle>
                <ul>
                    {skills}
               </ul>
               
        </SkilsWrapper>
       
    );}
}
 
export default Skills;