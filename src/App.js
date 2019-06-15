import React from 'react';
import logo from './logo.svg';
import reduxLogo from './redux_logo.svg'
import './App.css';
import { connect } from "react-redux";
import { enAction } from "./actions/enAction";
import { frAction } from "./actions/frAction";
import { jpAction } from "./actions/jpAction";

import ToTranslate from "./components/ToTranslate";
import Translated from "./components/Translated";
import Loading from "./components/Loading";

class App extends React.Component {
  
  handleChange(event) {
    switch(event.target.value) {
      case 'english':
        this.props.enAction();
        break;
      case 'french':
        this.props.frAction();
        break;
      case 'japanese':
        this.props.jpAction();
        break;
      default:
        this.props.enAction();
        break;
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <img src={reduxLogo} className="App-logo-redux" alt="logo" />
          </div>
          <h2>react-redux-app</h2>
          <label onChange={(e) => this.handleChange(e)}>
          {this.props.language.language}:
            <select>
              <option value="english">{this.props.language.en}</option>
              <option value="french">{this.props.language.fr}</option>
              <option value="japanese">{this.props.language.jp}</option>
            </select>
          </label>
          <h4>{this.props.language.whatIsRedux}</h4>
          <p>{this.props.language.whatNeedRedux}:</p>
          <li>{this.props.language.actions}</li>
          <li>{this.props.language.reducers}</li>
          <li>{this.props.language.store}</li>
          <div id="grid" className="container">
            <ToTranslate className="toTranslate"/>
            <Loading/>
            <Translated className="translated"/>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  enAction: () => dispatch(enAction),
  frAction: () => dispatch(frAction),
  jpAction: () => dispatch(jpAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
