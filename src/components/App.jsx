import React, { Component } from "react";
import { nanoid } from 'nanoid';
import {Section} from './Section';
import {Form} from './Form';
import{ContactList} from './ContactList';
import {Container} from './App.styled'
export class App extends Component{
  state = {
  contacts: [],
  }

formSubmitHandler = data => {
  console.log(data)
  
  const contact = {
    id:  nanoid(),
    data,
  }
  console.log(contact);
  this.setState(prevState => ({
contacts: [contact, ...prevState.contacts],
  }));

}

  render(){
    const {contacts} = this.state;
    return (<Container>
  <Section title ='Phonebook'>
    <Form onSubmitForm={this.formSubmitHandler}/> 
  </Section> 
   
  <Section title ='Contacts'>
   <ContactList contacts={contacts}/>
   </Section> 

   </Container>
    );
  }
  
};
