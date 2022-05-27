import React from "react";
import "./counter.css";

export const Counter = (props) => {
    return (
        <div className="counter-container">
            <img src={props.imageUrl}/>
            <h2>{props.num}</h2>
        </div>
    )
}