import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../components/FlagList';
import { getCountries, searchCountries, deleteCountry } from '../actions';
import '../countries.css';

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: []
        };
        this.search = this.search.bind(this);
        this.deleteCountry = this.deleteCountry.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
    }
    search(event) {
        this.props.dispatch(searchCountries(event.target.value));
    }
    deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }
    render() {
        return (
            <div>
                <div className='search text-center'>
                    <input type='text' onChange={this.search} />
                </div>
                <CountryFlagList countries={this.props.countries} deleteCountry={this.deleteCountry} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countries,
    };
};

export default connect(mapStateToProps)(CountryFlagContainer)