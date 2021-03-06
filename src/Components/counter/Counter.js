import React from "react";
import "./counter.css";

export const Counter = (props) => {
    return (
        <div className="counter-container">
            <img alt="#" src={props.imageUrl}/>
            <h2 className={props.name}>{props.num}</h2>
        </div>
    )
}