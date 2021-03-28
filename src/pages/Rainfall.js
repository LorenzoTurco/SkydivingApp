import React, { Component } from 'react';
import { render } from 'react-dom';
import IframeComponent from '../components/iframecomp';
import '../index.css';

// Displays rainfall map
class RainfallMap extends Component {

  render() {
    return (
      <div>
        <IframeComponent src="https://openweathermap.org/weathermap?basemap=map&cities=false&layer=radar&lat=30&lon=-20&zoom=3" height="100%" width="100%"/>
      </div>
    );
  }
}

render(<RainfallMap />, document.getElementById('root'));

export default RainfallMap