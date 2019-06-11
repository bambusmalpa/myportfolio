import React from 'react';
import styled from "styled-components"

const SkillTag =styled.li`
    display:block;
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:50px;
    
    border:1px solid #282A36;
    transition:0.5s;
    &>i{
        
    }
    @media(min-width:767px){
        height:100px;
        width:150px;
        font-size:25px;
        border:none
    }
`

const SkillDescription=styled.div`
    &.on{
    text-align:center;
    animation:open 0.2s;
    height:50px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;}
    
    &.off{
        display:none;
    }

    @keyframes open {
        0%{height:0;
        opacity:0};
        75%{height:50px;
            opacity:0}
        100%{height:50px;
        opacity:1;}
    }

`

class SingleSkill extends React.Component{
state={
    active:false
}

toggleActive=()=>{
    this.setState({
        active:!this.state.active
    })
}

render(){
    
    return(
    <>

        <SkillTag onClick={this.toggleActive} style={this.state.active?{color:"#6272ff"}:{color:"#F8F8F2"}} ><i key={this.props.txt.name} style={{color:this.props.txt.color}} className={this.props.txt.className}></i>{this.props.txt.name}</SkillTag>
        <SkillDescription className={this.state.active?"on":"off"}>{this.props.txt.description}</SkillDescription>
    </>)
}





}
export default SingleSkill