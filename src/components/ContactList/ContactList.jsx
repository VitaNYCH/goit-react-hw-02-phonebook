import React from "react";
import { NameList, ListItem } from "./ContactList.styled";
export const ContactList = ({contacts}) =>{
  console.log(contacts);
    return(
  <NameList>
  {contacts.map(({id, data}) =>
    <ListItem key = {id}>{data}</ListItem>
  )}
  </NameList>

    );
}