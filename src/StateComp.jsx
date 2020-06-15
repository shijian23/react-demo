import React from "react"


export default class StateComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 10,
            flag: false
        }
    }
    increment = () => {
        this.setState(
            { add: this.state.count += 1 }
        )
    }

    decrement = () => {
        this.setState(
            { sub: this.state.count -= 1 }
        )
    }
    render() {
        let isShowP = this.state.flag ? '我是对的' : '我是错的'
        return (
            <div >
                <p>这是StateComp呀</p>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <p>{isShowP}</p>
            </div >
        )
    }
}