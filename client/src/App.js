import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }
    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    render() {
        return (
            <div className="App">
                <h1>Users</h1>
                {this.state.users.map(users =>
                    /*<div key={user.key}>{user.username}</div>*/
                    <div key={users.key}> {this.state.users.username} </div>
                )}
            </div>
        );
    }
}

export default App;
