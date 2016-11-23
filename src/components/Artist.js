import React from 'react';

export default class Artist extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h4>{this.props.country}</h4>
        <p>{this.props.id}</p>
      </div>
    )
  }
}
