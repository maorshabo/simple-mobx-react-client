import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import Categories from './pages/Categories/Categories';
import Locations from './pages/Locations/Locations';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import EditSidebar from './components/EditSidebar/EditSidebar';

@withRouter
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/categories" component={Categories} />
          <Route path="/locations" component={Locations} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
