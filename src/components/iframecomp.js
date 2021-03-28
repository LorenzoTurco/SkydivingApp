import React from 'react';
import BackButton1 from './BackButton_1.js'

// Component to embed map

export default class IframeComponent extends React.Component {
  // Use iframe to embed map
  render() {
    return (
      <div>
        <iframe src={this.props.src} title="mymap" height={this.props.height} className="fullheight"/>
        <BackButton1/>
      </div>
    )
  }
}

