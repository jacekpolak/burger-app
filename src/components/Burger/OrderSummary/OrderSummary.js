import React from 'react';
import Hoc from '../../../hoc/hoc';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      )});
  
  
  return (
    <Hoc>
      <h3>Your Order</h3>
      <p>A delicious burger with the folowing ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
    </Hoc>
  )
};

export default orderSummary;