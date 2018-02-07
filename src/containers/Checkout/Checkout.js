import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

export default class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 2,
            cheese: 1,
            bacon: 1
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Checkout Page
                </h1>
                <CheckoutSummary ingredients={this.state.ingredients} />
            </div>
        );
    }
};
