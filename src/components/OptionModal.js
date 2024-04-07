//L.61
// the goal is to build third party components and use it in our app in we press What should I do? button we will see a modal with the selected option not using alert
import React from "react";
import Modal from "react-modal"; // you can get it from the react-modal website

// we must set isOpen and contentLabel to the Modal component to work
//isOpen : its value is a boolean to show or hide the modal we should use it dynamically
//- !!props.selectedOption : to convert the value of the selectedOption to a boolean if it undefined it will be false and if it has a value it will be true
// contentLabel : to give the modal a name to use it in the aria-labelledby attribute in the DOM
// onRequestClose : to close the modal by clicking the esc button or clicking outside the modal without using the button
// closeTimeoutMs : to set the time to close the modal after clicking the button it's like a transition duration L.71
const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleCloseModal}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal">
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button onClick={props.handleCloseModal}>Okay </button>
  </Modal>
);
// we pass the h3 tag and the button to the modal using children props because we want to use the same modal for different purposes and we use built in code
export default OptionModal;
