// 用类的形式创建组件
import React from 'react'
// import Home from './home'
import HomeNav from '../HomeNav'
// import StateComp from '../StateComp'
import Life from '../Life'
import '../css/study.css'


export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "传给子组件",
            // nav1: ['首页', '电影', '下载'],
            // nav2: ['首页', '音乐', '购买']
        }
    }
    parentTransClick = (data) => {
        this.setState({
            title: data
        })
    }
    render() {
        const nav1 = ['首页', '电影', '下载']
        const nav2 = ['首页', '音乐', '购买']
        return (
            <div>
                {/* <h1>呜呜呜呜呜呜</h1>
                <h3>学习呀,加油加油加油</h3>
                <Home></Home>
                <HomeNav nav={nav1} title='电影页面'></HomeNav>
                <HomeNav nav={nav2} title='音乐页面'></HomeNav>
                <StateComp></StateComp> */}
                {/* <StateComp></StateComp> */}
                {/* <p className="study">学习呀,加油加油加油</p>
                <Life title={this.state.title} parentTransClick={this.parentTransClick}></Life> */}
                <HomeNav nav={nav1} title='电影页面'></HomeNav>
                <HomeNav nav={nav2} title='音乐页面'></HomeNav>
            </div>
        )
    }
}

