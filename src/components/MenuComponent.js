import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

import DishDetail from './DishDetailComponent';

class Menu extends Component {
    
    constructor(props) {
        super(props);

        console.log("menu component constructor is invoked");
    }

    componentDidMount() {
        console.log("menu component componentDidMount is invoked");
    }



    render() {
        console.log("menu component render is invoked");

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    
                    <Card onClick={() => this.props.onclick(dish.id)}>

                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                        <CardImgOverlay>

                            <CardTitle>{dish.name}</CardTitle>

                        </CardImgOverlay>

                    </Card>

                </div>
            );
        });

        return (
            <div className="container">
                
                <div className="row">

                    {menu}

                </div>

            </div>
        );
    }
}

export default Menu;