import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Media } from 'reactstrap';


class DishDetail extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("dishDetail component - componentDidMount");
    }

    componentDidUpdate() {
        console.log("dishDetail component - componentDidUpdate");
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
        if (dish && dish.comments) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>

                    <Media list className="list-unstyled">

                        {dish.comments.map((comment) => {
                            return (
                            <Media body key={comment.id}>

                                <p>{comment.comment}</p>
                                
                                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-AU', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
             
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
        console.log("dishDetail Component - Render");       

        const dish = this.renderDish(this.props.dish); 
        const comments = this.renderComments(this.props.dish);

        return (
            <div className="container">
                <div className="row">

                    {dish}

                    {comments}
            
                </div>
            </div>
        );
    }

}

export default DishDetail;