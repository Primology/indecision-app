import React from 'react';
import Modal from 'react-modal';
import Option from './Option';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    ariaHideApp={false}
    onRequestClose={props.handleClearModalState}
    closeTimeoutMS={300}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearModalState}>Okay</button>
  </Modal>
);

export default OptionModal;