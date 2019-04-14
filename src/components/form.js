import React, { Component } from 'react';
import '../styles/form.css';
import {HashRouter as Router, Link } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import HeaderComponent from './header';
import Button from 'react-bootstrap/Button';


class Form extends Component {
    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
          this.selectedCheckboxes.delete(label);
        } else {
          this.selectedCheckboxes.add(label);
        }
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
    
        for (const checkbox of this.selectedCheckboxes) {
          console.log(checkbox, 'is selected.');
        }
    }

    createCheckbox = label => (
        <div className="checkboxes" key={label + "f"}><Checkbox
            label={label}
            onChange={this.toggleCheckbox}
            key={label}
        />{label}</div>
    )

    createCheckboxes = () => (
        this.state.data.map(this.createCheckbox)
    )

    newFunc() {
        console.log(this.state.data.map(this.createCheckbox))
    }

    constructor(props) {
        super(props);
  
        this.state = {
            data: ['Multiple Sclerosis', 'Leukemia', 'Chronic Depression', 'Heart Disease'],
            checked: [false, false, false, false],
            desc: "Looks like you're new to this app! Get started by filling out some basic medical information below.",
            subtitle: 'Basic Diagnoses',
            backButton: false
        }
    }
    
    render() {
        const backIncluded = <div className="button-div"><Link to="/form" className="no-text-dec"><Button className="back-button" >Back</Button></Link><div className="gap"></div><Button className="back-button"><Link to="/dashboard" className="no-text-dec">Next</Link></Button></div>;
        const backExcluded = <div className="button-div"><Link to="/form2" className="no-text-dec"><Button className="next-button" >Next</Button></Link></div>
        
        return (
            <Router>
                <div className="Page">
                    <HeaderComponent></HeaderComponent>
                    <div className="Page-container">
        
                        <div className="form-container">
                            <h2 className="form-header">Account Setup</h2>
                            <div className="form-desc">{this.state.desc}</div>
                            <div className="basic-diagnoses-box">
                                <div className="form-subtitle">{this.state.subtitle}</div>
                                {this.createCheckboxes()}
                            </div>
                            {this.state.backButton ? backIncluded : backExcluded}
                        </div>
                    </div>
                </div>
            </Router>
        );
        
        
    }
}

export default Form;