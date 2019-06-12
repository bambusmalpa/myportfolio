import React from 'react';
import MainNav from "./MainNav/MainNav"
import styled from "styled-components"
import MenuButton from './MenuButton';
import Logo from "./logo/Logo"

const HeaderContainer=styled.header`
    position:relative;
    width:100%;
    height:10vh;
    background-color:#282A36;
    display:flex;
    justify-content:space-around;
    align-items:center;
   
  
    
    
    @media(min-width:767px){
        flex-direction:column;
        width:5vw;
        height:95vh;
        justify-content:flex-start;
        align-items:center;
    }
        
`
const LogoContainer=styled.div`
    width:20vw;
         
     }
     @media(min-width:767px){
        width:5vw;
        height:5vw;
        background-color:#000000;
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