import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import css from './ContactData.css';
import axiosOrders from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner';

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
      ingredients: this.props.ingredients,
      price: this.props.price,
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

    axiosOrders.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });

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

export default ContactData;