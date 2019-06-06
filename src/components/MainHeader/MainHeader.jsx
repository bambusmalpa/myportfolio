import React from 'react';
import MainNav from "./MainNav/MainNav"
import styled from "styled-components"
import MenuButton from './MenuButton';

const HeaderContainer=styled.header`
    position:relative;
    background-color:#282A36;
    height:15vh;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border-bottom:3px solid #4A4C58;

     >.logoPlaceHolder{
         width:100px;
         height:100px;
         background-color:#50FA7B;
     }
     @media(min-width:767px){
       position:absolute;
       width:10vw;
       border-right:1px solid #000000;
     }
`

class MainHeader extends React.Component{
    state={
        menuOn:false,
      }
    toggleMenuOn=()=>{
        this.setState({
          menuOn:!this.state.menuOn
        })
      }



    render(){
    return ( 
    
    <HeaderContainer>
        <div className="logoPlaceHolder"></div>
       
        <MainNav menuOn={this.state.menuOn} toggleMenuOn={this.toggleMenuOn}/>
        <MenuButton menuOn={this.state.menuOn} toggleMenuOn={this.toggleMenuOn}  />
    
    </HeaderContainer>
    );}
}
 
export default MainHeader;