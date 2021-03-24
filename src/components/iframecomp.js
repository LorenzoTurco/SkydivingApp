import React from 'react';
import BackButton from './BackButton.js'
import './iframecomp.css'
export default class IframeComponent extends React.Component {
  render() {
    return (
      <div>
        <iframe src={this.props.src} title="mymap" height={this.props.height} className="fullheight"/>
        <header>
          <BackButton />
        </header>
      </div>
    )
  }
}

