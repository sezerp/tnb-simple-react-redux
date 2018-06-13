import React, {Component} from 'react';
import {connect } from 'react-redux';


class SobjectList extends Component {

    rendeObject(data) {
        // const sobjects = cityData.list.map(weather => weather.main.temp);
        console.log(data);
        console.log(data.name);
        const name = data.name;
        const custom = data.custom ? 'true' : 'false';
        return (
            <tr key={name}>
                <td>{data.label}</td>
                <td>{name}</td>
                <td>{data.keyPrefix}</td>
                <td>{custom}</td>
            </tr>
        );
    }

    render(props) {
        // {this.props.sobjects.map(this.renderWeather)}
        console.log(this.props.sobjects);
        console.log(this.props.sobjects.length);
        const sobjects = this.props.sobjects.sobjects ?  this.props.sobjects.sobjects.map(o => o) : [];
        
       return (
        <table className="table table-hover" >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>API Name</th>
                    <th>Key Prefix</th>
                    <th>Is Custom</th>
                </tr>
            </thead>
            <tbody>
            {sobjects.map(this.rendeObject)}
            </tbody>
        </table>
       );

    }
}

function mapStateToProps({sobjects}) {
    return {sobjects};
}

export default connect(mapStateToProps)(SobjectList);
