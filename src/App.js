import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router} from "react-router-dom";
import Content from "./components/Content/Content"
import MainHeader from "./components/MainHeader/MainHeader"
import MainFooter from "./components/Footer/MainFooter"

const AppView=styled.div`

  font-family: 'Open Sans', sans-serif;
  font-size:15px;
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
`

class App extends React.Component {

render(){
  return (
    <AppView>
      <Router>
        <MainHeader/>
        <Content/>
      </Router>
      <MainFooter/>
    </AppView>
  );}
}

export default App;