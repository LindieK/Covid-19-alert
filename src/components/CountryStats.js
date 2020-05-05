import React, { Component } from 'react';
import CountryItem from './CountryItem';

export class CountryStats extends Component {
    render() {
        const countries = this.props.countries;
        return (
            <tbody>
                {countries.map(country => (
                    <CountryItem key={country.Slug} country={country.Slug} confirmed={country.TotalConfirmed} recovered={country.TotalRecovered} deaths={country.TotalDeaths} newConfirmed={country.NewConfirmed} newRecovered={country.NewRecovered} newDead={country.NewDeaths}/>
                ))}
            </tbody>
        )
    }
}

export default CountryStats
