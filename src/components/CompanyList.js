import React, { Component } from 'react'
// import CompanyCard from './CompanyCard';
// import { NavLink } from 'react-router-dom'; 
import PropTypes from "prop-types";
import { Route, Switch } from 'react-router-dom';
import { checkApiServer } from '../api';
// REDUX CONNECT
import { connect } from 'react-redux';
// REDUX ACTIONS
import { getCompanies, handleSingleCompany } from '../actions/actionCreators';
import CompanyCard from './CompanyCard';
// import {faListUl, faTag} from '@fortawesome/free-solid-svg-icons';

class CompanyList extends Component {
  componentDidMount() {
		// checking that we're connected to the backend
		checkApiServer();
		this.props.getCompanies();
	}
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  render() {
    return (
      <div>
        {!this.props.selectedCompany ? 
        <div>
          {this.props.companies.map((company, i) => {
            return <ul key={`${i}`}>
              <a href="" onClick={(e) => {
                e.preventDefault();
                handleSingleCompany
              }}><h2>{company.name}</h2></a>
              <ul><li>{company.keywords.industry}</li></ul>
              <ul><li>{company.keywords.technical}</li></ul>
            </ul>
          })}
        <hr /></div> : 
        <CompanyCard selectedCompany={this.state.selectedCompany} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		// spread operator for our props object
		...state,
    companies: state.companies.companies,
    selectedCompany: state.companies.selectedCompany
	};
};

const mapDispatchToProps = {
  getCompanies,
  handleSingleCompany
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);