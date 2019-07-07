import React from "react";
import axios from "axios";
import styled from "styled-components"
import ReactMapboxGl  from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYmFtYnVzbWFscGEiLCJhIjoiY2p3dWE2ZncxMDkwazN5bW9zZm0weXBwdSJ9.5d-6mqfIaZJudgRWWdgd2g",
  interactive:false,
  
});

const ContactTitle=styled.h1`
color:#F8F8F2;
text-align:center;
height:10vh;
display:flex;
justify-content:center;
align-items:center;
font-size:3rem;
animation:fadeIn 0.5s;
`

const ContactSection=styled.section`
height:300vw;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
margin-bottom:10vh;
  >.contact__element{
    border:2px solid #282A36;;
    width:80vw;
    height:80vw;
    animation: getIn 1s;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }



  @media(min-width:767px){
    flex-direction:row;
    height:85vh;
    width:100%;

    >.contact__element{
    border:2px solid #282A36;;
    width:25vw;
    height:25vw;
  }

  }

`
const FormWrapper=styled.form`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
  >.input{
    border:none;
    width:90%;
    height:10%;
    background-color:#282A36;
    color:#F8F8F2;
  }
  >.input--big{
    height:30%;
  }
  >.form__message{
    color:#50FA7B;
  }

  

  
`
const MapWrapper=styled.div`
`
const PhoneEmailWrapper=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  font-size:0.8rem;
  color:#F8F8F2;
  >.icon{
    font-size:3rem;
  }
  @media(min-width:992px){
    font-size:1rem;
  }
  
`

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: "", subject: "", email: "", message: "",sended:false};
  }

  

  handleForm = e => {
    axios.post(
    "https://formcarry.com/s/H--MPhtz3Wh",
      
      this.state, 
      {headers: {"Accept": "application/json"}}
      )
      .then(function (response) {
        
        
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(this)

      this.setState({name: "", subject: "", email: "", message: "",sended:true})
    e.preventDefault();
  }

  messageSended=()=>{
    this.setState({sended:true})
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  generateNumber=()=>{
    const phoneNumber=[6,9,6,6,9,7,4,8,0];
    return phoneNumber.join("")
  }
  generateMail=()=>{
    const email=["marcin","krawiec","rzeszow","@","gmail",".","com"];
  return email.join("")
  }

 


  render() {
    return (
      <>
      <ContactTitle>KONTAKT</ContactTitle>
      <ContactSection>
      <PhoneEmailWrapper  className="contact__element">
      <i className="icon fas fa-mobile-alt"></i><span className="contactData" id="phone">{this.generateNumber()}</span>
          <i className="icon fas fa-envelope"></i><span className="contactData" id="email">{this.generateMail()}</span>
          <i className="icon fab fa-github"></i><span className="contactData">
          github.com/bambusmalpa
          </span>
      </PhoneEmailWrapper>
      <FormWrapper className="contact__element" onSubmit={this.handleForm}>

        {this.state.sended?<div className="form__message">Wiadomość wysłana</div>:null}
        <input required className="input input--small" type="text" id="name" name="name" onChange={this.handleFields} placeholder="Imię"/>

        
        <input required className="input input--small" type="text" id="subject" name="subject" onChange={this.handleFields} placeholder="Temat"/>

        
        <input required className="input input--small" type="email" id="email" name="email" onChange={this.handleFields}  placeholder="E-mail"/>

        
        <textarea required className="input input--big" name="message" id="message" onChange={this.handleFields} placeholder="Wiadomość"></textarea>
        
        <button  className="input input--button" type="submit">WYŚLIJ</button>
      
      </FormWrapper>

      <MapWrapper className="contact__element">
      <Map center={[ 22.004722, 50.033611]}
      style={"mapbox://styles/bambusmalpa/cjwvtcdvo0fhi1cnjyu7tnf2d"}
      
      containerStyle={{
        height: "100%",
        width: "100%"}}>
      </Map>

      </MapWrapper>
      


      
      </ContactSection>
      </>
    );
  }
}

export default Form;