("use strict");
import { Component } from "react";

class Cart extends Component {
  state = { items: [] };

  async componentDidMount() {
    const items = JSON.parse(localStorage.getItem("cart"));
    this.setState({ items });
  }

  render() {
    return (
      <div className="cart">
        {this.state.items.map((item) => (
          <div className="cart-item">
            <span className="item-name">{item.name}</span>
            <button>x</button>
          </div>
        ))}
      </div>
    );
  }
}
export default Cart;
