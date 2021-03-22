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
      products: [],
      loading: true
    }
    this.db = firebase.firestore();
  }

   componentDidMount () {
     this.db
     .collection('products')
     .onSnapshot((snapshot) => {
      console.log(snapshot);
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })

      this.setState({
        products: products,
        loading: false
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
  addProduct = () => {
    this.db
    .collection('products')
    .add({
      img: '',
      price: 900,
      qty: 3,
      title: 'Dish washer'
    })
    .then((docRef) => {
      console.log('Product has been added', docRef);
    })
    .catch((err) => {
      console.log('Error: ', err)
    })
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{padding: 20, fontSize: 20}}>Add a button</button>
        <h1>Cart</h1>
        <Cart
          products={products}
          onIncreaseQuantity={this.increaseQty}
          onDecreaseQuantity={this.decreaseQty}
          onDeleteProduct={this.deleteProduct}
        />
        {loading && <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading products..." />}
        <div style={{ padding: 10, fontSize: 20 }}><strong>Total Price:</strong> {this.totalPrice()}</div>
      </div>
    );
  }
}

export default App;
