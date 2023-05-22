import React, { Component } from "react"
import {FormStyle,InputLabel, FormInput, FormButton} from './Form.styled';
export class Form extends Component {
 state = {
  name: ''
  }


  handelInputChange = (e) => {
    console.log(e.currentTarget.value);
   this.setState({name: e.currentTarget.value})
  }

  handelOnSubmit=(e)=>{
    e.preventDefault();
    this.props.onSubmitForm(this.state.name);
    this.reset();
  }

  reset =() => {
    this.setState({name:''})
  }
    render(){
return( <FormStyle onSubmit={this.handelOnSubmit}>
      <InputLabel>
        Name
      <FormInput
  type="text"
  name="name"
  value={this.state.name}
  onChange = {this.handelInputChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
</InputLabel>

<FormButton type='submit'>Add contact</FormButton>
  </FormStyle>



)

    }
}