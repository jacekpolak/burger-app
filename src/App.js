import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { BrowserRouter, Route } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout" exact component={Checkout} />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
