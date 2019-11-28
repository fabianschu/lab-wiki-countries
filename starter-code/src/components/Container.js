import React, { Component } from 'react';
import CountryList from './CountryList';
import { Route } from "react-router-dom";
import CountryDetails from './CountryDetails';


export default class Container extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <CountryList countries={this.props.countries}/>
                    <Route exact path="/:id" component={CountryDetails} countries={this.props.countries}/>
                </div>
            </div>
        )
    }
}
