import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/actions-countries';
import CountryFlagList from '../presentional/flag-list.component';
import '../countries.css';

class ContinentsContainer extends Component {
    constructor(props) {
        super(props);
        this.deleteCountry = this.deleteCountry.bind(this);
        this.chooseContinent = this.chooseContinent.bind(this);
    }
    chooseContinent(event) {
        this.props.dispatch(setContinent(event.target.value));
    }
    deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }
    componentDidMount() {
        this.props.dispatch(setContinent('Europa'));
    }
    render() {
        return (
            <div>
                <select onChange={this.chooseContinent}>
                    <option value="Europa">Europe</option>
                    <option value="Afryka">Africa</option>
                </select>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry} />
            </div>
        )
    }
}
const mapStateToProps = function (store) {
    return {
        visibleCountries: store.countriesReducer.visibleCountries
    }
}

export default connect(mapStateToProps)(ContinentsContainer);