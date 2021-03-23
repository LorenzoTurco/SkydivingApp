import React from 'react';
export default class IframeComponent extends React.Component {
  render() {
    return (
      <div>
        <iframe src={this.props.src} title="mymap" height={this.props.height} width={this.props.width} className="fullheight"/>
      </div>
    )
  }
}
