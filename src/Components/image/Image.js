import React from "react";
import "./image.css";

export const Image = (props) => {
    return (
        <div className="image-container">
            <div className="image" style={{backgroundImage: `url(${props.imageUrl})`}}></div>
            <h1>{props.title}</h1>
        </div>
    )
}