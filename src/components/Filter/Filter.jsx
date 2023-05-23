import React from "react";
import { FilterLabel, FilterInput } from "./Filter.styled";
export const Filter = ({value, onChange}) =>{

    return(
        <FilterLabel>
        Find contact by name
        <FilterInput type = 'text' value = {value} onChange = {onChange}/>
      </FilterLabel>
    )
}