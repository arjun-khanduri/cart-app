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
                    <img style={styles.cartIcon} src='https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1615914858~hmac=0dbf718891f49cf436e263bde9480d81' alt='cart-icon' />
                    <span style={styles.cartCount}>3</span>
                </div>
            </div>
        );
    }

export default Navbar;