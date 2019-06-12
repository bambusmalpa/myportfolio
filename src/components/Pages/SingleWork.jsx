import React from 'react';
import styled from "styled-components"

const ElementWindow=styled.div`
    width:80vw;;
    height:80vw;
    background-position:center;
    background-origin:content-box;
    background-size:cover;
    overflow:hidden;
    
`
const ElementWrapper=styled.div`
text-align:center;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
height:100%;
background-color:rgba(255,255,255,0.8);
`

const SingleWork = (props) => {
   
    
    return (
        <ElementWindow style={{backgroundImage:`url(${props.data.foto})`}}>
        <ElementWrapper>
            
            <p>{props.data.desc}</p>
            <div>{props.data.tech.map((el)=>{
                return <i className={el.className} style={{color:el.color}}></i>
            })}
            </div>
            <div>
            <a href={props.data.link} rel="noopener noreferrer" target="_blank"><i className="fas fa-code"></i>GitHub</a>
            <a href={props.data.github} rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i>Live</a>
            </div>
            </ElementWrapper>
        

        </ElementWindow>
 );
}
 
export default SingleWork;