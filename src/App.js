import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import './App.css';
import { fetchBusinessFLights } from './store/actions/flight';

function App(props) {

  return (
    <div className="App">
      <div>
        <button type="button" onClick={props.fetchBusinessFLights}>Fetch Business Flights</button>
        {
          props.flight.business.map(function (item, i) {
            return <li key={i}>{item.route}</li>
          })
        }
      </div>
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
