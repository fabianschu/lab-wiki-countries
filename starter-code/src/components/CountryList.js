import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

export default class CountryList extends Component {
    render() {
        
        //create array with HTML elements
        const listStyling = {
            maxHeight: "90vh",
            overflow: "scroll"
        }

        return (
            <div className="col-5" style={listStyling}>
                <div className="list-group">
                {this.props.countries.map(eachCountry => {
                    return(
                        <Link 
                        to={`${eachCountry.cca3}`} className="list-group-item list-group-item-action">
                            {eachCountry.flag} {eachCountry.name.common}
                        </Link>
                    );
                })}
                </div>
            </div>
        )
    }
}
