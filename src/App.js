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
  height:100vh;
  display:flex;
  flex-direction:column;
  
  >.main__view{
    display:flex;
    flex-direction:column;
    @media(min-width:767px){
      flex-direction:row;
    
    }
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
      <Router className="main__view">
        <MainHeader menuOn={this.state.menuOn} toggleMenuOn={this.toggleMenuOn}/>
        <Content  menuOn={this.state.menuOn}/>
      </Router>
      <MainFooter/>
    </AppView>
  );}
}

export default App;
