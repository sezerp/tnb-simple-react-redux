import React, { Component } from 'react';

import LoginForm from '../containers/login_form';
import SobjectList from '../containers/sobject_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <LoginForm />
        <SobjectList /> 
      </div>
    );
  }
}
