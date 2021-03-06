import React, { Component } from 'react';
import {Navigator} from 'react-onsenui';
import './App.css';
import Start from './views/start';

class App extends Component {
    renderPage(route, navigator) {
        const props = route.props || {};
        props.navigator = navigator;
        return React.createElement(route.component, props);
    }
  render() {
      return (
          <Navigator
              initialRoute={{component: Start}}
              animation = "slide"
              animationOptions={{duration: 0.2, timing: 'ease-in'}}
              renderPage={this.renderPage.bind(this)} />
      );
  }
}

export default App;
