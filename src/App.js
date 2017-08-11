import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import AppleBusket from './mobx/AppleBasket';
class App extends Component {
  render() {
    const {
      dispatch
    } = this.props;
    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <AppleBusket/>
      </div>
    );
  }
};

function selectState(state) {
  return {
    state: state.appleBusket
  }
}
// export default App;
export default connect(selectState)(App)