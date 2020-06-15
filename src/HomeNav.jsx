import React from "react"

export default class HomeNav extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <ul>
                    {
                        this.props.nav.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}