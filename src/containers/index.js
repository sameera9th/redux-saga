import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchBusinessFLights, fetchCheapFLights } from '../store/actions/flight';
import { List } from 'react-content-loader';
import moment from 'moment';


const Search = (props) => {

  const Loader = () => <List />

  const {
    business,
    // cheap,
    fetching
  } = props.flight

  return (
    <div>
        <input type="checkbox" id="cheap" name="cheap" value="Bike" onChange={props.fetchBusinessFLights} />
        <label htmlFor="cheap">Load Cheap Flights</label><br />
        <input type="checkbox" id="business" name="business" value="Bike" onChange={props.fetchBusinessFLights} />
        <label htmlFor="business">Load Business Flights</label><br />
        <input type="checkbox" id="business" name="business" value="Bike" />
        <label htmlFor="business">Both Flights</label><br />
        {fetching && <Loader />}
        <br /><br /><br />
        {!fetching && <table style={{ width: '50%' }}>
          <tr>
            <th>Route</th>
            <th>Arrivel</th>
            <th>Depature</th>
          </tr>
          {
            business.map(function (item, i) {
              return (
                <tr key={i}>
                  <td>{item.route}</td>
                  <td>{moment(item.arrival).format('MMMM Do YYYY, h:mm:ss a')}</td>
                  <td>{moment(item.departure).format('MMMM Do YYYY, h:mm:ss a')}</td>
                </tr>
              )
            })
          }
        </table>}
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
  fetchCheapFLights: () => disptach(fetchCheapFLights()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
