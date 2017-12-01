import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';
import {thArray, tdArray} from 'variables/Variables.jsx';

class TableList extends Component {

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

    deleteUser(user){
        let data = {
            id: user.id
        };
        fetch('/users/delete', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            if(data === "success"){
                this.setState({msg: "User has been deleted."});
            }
        }).catch(function(err) {
            console.log(err)
        });
    }

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="User Management"
                                category="Here is a subtitle for this table"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    thArray.map((prop, key) => {
                                                        return (
                                                        <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.users.map(user =>
                                            <tr>
                                                <td>{user.id}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                {(() => {
                                                    switch (user.level) {
                                                        case 0: return <td>Admin</td>;
                                                        case 1: return <td>Member</td>;
                                                    }

                                                })()}
                                                <td>
                                                    <a href="/users/update" className="btn">Edit</a>
                                                    &nbsp;&nbsp;|&nbsp;&nbsp;
                                                    <a onClick={()=>this.deleteUser(user)} className="btn">Delete</a>
                                                </td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default TableList;
