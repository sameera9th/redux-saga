import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { fetchBusinessFLights } from './store/actions/flight';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" onClick={props.fetchBusinessFLights}>Fetch Business Flights</button>
      </header>
    </div>
  );
}

const mapStateToProps = ({
  flight
}) => ({
  flight: flight,
});

const mapDispatchToProps = disptach => ({
  fetchBusinessFLights: () => disptach(fetchBusinessFLights()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
