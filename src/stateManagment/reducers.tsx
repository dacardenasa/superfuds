import IObjectShopingCart from '../consts/IObjectShoppingCart';

const reducer = ( state:{ cart: Array<IObjectShopingCart> } = { cart: [] }, action:{ type: string, product: IObjectShopingCart } ) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.cart.length > 0) {
                const productExist = state.cart.find((product:IObjectShopingCart) => product.id === action.product.id);
                if (productExist === undefined) {
                    return {
                        ...state,
                        cart: state.cart.concat(action.product)
                    };
                } else {
                    return {
                        ...state,
                        cart: state.cart.map( (product:IObjectShopingCart) => {
                            if (product.id === action.product.id) {
                                product.quantity++;
                                return product;
                            } else {
                                return product;
                            }
                        })
                    };
                }
            } else {
                return {
                    ...state,
                    cart: state.cart.concat(action.product)
                };
            }
        case 'DECREASE_ITEM_FROM_CART':
            return {
                ...state,
                cart: state.cart.map( (product:IObjectShopingCart) => {
                    if (product.id === action.product.id) {
                        product.quantity--;
                        return product;
                    } else {
                        return product;
                    }
                })
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter( (product:IObjectShopingCart) => product.id !== action.product.id )
            };
        default:
            return state
    }
}

const shoopingCartReducer = ( state:{ enable: boolean } = { enable: false }, action:{ type: string, enable: boolean } ) => {
    if (action.type === "TOOGLE_SHOOPING_CART") {
        return {
            ...state,
            enable: !state.enable
        }
    }
    return state;
}

export { reducer, shoopingCartReducer };