import React from 'react';

const styles = {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: '#ccc'
}

class CartItem extends React.Component {

    render() {
        const { price, title, qty } = this.props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity } = this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles} alt="" />
                </div>
                <div className="right-block">
                    <div>{title}</div>
                    <div>Rs. {price}</div>
                    <div>Quantity: {qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" className="action-icons" onClick={() => onIncreaseQuantity(product)} src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" />
                        <img alt="decrease" className="action-icons" onClick={() => onDecreaseQuantity(product)} src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" />
                        <img alt="delete" className="action-icons" src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" />
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;