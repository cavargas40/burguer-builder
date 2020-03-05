import React from 'react';
import './Modal.css';
import Aux from '../../../hoc/Auxiliar/Auxiliar';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextProps.show !== props.show ||
  //     nextProps.children !== props.children
  //   );
  // }

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClose} />
      <div
        className="Modal"
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

const renderingConditions = (prevProps, nextProps) =>
  nextProps.show === prevProps.show &&
  nextProps.children === prevProps.children;

export default React.memo(Modal, renderingConditions);
