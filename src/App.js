import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

   componentDidMount () {
     firebase
     .firestore()
     .collection('products')
     .get()
     .then((snapshot) => {
      console.log(snapshot);
      snapshot.docs.map((doc) => {
        console.log(doc.data());
      })
    });
   }

  increaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({ products: products });
  }
  decreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 0) {
      products[index].qty -= 1;
      this.setState({ products: products });
    }
  }
  deleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id)
    this.setState({ products: items });
  }
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((item) => {
      count += item.qty;
    })
    return count;
  }
  totalPrice = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.forEach((item) => {
      cartTotal += item.price * item.qty;
    })
    return cartTotal;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <h1>Cart</h1>
        <Cart
          products={products}
          onIncreaseQuantity={this.increaseQty}
          onDecreaseQuantity={this.decreaseQty}
          onDeleteProduct={this.deleteProduct}
        />
        <div style={{ padding: 10, fontSize: 20 }}><strong>Total Price:</strong> {this.totalPrice()}</div>
      </div>
    );
  }
}

export default App;
