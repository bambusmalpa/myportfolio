import React from 'react';
import styled from "styled-components"

const ElementWindow=styled.div`
    width:80vw;
    height:80vw;
    background-position:center;
    background-origin:content-box;
    background-size:cover;
    overflow:hidden;
    position:relative;
    @media(min-width:767px){
        width:20vw;
        height:20vw;
    }
`
const ElementWrapper=styled.div`
transition:1s;
&.on{
text-align:center;
display:flex;
flex-direction:column;
justify-content:space-around;
height:100%;
background-color:rgba(255,255,255,0.9);

}
&.off{
   transform:translateY(-100%);
   text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:100%;
}
>.technologies{
    display:flex;
    width:100%;
    justify-content:space-around;
    font-size:40px;
}
>.links{
    margin-left:auto;
    margin-right:auto;
    display:flex;
    width:60%;
   justify-content:space-between;
   >a{
       color:#282A36;
       text-decoration:none;
        font-size:30px;
   }
}
`

class SingleWork extends React.Component {
    state={
        active:false,
    }
    toggleActive=()=>{
        this.setState({
            active:!this.state.active
        })
    }
   
    render(){
    return (
        <>
        <ElementWindow onClick={this.toggleActive} style={{backgroundImage:`url(${this.props.data.foto})`}}>
        <ElementWrapper onClick={this.toggleActive} className={this.state.active?"on":"off"}>
            
            <p className="work__content description">{this.props.data.desc}</p>
            <div className="work__content technologies">{this.props.data.tech.map((el)=>{
                return <i className={el.className} style={{color:el.color}}></i>
            })}
            </div>
            <div className="work__content links">
            <a href={this.props.data.link} rel="noopener noreferrer" target="_blank"><i className="fas fa-code"></i>Live</a>
            <a href={this.props.data.github} rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i>GitHub</a>
            </div>
            </ElementWrapper>
            </ElementWindow></>
 );}
}
 
export default SingleWork;