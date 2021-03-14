import React from 'react';

const Navbar = (props) => {
        const styles = {
            cartIcon: {
                height: 32,
                marginRight: 20
            },
            nav: {
                height: 70,
                background: '#4267b2',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center'
            },
            cartIconContainer: {
                position: 'relative'
            },
            cartCount: {
                background: 'yellow',
                borderRadius: '50%',
                padding: '4px 8px',
                position: 'absolute',
                right: 0,
                top: -9
            }
        };
        return (
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src='https://www.flaticon.com/svg/vstatic/svg/833/833314.svg?token=exp=1615704292~hmac=d1e2309db9956fbab16d67d1358dd838' alt='cart-icon' />
                    <span style={styles.cartCount}>3</span>
                </div>
            </div>
        );
    }

export default Navbar;