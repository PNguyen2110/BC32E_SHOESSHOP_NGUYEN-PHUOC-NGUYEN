import React, { Component } from "react";
import ProductItem from "./ProductItem";
export default class ProductList extends Component {
  render() {
    return (
      <ProductItem
        item={this.props.productData}
        setStateModal={this.props.setStateModal}
      />
    );
  }
}
