import React, { useState } from 'react';
import store from '../../stateManagment/store';
import { toggleShoppingCart } from '../../stateManagment/actionCreators';
import styles from './ShopingCartButton.module.css';

const ShoppingCartButton = () => {

    const [ products, setProducts ] = useState<number>();

    store.subscribe( () => {
        const products = store.getState().reducer.cart;
        const totalProducts:number = products.reduce( (accumulator:number, currentValue:any):number => {
            return accumulator + currentValue.quantity;
        },0);
        
        totalProducts !== 0 && setProducts(totalProducts);
    });

    return(
        <div className={ styles.shoppingCartBox }>
            <button className={ styles.customButton } onClick={ () => store.dispatch(toggleShoppingCart(true)) } >
                <i className={ styles.shoppingCartIcon + " fa fa-shopping-cart" } aria-hidden="true"></i>
            </button>
            <span className={ styles.productsQuantityBox }>{ products }</span>
        </div>
    );
}

export default ShoppingCartButton;