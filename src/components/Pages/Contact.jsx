import React from "react";
import axios from "axios";
import styled from "styled-components"


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
      <form onSubmit={this.handleForm}>
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
      </form>
    );
  }
}

export default Form;