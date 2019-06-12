import React from 'react';
import MainNav from "./MainNav/MainNav"
import styled from "styled-components"
import MenuButton from './MenuButton';
import Logo from "./logo/Logo"

const HeaderContainer=styled.header`
    position:relative;
    background-color:#282A36;
    min-height:10vh;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border-bottom:3px solid #4A4C58;
    @media(min-width:767px){
        width:10vw;
        height:0vh;
    }
        
`
const LogoContainer=styled.div`
        width:10vh;
         
     }
     @media(min-width:767px){
        height:10vh;
       width:10vw;
       border-right:1px solid #000000;


     }


`

class MainHeader extends React.Component{
   



    render(){
    return ( 
    
    <HeaderContainer>
        <LogoContainer>
        <Logo/>
        </LogoContainer>
        <MainNav menuOn={this.props.menuOn} toggleMenuOn={this.props.toggleMenuOn}/>
        <MenuButton menuOn={this.props.menuOn} toggleMenuOn={this.props.toggleMenuOn}  />
    
    </HeaderContainer>
    );}
}
 
export default MainHeader;