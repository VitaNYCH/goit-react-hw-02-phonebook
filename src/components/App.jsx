import React, { Component } from "react"

export class App extends Component{
  state = {
  contacts: [],
  name: ''
  }
handelOnSubmit=(e)=>{
  e.preventDefault()
  console.log(this.state);
}

handelInputChange = (e) => {
  console.log(e.currentTarget.value);
 this.setState({name: e.currentTarget.value})
}

  render(){
    return (<>
    <h2>Phonebook</h2>
      <form onSubmit={this.handelOnSubmit}>
      <label>
        Name
      <input
  type="text"
  name="name"
  value={this.state.name}
  onChange = {this.handelInputChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
</label>

<button type='submit'>Add contact</button>
  </form>
   <h2>Contacts</h2>
 
   </>
    );
  }
  
};
