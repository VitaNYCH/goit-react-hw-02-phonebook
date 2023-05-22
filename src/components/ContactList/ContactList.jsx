import React from "react";
import { NameList, ListItem } from "./ContactList.styled";
export const ContactList = ({contacts}) =>{
  console.log(contacts);
    return(
  <NameList>
  {contacts.map(({id, data, number}) =>
    <ListItem key = {id}>{data}:  {number}</ListItem>
  )}
  </NameList>

    );
}