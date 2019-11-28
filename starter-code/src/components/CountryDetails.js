import React, { Component } from 'react';
import * as data from  "../countries.json";
import { Link } from "react-router-dom";

export default class CountryDetails extends Component {
    render() {
        const tdStyle = {
            width: "30%"
        }; 
        const countries = data.default;
        const myCountry = countries.find(country => country.cca3 === this.props.match.params.id);
        console.log(myCountry);

        return (
            <div className="col-7">
                <h1>{myCountry.name.common}</h1>
                <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td style={tdStyle}>Capital</td>
                    <td>{myCountry.capital}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>{myCountry.area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {myCountry.borders.map(eachBorder => {
                            return(
                                <li>
                                <Link 
                                to={`${eachBorder}`}>
                                    {countries.find( country => eachBorder === country.cca3).name.common}
                                </Link>
                                </li>
                            );
                        })}
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}
