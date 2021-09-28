import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartaction: "add to cart",
      cartstate: true,
    };
  }

  // function to change action of cart button
  actionchange = () => {
    if (this.state.cartstate) {
      this.setState({ cartaction: "Remove from cart", cartstate: false });
      this.props.addcart(this.state.cartstate);
    } else {
      this.setState({ cartaction: "add to cart", cartstate: true });
      this.props.addcart(this.state.cartstate);
    }
  };

  render() {
    return (
      <>
        <div
          className="card position-realtive text-center"
          key={this.props.key}
        >
          {/* cart-image*/}
          <div>
            <img
              className="card-img-top"
              src={this.props.image}
              alt="productimage"
            />
          </div>

          <div className="card-img-overlay text-right">
            {/* sale-badge*/}
            {this.props.sale ? (
              <span className="badge bg-dark text-white position-absolute">
                Sale
              </span>
            ) : (
              <></>
            )}
          </div>
          {/* product-details*/}
          <div className="card-body">
            <h5 className="card-title ">{this.props.title}</h5>
            {/* product-review*/}
            <p className="rating">
              {this.props.star ? (
                <>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </>
              ) : (
                <></>
              )}
            </p>
            {/* Product-price*/}
            <p className="price">
              <span className="mr-1 text-muted">{this.props.discount}</span>
              {this.props.price}
            </p>
            <div className="card-footer bg-transparent border-top-0 position-absolute">
              {/* Product-action*/}
              {this.props.cart ? (
                <>
                  <button
                    className="btn  btn-outline-dark"
                    onClick={this.actionchange}
                  >
                    {this.state.cartaction}
                  </button>
                </>
              ) : (
                <button className="btn  btn-outline-dark">View options</button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
