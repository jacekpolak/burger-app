import React, { Component } from 'react';
import Hoc from '../../hoc/hoc';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axiosOrders from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as burgerBuilderActions from './../../store/actions/index';

class BurgerBuilder extends Component {

    state = {
        purchasing: false,
    }

    componentDidMount() {
        console.log('[BurgerBuilder.js] ComponentDidMount');
        this.props.onInitIngredients();
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.props.ingrds
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredient's can be loaded</p> : <Spinner />

        if (this.props.ingrds) {
            burger = (
                <Hoc >
                    <Burger ingredients={this.props.ingrds} />
                    <BuildControls
                        ingredientAdded={(ingName) => this.props.onIngredientAdded(ingName)}
                        ingredientRemoved={(ingName) => this.props.onIngredientRemoved(ingName)}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ingrds)}
                        ordered={this.purchaseHandler}
                        price={this.props.price} />
                </Hoc >
            );

            orderSummary = (
                <OrderSummary
                    ingredients={this.props.ingrds}
                    price={this.props.price}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler} />
            );
        }

        return (
            <Hoc>
                <Modal show={this.state.purchasing} close={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Hoc>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingrds: state.ingredients,
        price: state.totalPrice,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axiosOrders));