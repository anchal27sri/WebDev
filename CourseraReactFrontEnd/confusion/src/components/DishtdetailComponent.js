import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Button, Row, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }

    render() {
        console.log('Comment Form ' + this.props.isModalOpen);
        return (
            <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggleModal}>
                <ModalHeader toggle={this.props.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row>
                            <Label htmlfor="firstname" md={2}>Rating</Label>
                            <Col md={12}>
                                <Control.select model=".contactType" name="contactType"
                                    className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlfor="firstname" md={12}>Your Name</Label>
                            <Col md={12}>
                                <Control.text model=".firstname" id="firstname" name="firstname"
                                    placeholder="First Name"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less',
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlfor="feedback" md={2}>Comment</Label>
                            <Col md={12}>
                                <Control.textarea model=".message" id="message" name="message"
                                    rows="5" className="form-control" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={12}>
                                <Button type="submit" color="primary">Submit</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        );
    }
}

function RenderComments({ commentArray }) {
    // console.log(commentArray);
    const menu = commentArray.map((com) => {
        if (com == null) return (<div></div>);
        return (
            <div key={com.id} className="ul list-unstyled">
                <p >{com.comment}</p>
                <p > -- {com.author},  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}</p>

            </div>

        );
    });
    return menu;
}

function RenderDish({ dish }) {
    // console.log(dish.name);
    return (
        <Card>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle heading>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}



class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        console.log('toggling Modal');
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        // console.log(props.comments);
        if (this.props.dish) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link active>{this.props.dish.name}</Link></BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={this.props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <RenderComments commentArray={this.props.comments} />
                            <Button outline color="secondary" onClick={this.toggleModal}>
                                <span className="fa fa-pencil fa-lg"> Submit Comment</span></Button>
                        </div>
                    </div>
                    <CommentForm isModalOpen={this.state.isModalOpen} toggleModal={this.toggleModal} />
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }
}


export default DishDetail;