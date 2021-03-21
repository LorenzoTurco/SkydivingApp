import React, { Component } from 'react';
import { render } from 'react-dom';
import IframeComponent from './iframecomp';
import './index.css';


class RainfallMap extends Component {

  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }


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