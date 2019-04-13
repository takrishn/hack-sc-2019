import React, { Component } from 'react';
import logo from './../logo.svg';
import '../styles/form.css';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['Multiple Sclerosis', 'Something Else 1', 'Something Else 2', 'Something Else 3'],
            checked: [false, false, false, false],
            desc: "Looks like you're new to this app! Get started by filling out some basic medical information below.",
            subtitle: 'Basic Diagnoses',
            backButton: false
        }
    }

    handleCheckboxChange(ind) {
        this.state.checked[ind] = !this.state.checked[ind];
    }

    render() {
        const backIncluded = <div><button>Back</button><button>Next</button></div>;
        const backExcluded = <div><button>Next</button></div>
        
        return (
            <div className="Page">
                <div className="Page-container">
    
                    <div className="form-container">
                        <h2 className="form-header">ACCOUNT SETUP</h2>
                        <div className="form-desc">{this.state.desc}</div>
                        <div className="form-subtitle">{this.state.subtitle}</div>
                        <div className="form-checkboxes">{
                            this.state.data.map(item => (
                                
                                <div className="item-name"><Checkbox value={item} checked={this.state.checked[this.state.data.indexOf(item)]} onChange={this.handleCheckboxChange(this.state.data.indexOf(item))} />{item}</div>
                            ))
                        }</div>
                        {this.state.backButton ? backIncluded : backExcluded}
                    </div>
                </div>
            </div>
        );
        
        
    }
}

export default Form;