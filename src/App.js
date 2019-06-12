import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router} from "react-router-dom";
import Content from "./components/Content/Content"
import MainHeader from "./components/MainHeader/MainHeader"
import MainFooter from "./components/Footer/MainFooter"

const AppView=styled.div`

font-family: 'Inconsolata', monospace;
  font-size:15px;
  width:100%;
  display:flex;
  flex-direction:column;
  @media(min-width:767px){
      height:100vh;
    
    }
  `
    const Main=styled.div`
      width:100%;
      display:flex;
      flex-direction:column;
    @media(min-width:767px){
      flex-direction:row;
    
    }
    `

class App extends React.Component {
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
    <AppView>
      <Main>
      <Router className="main__view">
        <MainHeader menuOn={this.state.menuOn} toggleMenuOn={this.toggleMenuOn}/>
        <Content  menuOn={this.state.menuOn}/>
      </Router>
      </Main>
      <MainFooter/>
      
    </AppView>
  );}
}

export default App;
