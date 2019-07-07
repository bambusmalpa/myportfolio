import React from 'react';
import SingleSkill from "./SingleSkill"
import styled from 'styled-components' 



const SkillsWrapper=styled.section`
    display:flex;
    height:100%;
    flex-direction:column;
    align-items:center;
    
    >.skillsTitle{
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:3rem;
        display:block;
        min-height:10vh;
        color:#F8F8F2;
        text-align:center;
        animation:fadeIn 0.5s;
    }
    >.skillsList{
        min-height:50vh;
        width:100%;
        display:flex;
        flex-direction:column;
        justify-self:center;
        margin-bottom:5vh;
    }
    @media(min-width:767px){
        
        >.skillsTitle{
            height:10vh;
        }
        >.skillsList{
       
        width:80%;
        display:flex;
        flex-wrap:wrap;
        flex-direction:row;
        justify-content: space-around;
        align-items:space-around;
        margin-bottom:0vh;
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
        
            
            <SkillsWrapper>
               
                <h1 className="skillsTitle">UMIEJĘTNOŚCI I TECHNOLOGIE</h1>
                <ul className="skillsList">
                    {skills}
               </ul>
               
        </SkillsWrapper>
       
    );}
}
 
export default Skills;