import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Media, MediaBody } from 'reactstrap';


class DishDetail extends Component {
    
    constructor(props) {
        super(props);

        console.log(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return(

                <div className="col-12 col-md-5 m-1">
                    <Card>

                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                        <CardBody>

                            <CardTitle>{dish.name}</CardTitle>

                            <CardText>{dish.description}</CardText>

                        </CardBody>

                    </Card>
                </div>

            );
        } else {
            return(
                <div></div>
            );
        }
    }

    renderComments(dish) {
        console.log(dish);
        if (dish && dish.comments) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>

                    <Media list className="list-unstyled">

                        {dish.comments.map((comment) => {
                            return (
                            <Media body key={comment.id}>

                                <p>{comment.comment}</p>
                                
                                <p>-- {comment.author}, {comment.date}</p>
             
                            </Media>
                            );
                        })}

                    </Media>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    render() {

        const dish = this.renderDish(this.props.dish); 
        const comments = this.renderComments(this.props.dish);

        return (
            <div className="row">

                {dish}

                {comments}
        
            </div>
        );
    }

}

export default DishDetail;