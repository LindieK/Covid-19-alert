import React, { Component } from 'react';
import CountryItem from './CountryItem';

export class CountryStats extends Component {
    render() {
        const countries = this.props.countries;
        return (
            <table className="table table-striped table-bordered"> 
                <thead>
                    <tr>
                      <th>Country</th>
                      <th>Confirmed</th>
                      <th>Recovered</th>
                      <th>Deaths</th>
                      <th>New Confirmed</th>
                      <th>New Recovered</th>
                      <th>New Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map(country => (
                        <CountryItem key={country.Slug} country={country.Slug} confirmed={country.TotalConfirmed} recovered={country.TotalRecovered} deaths={country.TotalDeaths} newConfirmed={country.NewConfirmed} newRecovered={country.NewRecovered} newDead={country.NewDeaths}/>
                    ))}
                </tbody>
            </table>
            
        )
    }
}

export default CountryStats
