import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { item, setStateModal } = this.props;

    return (
      <div className="card">
        <img className="img-fluid" src={this.props.item.image} alt="" />
        <div className="card-body text-left">
          <h4 style={{ height: "60px" }} className="text-left">
            {this.props.item.name}
          </h4>
          <h4>{this.props.item.price}$</h4>
          <button className="bg-dark text-light w-50">Add to cart</button>
          <button className="btn-primary  w-50" onClick={setStateModal}>
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
