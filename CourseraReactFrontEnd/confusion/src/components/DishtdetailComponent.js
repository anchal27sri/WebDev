import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderComments(commentArray) {
        const menu = commentArray.map((com) => {
            if (com == null) return (<div></div>);
            return (
                <div key={com.id} className="ul list-unstyled">
                    <p >{com.comment}</p>
                    <p > -- {com.author},  {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</p>
                </div>
            );
        });
        return menu;
    }

    render() {
        if (this.props.dish) {
            return (
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" object src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle heading>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>               
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }
}


export default DishDetail;