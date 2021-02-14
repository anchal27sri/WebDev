import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderComments({ commentArray }) {
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

function RenderDish({dish}) {
    console.log(dish.name);
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

const DishDetail = (props) =>{
    if (props.dish) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments commentArray = {props.dish.comments}/>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (<div></div>);
    }
}


export default DishDetail;