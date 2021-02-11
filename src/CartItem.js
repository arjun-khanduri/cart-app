import React from 'react';

const styles = {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: '#ccc'
}

class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles} />
                </div>
                <div className="right-block">
                    <div>Phone</div>
                    <div>Rs. 999</div>
                    <div>Quantity: 1</div>
                    <div className="cart-item-actions">

                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;