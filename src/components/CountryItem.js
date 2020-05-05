import React, { Component } from 'react'

export class CountryItem extends Component {
    render() {
        return (
                <tr>
                    <td>{this.props.country}</td>
                    <td>{this.props.confirmed}</td>
                    <td className="green-text">{this.props.recovered}</td>
                    <td className="red-text">{this.props.deaths}</td>
                    <td>{this.props.newConfirmed}</td>
                    <td>{this.props.newRecovered}</td>
                    <td>{this.props.newDead}</td>
                </tr>
        )
    }
}

export default CountryItem
