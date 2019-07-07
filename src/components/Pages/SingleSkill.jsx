import React from 'react';
import styled from "styled-components"

const Wrapp=styled.div`
    display:flex;
    flex-direction:column;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

@media(min-width:767px){
       width:200px;
       justify-content:space-around;
       
`

const SkillTag =styled.li`
    display:block;
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:50px;
    border:1px solid #282A36;
    transition:0.5s;
    
    @media(min-width:767px){
        border:none;
        width:90%;
        font-size:1.5rem;
    }
`

const SkillDescription=styled.div`
    color:#F8F8F2;
    &.on{
    animation:open 0.2s;
    width:80%;
    margin-right:auto;
    margin-left:auto;
    margin-top:10px;
    margin-bottom:10px;
    

    }
    
    &.off{
       display:none;

    }

    @keyframes open {
        0%{height:0;
        opacity:0};
        75%{height:50%;
            opacity:0
        }
        100%{height:100%;
        opacity:1;
       }
    }
    @media(min-width:767px){
        
        &.description{
        font-size:1rem;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:justify;
        width:90%;
        margin-right:auto;
        margin-left:auto;
        }
    

`

class SingleSkill extends React.Component{
state={
    active:false
}

toggleActive=()=>{
    if(window.innerWidth<=767){
    this.setState({
        active:!this.state.active
    })}
}

render(){
    
    return(
   
        <Wrapp>
            <SkillTag onClick={this.toggleActive} style={this.state.active?{color:"#6272ff"}:{color:"#F8F8F2"}} ><i key={this.props.txt.name} style={{color:this.props.txt.color}} className={this.props.txt.className}></i>{this.props.txt.name}</SkillTag>
            <SkillDescription className={this.state.active?"description on":"description off"}>{this.props.txt.description}</SkillDescription>
        </Wrapp>
    )
}





}
export default SingleSkill