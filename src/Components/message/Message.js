import React from "react";

export const Message = (props) => {
    return (
        <div>
            <h2><span style={{color: "green"}}>Likes: {props.likes}</span> <span style={{color: "red"}}>Dislikes: {props.dislikes}</span></h2>
            <h1>{props.content}</h1>
        </div>
    )
}