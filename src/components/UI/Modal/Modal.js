import React from 'react';
import css from './Modal.css';
import Hoc from '../../../hoc/hoc';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Hoc>
    <Backdrop show={props.show} close={props.close} />
    <div 
      className={css.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1': '0',
      }} >
      {props.children}
    </div>
  </Hoc>
);

export default modal;