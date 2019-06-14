import React from "react";
import axios from "axios";
import styled from "styled-components"
import ReactMapboxGl  from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYmFtYnVzbWFscGEiLCJhIjoiY2p3dWE2ZncxMDkwazN5bW9zZm0weXBwdSJ9.5d-6mqfIaZJudgRWWdgd2g",
  interactive:false,
  
});

const ContactSection=styled.section`
height:120vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;

  >.contact__element{
    border:2px solid #282A36;;
    width:90vw;
    height:90vw;
    animation: getIn 1s;
  }



  @media(min-width:767px){
    flex-direction:row;
    height:95vh;
    width:100%;

    >.contact__element{
    border:2px solid #282A36;;
    width:30vw;
    height:30vw;
  }

  }

`
const FormWrapper=styled.form`
  
`
const MapWrapper=styled.div`



`

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: "", surname: "", email: "", message: "", sended:"Wyślij wiadomość"};
  }

  handleForm = e => {
    axios.post(
    "https://formcarry.com/s/H--MPhtz3Wh",
      
      this.state, 
      {headers: {"Accept": "application/json"}}
      )
      .then(function (response) {
        console.log(response);
        console.log(e)
        
        
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(this)

      this.setState({name: "", surname: "", email: "", message: "", sended:"Wiadomość wysłana"})
    e.preventDefault();
  }

  messageSended=()=>{
    this.setState({sended:true})
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <ContactSection>

      <FormWrapper className="contact__element" onSubmit={this.handleForm}>
        <p>{this.state.sended}</p>
        <label htmlFor="name">Imię</label>
        <input type="text" id="name" name="name" onChange={this.handleFields} />

        <label htmlFor="surname">Nazwisko</label>
        <input type="text" id="surname" name="surname" onChange={this.handleFields} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={this.handleFields} />

        <label htmlFor="message">Twoja wiadomość</label>
        <textarea name="message" id="message" onChange={this.handleFields}></textarea>
        
        <button type="submit">WYŚLIJ</button>
      
      </FormWrapper>

      <MapWrapper className="contact__element">
      <Map center={[ 22.004722, 50.033611]}
      style="mapbox://styles/bambusmalpa/cjwvtcdvo0fhi1cnjyu7tnf2d"
      
      containerStyle={{
        height: "100%",
        width: "100%"}}>
      </Map>

      </MapWrapper>
      </ContactSection>
    );
  }
}

export default Form;