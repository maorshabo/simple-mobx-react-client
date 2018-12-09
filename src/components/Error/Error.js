import { Field } from 'react-final-form';
import Message from '../Message/Message';
import React from 'react';

const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <Message color="red" message={error} /> : null
    }
  />
);

export default Error;