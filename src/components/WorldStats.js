import React, { Component } from 'react'

export class WorldStats extends Component {
    render() {
        return (
            <div id="world-container">
                <div id="confirmed">{this.props.confirmed}</div>
                <div id="recovered">{this.props.recovered}</div>
                <div id="deaths">{this.props.deaths}</div>
            </div>
        )
    }
}

export default WorldStats
