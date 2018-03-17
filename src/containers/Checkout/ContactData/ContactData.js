import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import css from './ContactData.css';
import axiosOrders from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    ingredients: null
  }

  orderHandler = (event) => {
    event.preventDefault();

    const order = {
      ingredients: this.props.ings,
      price: this.props.totalPrice,
      customer: {
        name: 'Jacek Polak',
        address: {
          street: 'Test Street 1',
          zipCode: '123456',
          country: 'Poland',
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'test method',
    }

    this.props.onOrderBurger(order);

  }

  render() {
    let form = (
      <form>
        <input className={css.Input} type="text" name="name" placeholder="Your name" />
        <input className={css.Input} type="email" name="email" placeholder="Your email" />
        <input className={css.Input} type="text" name="street" placeholder="Your street" />
        <input className={css.Input} type="text" name="postal" placeholder="Your postal code" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={css.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice
  }
}

const dispatchToProps = dispatch => {
  return {
    onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
  }
}

export default connect(mapStateToProps, dispatchToProps)(withErrorHandler(ContactData, axiosOrders));