import React, { Component } from 'react'

export class WorldStats extends Component {
    render() {
        return (
            <div id="world-container">
                <div id="confirmed">
                    <span className="figure">{this.props.confirmed}</span>
                    <span>Confirmed</span>
                </div>
                <div id="recovered">
                    <span className="figure">{this.props.recovered}</span>
                    <span>Recovered</span>
                </div>
                <div id="deaths">
                    <span className="figure">{this.props.deaths}</span>
                    <span>Deaths</span>
                </div>
            </div>
        )
    }
}

export default WorldStats
