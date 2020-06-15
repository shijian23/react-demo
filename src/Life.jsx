import React from "react"

export default class Life extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'zhangsan',
            count: 0
        }
    }
    UNSAFE_componentWillMount() {
        console.log('挂载前执行');
    }

    componentDidMount() {
        console.log('挂载完成');

    }

    shouldComponentUpdate() {
        return true
    }

    UNSAFE_componentWillUpdate() {
        console.log('修改前');

    }

    componentDidUpdate() {
        console.log('修改后');

    }

    UNSAFE_componentWillReceiveProps() {
        console.log('更改props');

    }

    componentWillUnmount() {
        console.log('卸载');

    }

    updateCount = () => {
        this.setState({
            count: this.state.count += 1
        })
    }

    childTransClick = () => {
        this.props.parentTransClick('儿子来了')
    }
    

    render() {
        const { name } = this.state
        return (
            <div>
                <h1>生命周期</h1>
                <h3>{name}   {this.props.title}</h3>
                <button onClick={this.updateCount}>点击</button>
                <p>{this.state.count}</p>
                <button onClick={this.childTransClick}>修改</button>

            </div>
        )
    }
}