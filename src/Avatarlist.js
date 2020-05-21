import React, { Component } from 'react'

export default class Avatarlist extends Component {
    render() {
        return (

            <div className = "avatarstyle ma4 pa4 bg-light-purple dib tc grow">
        <img src={`https://joeschmoe.io/api/v1/${this.props.name}`} alt=""/>
        <h1>{this.props.name}</h1>
        <p>{this.props.title}</p>
        
            </div>
        )
    }
}
