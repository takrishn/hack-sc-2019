import React, { Component } from 'react';
import logo from './../logo.svg';
import '../styles/form.css';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

var AWS = require('aws-sdk');

class Analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
          mainUser:{name:"Daniel Davies", pages:"New Orleans Saints, Quiksilver, Under Armour, Facebook, Gordon Ramsey"},
          dummyData:[
            {name:"User1 L"},
            {name:"User2", pages:[{page:"B", desc:"ba vav a a"}]},
            {name:"User3", pages:[{page:"C", desc:"ba vav a a"}]},
            {name:"User4", pages:[{page:"D", desc:"ba vav a a"}]},
            {name:"User5", pages:[{page:"", desc:"ba vav a a"}]},
            {name:"User6", pages:[{page:"A", desc:"ba vav a a"}]},
            {name:"User7", pages:[{page:"A", desc:"ba vav a a"}]},
            {name:"User8", pages:[{page:"A", desc:"ba vav a a"}]},
            {name:"User7", pages:[{page:"A", desc:"ba vav a a"}]},
          ]
        }

        this.doComprehend = this.doComprehend.bind(this);
    }

    doComprehend(){
      var comprehend = new AWS.Comprehend({apiVersion: '2017-11-27', accessKeyId: '{insert accesskey}', secretAccessKey: '{insert secret key}', region: 'us-east-1'});

      var params = {
        DataAccessRoleArn: 'arn:aws:iam::005324696293:role/Comprehender', /* required */
        InputDataConfig: { /* required */
          S3Uri: 's3://publishedcomprehend/categories.txt', /* required */
          InputFormat: "ONE_DOC_PER_LINE"
        },
        OutputDataConfig: { /* required */
          S3Uri: 's3://publishedcomprehend/Output', /* required */
        },
      };

      comprehend.startTopicsDetectionJob(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });

    }

    render() {
        return (
            <div className="Page">
                <Button onClick={this.doComprehend}>Back</Button>
            </div>
        );
    }
}

export default Analysis;
