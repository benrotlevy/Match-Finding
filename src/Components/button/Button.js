import React from "react";
import "./button.css";

export const Button = (props) => {
    return (
        <div className="button" data-name={props.name} style={{backgroundImage: `url(${props.imageUrl})`}} onClick={props.onButtonClick}></div>
    )
}