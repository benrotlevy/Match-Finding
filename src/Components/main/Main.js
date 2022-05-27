import React from "react";
import { Button } from "../button/Button";
import { Counter } from "../counter/Counter";
import { Image } from "../image/Image";
import { data } from "../../data";
import "./main.css";
import { Message } from "../message/Message";


export class Main extends React.Component {

    state = {dislike: 0, like: 0, data: data, current: 0}

    onButtonClick = ({target}) => {
        if(!this.isOver()) {
            let like = this.state.like;
            let dislike = this.state.dislike;
            if(target.getAttribute("data-name") === "yes") {
                like++;
            } else {
                dislike++;
            }
            this.setState((prev) => {
                return {current : prev.current+1, dislike: dislike, like: like}
            })
        }
    }

    isOver = () => {
        if(this.state.current > this.state.data.length-1) {
            return true;
        }
        return false;
    }

    insertContent = () => {
        if(this.isOver()) {
            return <Message likes={this.state.like} dislikes={this.state.dislike} content={this.chooseMessages()} />
        } else {
            return <Image title={this.state.data[this.state.current].title} imageUrl={this.state.data[this.state.current].url} />
        }
    }

    chooseMessages = () => {
        if(this.state.like > this.state.data.length / 2) {
            return "YOU PROBABLY LOVES ANIMALS";
        } else {
            return "GO GET YOURSELF A FRIEND"
        }
    }

    render() {
        return (
            <div className="container">
                <div className="counters">
                    <Counter name="no" imageUrl="https://previews.123rf.com/images/triken/triken1608/triken160800024/61320639-dislike-sign-smiley-emoticon-vector-illustration-isolated-on-white-background-.jpg" num={this.state.dislike}/>
                    <Counter name="yes" imageUrl="https://previews.123rf.com/images/yayayoy/yayayoy1211/yayayoy121100033/16470136-emoticon-showing-thumb-up.jpg" num={this.state.like}/>
                </div>
                <div className="content">
                    {this.insertContent()}
                </div>
                <div className="buttons">
                    <Button name="no" onButtonClick={this.onButtonClick} imageUrl="https://cdn-icons-png.flaticon.com/512/458/458594.png"/>
                    <Button name="yes" onButtonClick={this.onButtonClick} imageUrl="https://ofix.co.il/wp-content/uploads/2018/05/----.png"/>
                </div>
            </div>
        )
    }
}