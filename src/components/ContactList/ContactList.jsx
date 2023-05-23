import React from "react";
import { NameList, ListItem, DeleteButton } from "./ContactList.styled";
export const ContactList = ({contacts, onDeleteContact}) =>{
    return(
  <NameList>
  {contacts.map(({id, name, number}) =>
    <ListItem key = {id}>
      {name}:  {number}
    <DeleteButton type = 'button' onClick = {() =>  onDeleteContact(id)} >Delete</DeleteButton>
    </ListItem>
  )}
  </NameList>

    );
}