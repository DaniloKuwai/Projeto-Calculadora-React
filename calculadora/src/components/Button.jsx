import React from "react";
import './Buttoon.css'

export default function Button(props){
    return(
        <button className="button">{props.label}</button>
    )
}