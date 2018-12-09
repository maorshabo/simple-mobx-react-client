import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import Error from '../../../components/Error/Error';
import stores from '../../../stores';

const { categoriesStore } = stores;

class EditCategory extends PureComponent {
  onSubmitForm = (formValues) => {
    if (formValues.id) {
      categoriesStore.update(formValues.id, formValues);
    }
    else {
      categoriesStore.create(formValues);
    }
  };

  validateForm = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    return errors
  };

  render() {
    return (
      <Form onSubmit={this.onSubmitForm} validate={this.validateForm} initialValues={this.props.category}
            render={({ handleSubmit, form, submitting, pristine, values }) => {
              return (
                <form onSubmit={handleSubmit} id="form1">
                  <div className="row">
                    <div className="col">Name:</div>
                    <div className="col">
                      <Field name="name" component="input" type="text" />
                      <Error name="name" />
                    </div>
                  </div>
                  <button type="submit" disabled={submitting || pristine} className="btn btn-primary">
                    Save
                  </button>
                </form>
              )
            }} />
    );
  }
}

EditCategory.propTypes = {
  category: PropTypes.object
};

export default EditCategory;