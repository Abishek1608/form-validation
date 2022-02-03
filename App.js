// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React, { Component } from "react";
import './index.css';
 import 'bootstrap/dist/css/bootstrap.min.css';

class Employeeform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            emailId: '',
            Phone: '',
            Street: '',
            City: '',
            State: '',
            Country: '',
            PostalCode: '',
            formErrors: {}
        };

        this.initialState = this.state;
    }

    handleFormValidation() {
        const { Name, emailId, Phone, Street, City, State, Country, PostalCode } = this.state;
        let formErrors = {};
        let formIsValid = true;

        if (!Name) {
            formIsValid = false;
            formErrors["NameErr"] = "Name is required.";
        }

        if (!emailId) {
            formIsValid = false;
            formErrors["emailIdErr"] = "Email id is required.";
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {

            formIsValid = false;
            formErrors["emailIdErr"] = "Invalid email id.";
        }

        if (!Phone) {
            formIsValid = false;
            formErrors["PhoneErr"] = "Phone number is required.";
        }
        else {
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
            if (!mobPattern.test(Phone)) {
                formIsValid = false;
                formErrors["PhoneErr"] = "Invalid phone number.";
            }
        }

        if (!Street) {
            formIsValid = false;
            formErrors["StreetErr"] = "Street is required.";
        }
        if (!City) {
            formIsValid = false;
            formErrors["CityErr"] = "City is required.";
        }
        if (!State) {
            formIsValid = false;
            formErrors["StateErr"] = "State is required.";
        }
        if (!Country) {
            formIsValid = false;
            formErrors["CountryErr"] = "Country is required.";
        }
        if (!PostalCode) {
            formIsValid = false;
            formErrors["PostalCodeErr"] = "PostalCode is required.";
        }

        this.setState({ formErrors: formErrors });
        return formIsValid;
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.handleFormValidation()) {
            alert('You have been successfully submitted.')
            this.setState(this.initialState)
        }
    }

    render() {

        const { NameErr, emailIdErr, PhoneErr, StreetErr, CityErr, StateErr, CountryErr, PostalCodeErr } = this.state.formErrors;

        return (
            <div className="formDiv bg-info  fw-bold fc-dark p-5">
                <h3 style={{ textAlign: "center" }} > Form </ h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div class="d-flex">
                            <div class="row gy-5">
                                <div>
                                    <div class="col-3">
                                        <label htmlFor="Name">Name</label>
                                        <input type="text" name="Name"
                                            value={this.state.Name}
                                            onChange={this.handleChange}
                                            placeholder="Your name.."
                                            className={NameErr ? ' showError' : ''} />
                                        {NameErr &&
                                            <div style={{ color: "red", paddingBottom: 10 }}>{NameErr}</div>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div class="col-3">
                                        <label htmlFor="emailId">Email Id</label>
                                        <input type="text" name="emailId"
                                            value={this.state.emailId}
                                            onChange={this.handleChange}
                                            placeholder="Your email id.."
                                            className={emailIdErr ? ' showError' : ''} />
                                        {emailIdErr &&
                                            <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div class="col-3">
                                        <label htmlFor="text">Phone Number</label>
                                        <input type="text" name="Phone"
                                            value={this.state.Phone}
                                            onChange={this.handleChange}
                                            placeholder="Enter your Phone Number"
                                            className={PhoneErr ? ' showError' : ''} />
                                        {PhoneErr &&
                                            <div style={{ color: "red", paddingBottom: 10 }}>{PhoneErr}</div>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div class="col-3">
                                        <label htmlFor="Street">Street</label>
                                        <input type="text" name="Street"
                                            value={this.state.Street}
                                            onChange={this.handleChange}
                                            placeholder="Enter your Street Name"
                                            className={StreetErr ? ' showError' : ''} />
                                        {StreetErr &&
                                            <div style={{ color: "red", paddingBottom: 10 }}>{StreetErr}</div>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div class="col-3">
                                        <label htmlFor="City">City</label>
                                        <input type="text" name="City"
                                            onChange={this.handleChange}
                                            value={this.state.City}
                                            placeholder="Your City Name."
                                            className={CityErr ? ' showError' : ''} />
                                        {CityErr &&
                                            <div style={{ color: "red", paddingBottom: 10 }}>{CityErr}</div>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div class="col-3">
                                        <label htmlFor="State">State</label>
                                        <input type="text" name="State"
                                            onChange={this.handleChange}
                                            value={this.state.State}
                                            placeholder="Your State Name."
                                            className={StateErr ? ' showError' : ''} />
                                        {StateErr &&
                                            <div style={{ color: "red", paddingBottom: 10 }}>{StateErr}</div>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div class="col-3">
                                        <label htmlFor="Country">Country</label>
                                        <input type="text" name="Country"
                                            onChange={this.handleChange}
                                            value={this.state.Country}
                                            placeholder="Your Country Name."
                                            className={CountryErr ? ' showError' : ''} />
                                        {CountryErr &&
                                            <div style={{ color: "red", paddingBottom: 10 }}>{CountryErr}</div>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div class="col-3">
                                        <label htmlFor="PostalCode">PostalCode</label>
                                        <input type="text" name="PostalCode"
                                            onChange={this.handleChange}
                                            value={this.state.PostalCode}
                                            placeholder="Your Postal Code."
                                            className={PostalCodeErr ? ' showError' : ''} />
                                        {PostalCodeErr &&
                                            <div style={{ color: "red", paddingBottom: 10 }}>{PostalCodeErr}</div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-3 align-middle">
                        <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}

export default Employeeform;


