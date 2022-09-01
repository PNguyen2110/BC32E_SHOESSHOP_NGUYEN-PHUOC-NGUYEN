import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";
import data from "./data (1).json";

export default class ShoesShop extends Component {
  state = {
    productDetail: {},
    cart: {},
  };
  render() {
    const setStateModal = (newProduct) => {
      this.setState({ productDetail: newProduct });
    };
    return (
      <div className="container">
        <h1>ShoesShop</h1>

        <div className="row">
          {data.map((product) => {
            return (
              <div className="col-4 mb-4" key={product.id}>
                <ProductList
                  productData={product}
                  setStateModal={() => setStateModal(product)}
                />
              </div>
            );
          })}
          <Modal content={this.state.productDetail} />
        </div>
      </div>
    );
  }
}
