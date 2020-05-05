import React, { Component } from 'react'

export class WorldStats extends Component {
    render() {
        return (
            <div id="world-container">
                <div>{this.props.confirmed}</div>
                <div>{this.props.recovered}</div>
                <div>{this.props.deaths}</div>
            </div>
        )
    }
}

export default WorldStats
