import React from "react";
import { NameList, ListItem } from "./ContactList.styled";
export const ContactList = ({contacts}) =>{
    return(
  <NameList>
  {contacts.map(({id, name, number}) =>
    <ListItem key = {id}>{name}:  {number}</ListItem>
  )}
  </NameList>

    );
}