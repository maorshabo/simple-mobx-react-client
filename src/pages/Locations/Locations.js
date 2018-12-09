import React, { Component } from 'react';
import stores from '../../stores';

const { commonStore } = stores;

class Locations extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    commonStore.setTitle('Location');
  }

  render() {
    return (
      <div>
        Location
      </div>
    );
  }
}

Locations.propTypes = {};

export default Locations;