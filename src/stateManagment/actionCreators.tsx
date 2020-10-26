import IObjectShopingCart from '../consts/IObjectShoppingCart';


const addToCart = (product:IObjectShopingCart) => {
    return {
        type: "ADD_TO_CART",
        product
    };
}

const removeFromCart = (product:IObjectShopingCart) => {
    return {
        type: "REMOVE_FROM_CART",
        product
    };
}

const decreaseItemFromCart = (product:IObjectShopingCart) => {
    return {
        type: "DECREASE_ITEM_FROM_CART",
        product
    };
}

export { addToCart, removeFromCart, decreaseItemFromCart };