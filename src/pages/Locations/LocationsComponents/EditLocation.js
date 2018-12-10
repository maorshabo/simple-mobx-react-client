import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import Error from '../../../components/Error/Error';
import stores from '../../../stores';
import Select from 'react-select';

const { locationsStore, commonStore } = stores;

class EditLocation extends PureComponent {
  onSubmitForm = (formValues) => {
    if (formValues.id) {
      locationsStore.update(formValues);
    }
    else {
      locationsStore.create(formValues);
    }
    commonStore.hideEditForm();
  };

  validateForm = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.address) {
      errors.address = 'Address is required';
    }
    if (!values.coordinates) {
      errors.coordinates = 'Coordinates is required';
    }
    if (!values.category) {
      errors.category = 'Category is required';
    }
    return errors
  };

  render() {
    return (
      <Form onSubmit={this.onSubmitForm} validate={this.validateForm} initialValues={this.props.location}
            render={({ handleSubmit, form, submitting, pristine, values }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <div className="container">
                    <div className="row">
                      <div className="col-4">Name:</div>
                      <div className="col-8">
                        <Field name="name" className="form-control" component="input" type="text" />
                        <Error name="name" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">Address:</div>
                      <div className="col-8">
                        <Field name="address" className="form-control" component="input" type="text" />
                        <Error name="address" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">Coordinates:</div>
                      <div className="col-8">
                        <Field name="coordinates" className="form-control" component="input" type="text" />
                        <Error name="coordinates" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="category">Category</label>
                      </div>
                      <div className="col">
                        <Field name="category">
                          {({ input, meta }) => {
                            return (
                              <Select
                                className="basic-single"
                                classNamePrefix="select"
                                {...input}
                                value={this.props.categories.find(({ value }) => value === input.value)}
                                onChange={({ value }) => input.onChange(value)}
                                options={this.props.categories}
                              />
                            )
                          }
                          }
                        </Field>
                        <Error name="category" />
                      </div>
                    </div>
                    <button type="submit" disabled={submitting || pristine} className="btn btn-primary btn-block mt-3">
                      Save
                    </button>
                  </div>
                </form>
              )
            }} />
    );
  }
}

EditLocation.propTypes = {
  location: PropTypes.object,
  categories: PropTypes.array
};

export default EditLocation;