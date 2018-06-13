import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchDescriptions} from '../actions/index'



class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
            };

        this.onInputUsernameChange = this.onInputUsernameChange.bind(this);
        this.onInputPasswordChange = this.onInputPasswordChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputUsernameChange(event) {
        console.log(event.target.value);
        this.setState({username: event.target.value});
    }

    onInputPasswordChange(event) {
        console.log(event.target.value);
        this.setState({password: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchDescriptions(this.state);

        this.setState({username: ''});
        this.setState({password: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email" 
                    value= {this.state.username}
                    onChange={this.onInputUsernameChange}
                />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password"
                    value= {this.state.password}
                    onChange={this.onInputPasswordChange} 
                />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchDescriptions}, dispatch);
}


export default connect(null, mapDispatchToProps)(LoginForm);