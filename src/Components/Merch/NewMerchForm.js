import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewMerchForm(props) {
   
    function handleNewMerchFormSubmission(event) {
      event.preventDefault();
      props.onNewMerchCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, id: v4()});
    }
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewMerchFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name of item' />
        <input
          type='text'
          name='description'
          placeholder='Description' />
        <input
          type='number'
          name='quantity'
          placeholder='Quantity' />
        <button type='submit'>Add to merch list!</button>
      </form>
    </React.Fragment>
  );
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;