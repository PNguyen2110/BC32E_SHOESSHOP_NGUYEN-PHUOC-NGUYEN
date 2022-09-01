import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { content } = this.props;

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <img className="img-fluid" src={content.image} alt="" />
          </div>
          <div className="col-7 text-left align-self-center">
            <h2 className="text-primary">{content.name}</h2>
            <h3>{content.alias}</h3>
            <h3>{content.price}</h3>
            <h3>{content.quantity}</h3>
            <h3>{content.description}</h3>
          </div>
        </div>
      </div>
    );
  }
}
