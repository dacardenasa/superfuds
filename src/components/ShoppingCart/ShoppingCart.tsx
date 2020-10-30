import React, { useState } from 'react';
import store from '../../stateManagment/store';
import { addToCart, removeFromCart, decreaseItemFromCart, toggleShoppingCart } from '../../stateManagment/actionCreators';
import formatNumber from '../../utils/formatNumber';
import shoppingCartLogo from '../../assets/img/shopping-cart.svg';
import styles from './ShoppingCart.module.css';
import IObjectShopingCart from '../../consts/IObjectShoppingCart';


const ShopingCart = () => {

    const [ productsList, setProductsList ] = useState<IObjectShopingCart[]>([]);
    const [ totalProducts, setTotalProducts ] = useState<number>();
    const [ shoppingCart, setShoppingCart ] = useState<boolean>();

    store.subscribe( () => {
        const products = store.getState().reducer.cart;
        const totalBill = products.reduce( (accumulator:number, currentValue:IObjectShopingCart):number => {
            return accumulator + (currentValue.price * currentValue.quantity);
        }, 0);
        setProductsList(products);
        setTotalProducts(totalBill);

        const isOpen = store.getState().shoopingCartReducer.enable;
        setShoppingCart(isOpen);
    });

    function addToCartProduct( product:IObjectShopingCart ) {
        store.dispatch(addToCart(product));
    }

    function deleteItemFromCart( product:IObjectShopingCart ) {
        store.dispatch(decreaseItemFromCart(product));
    }

    function removeFromCartProduct( product:IObjectShopingCart ) {
        store.dispatch(removeFromCart(product));
    }

    function hideShoppingCart() {
        store.dispatch(toggleShoppingCart(false));
    }

    function disabledButton( productQuantity:number ):boolean {
        return (productQuantity !== 1) ? false : true;
    }

    return(
        <div className={ styles.containerShoppingCartBack } style={ shoppingCart ? { right: '0px' } : { right: '-100%' } }>
            <div className={ styles.containerShoppingCart } >
                <div className={ styles.backOptionBox }>
                    <button className={ styles.customButton } onClick={ hideShoppingCart }>
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </button>
                    <span className={ styles.spanBackButton }>Volver a la tienda</span>
                </div>

                { productsList.length > 0 ?
                    <>
                        <div className={ styles.shoppingCartHeader }>
                            <h1>Carrito de Compras</h1>
                            <h3 className={ styles.numberItems }>{ productsList.length } <span className={ styles.itemSpan }>item(s)</span></h3>
                        </div>
                        <div className={ styles.headerBox }>
                            <div className={ styles.columnHeader }>
                                Item
                            </div>
                            <div className={ styles.columnHeader }>
                                Cantidad
                            </div>
                            <div className={ styles.columnHeader }>
                                Precio
                            </div>
                            <div className={ styles.columnHeader }>
                            </div>
                        </div>
                        <div className={ styles.tableProducts }>
                            { 
                                productsList.map( product => {
                                    return(
                                        <div key={ product.id } className={ styles.bodyBox }>
                                            <div className={ styles.columnBody }>
                                                <div className={ styles.containerImg }>
                                                    <img src={ product.image } className={ styles.imgProduct } alt={ `img-${product.supplier}` } />
                                                </div>
                                                <div className={ styles.descriptionProduct}>
                                                    <h4 className={ styles.title }>{ product.title }</h4>
                                                    <h4 className={ styles.resume }>{ `x ${ product.units } - ${ product.content } c/u` }</h4>
                                                    <h4 className={ styles.supplier }>{ product.supplier }</h4>
                                                </div>
                                            </div>
                                            <div className={ styles.columnBody }>
                                                <button 
                                                    className={ product.quantity === 1 ? styles.customButtonDelete : styles.customButton }
                                                    onClick={ () => deleteItemFromCart(product) }
                                                    disabled={disabledButton(product.quantity)}
                                                    >
                                                    <i className="fa fa-minus-circle" aria-hidden="true"></i>
                                                </button>
                                                <span className={ styles.spanQuantity }>{ product.quantity }</span>
                                                <button className={ styles.customButton } onClick={ () => addToCartProduct(product) }>
                                                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <div className={ styles.columnBody }>
                                                <h2 className={ styles.priceProduct }><span className={ styles.currencyProduct }>$ </span>{ formatNumber((product.price * product.quantity)) }</h2>
                                            </div>
                                            <div className={ styles.columnBody }>
                                                <button className={ styles.customButtonDelete } onClick={ () => removeFromCartProduct(product) }>
                                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className={ styles.totalBox }>
                            <h2>Total:</h2>
                            <h2 className={ styles.spanTotalPrice }>${ productsList.length > 0 ? formatNumber(totalProducts) : 0 }</h2>
                        </div>
                    </>
                    : 
                    <div className={ styles.emptyBoxStyles }>
                        <div className="title">
                            <h3 className={ styles.emptyShoppingTitleStyles }>Tus productos</h3>
                        </div>
                        <div className={ styles.emptyImgBoxStyles }>
                            <img className={ styles.emptyImgStyles} src={ shoppingCartLogo } alt="cart"/>
                        </div>
                        <div className={ styles.descriptionBoxStyles }>
                            <p className={  styles.descriptionStyles }>Aún no tienes productos agregados a tu carrito de compras</p> 
                        </div>
                        <div className={ styles.totalBox }>
                            <h2>Total:</h2>
                            <h2 className={ styles.spanTotalPrice }>${ productsList.length > 0 ? formatNumber(totalProducts) : 0 }</h2>
                        </div>
                    </div>
                }
            </div>
        </div>
    );

}

export default ShopingCart;