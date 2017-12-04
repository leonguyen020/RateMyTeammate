import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import Modal from 'react-modal';
import Validation from 'react-validation';


import Card from 'components/Card/Card.jsx';
import {thArray, tdArray} from 'variables/Variables.jsx';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        width                 : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class TableList extends Component {

    constructor(props){
        super(props);
        this.state = {
            users:[],
            modalIsOpen: false,
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        // We capture the value and change state as user changes the value here.
        this.logChange = this.logChange.bind(this);
        // Function where we submit data
        this.handleEdit = this.handleEdit.bind(this);
    }
    // Editing modal
    openModal(user) {
        this.setState({
            modalIsOpen: true,
            username: user.username,
            email: user.email,
            id: user.id
        });
    }
    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }
    logChange(e) {
        this.setState({
            //setting value edited by the admin in state.
            [e.target.name]: e.target.value
        });
    }
    handleEdit(e){
        e.preventDefault();
    }



    // Fetch user info from mysql with express
    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }
    // Delete Users
    handleDelete(id) {
        fetch(`/users/delete/` + id, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'delete',
        })
        .then((res) => {
            return res.json()
        });

        const users = this.state.users.filter(user => user.id !== id);
        this.setState({users});
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
                                                        default:
                                                    }

                                                })()}
                                                <td>
                                                    <input type='button' className="btn" value='Edit' onClick={()=>this.openModal(user.id)} />
                                                    &nbsp;&nbsp;|&nbsp;&nbsp;
                                                    <input type='button' className="btn" value='Delete' onClick={() => this.handleDelete(user.id)} />
                                                </td>
                                            </tr>
                                        )}
                                        {/*Edit Modal*/}
                                            <Modal
                                                isOpen={this.state.modalIsOpen}
                                                style={customStyles}
                                                onRequestClose={this.closeModal}
                                                contentLabel="Example Modal" >

                                                <form onSubmit={this.handleEdit} method="POST">
                                                    <Row>
                                                        <Col md={12}>
                                                            <Col md={6}>
                                                                <label>Username</label>
                                                                <input onChange={this.logChange}
                                                                       className="form-control"
                                                                       placeholder={this.state.username}
                                                                       name='username' validations={['required']}/>
                                                            </Col>
                                                            <br/>
                                                            <Col md={6}>
                                                                <label>Email</label>
                                                                <input type="email"
                                                                       onChange={this.logChange}
                                                                       className="form-control"
                                                                       value={this.state.email}
                                                                       placeholder='email@email.com'
                                                                       name='email' validations={['required', 'email']}/>
                                                            </Col>
                                                            <br/>
                                                        </Col>
                                                        <Col md={12}>
                                                            <div className="submit-section">
                                                                <button type="submit"
                                                                        style={{marginTop: 20,marginLeft: 17}}
                                                                        className="btn btn-uth-submit">Submit</button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </form>
                                            </Modal>
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
