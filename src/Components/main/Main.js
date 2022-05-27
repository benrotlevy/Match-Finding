import React from "react";
import { Button } from "../button/Button";
import { Counter } from "../counter/Counter";
import { Image } from "../image/Image";
import { data } from "../../data";
import "./main.css";


export class Main extends React.Component {

    state = {dislike: 0, data: data, current: 0}

    onButtonClick = async ({target}) => {
        this.setState((prev) => {
            return {current : prev.current+1}
        })
    }

    render() {
        return (
            <div className="container">
                <div className="counters">
                    <Counter imageUrl="https://previews.123rf.com/images/triken/triken1608/triken160800024/61320639-dislike-sign-smiley-emoticon-vector-illustration-isolated-on-white-background-.jpg" num={this.state.dislike}/>
                    <Counter imageUrl="https://previews.123rf.com/images/yayayoy/yayayoy1211/yayayoy121100033/16470136-emoticon-showing-thumb-up.jpg" num={this.state.dislike}/>
                </div>
                <div className="content">
                    <Image title={this.state.data[this.state.current].title} imageUrl={this.state.data[this.state.current].url} />
                </div>
                <div className="buttons">
                    <Button name="no" onButtonClick={this.onButtonClick} imageUrl="https://cdn-icons-png.flaticon.com/512/458/458594.png"/>
                    <Button name="yes" onButtonClick={this.onButtonClick} imageUrl="https://ofix.co.il/wp-content/uploads/2018/05/----.png"/>
                </div>
            </div>
        )
    }
}