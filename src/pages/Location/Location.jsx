import React, { Component } from 'react'
import { getIPAddress } from '../../services/location-api';

class Location extends Component {
  state = {
    results: []
  }

  async componentDidMount() {
    const locationData = await getIPAddress()
    console.log(locationData)
    this.setState({ results: locationData.results })
  }

  render() {
    return (
      <>
        <h2>Location Page!</h2>
        <h3></h3>
      </>
    );
  }
}

export default Location;