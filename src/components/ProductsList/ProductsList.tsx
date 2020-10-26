import React, { useState, useEffect } from 'react';
import store from '../../stateManagment/store';
import IObjectShopingCart from '../../consts/IObjectShoppingCart';
import { addToCart } from '../../stateManagment/actionCreators';
import formatWord from '../../utils/formatWord';
import ProductCard from '../ProductCard/ProductCard';
import Slider from "react-slick";
import carrouselSettings from '../../utils/carrouselSettings';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProductsList = () => {
    
    const [ products, setProducts ] = useState<any[]>([]);

    useEffect(() => {
        async function getProductsApi() {
            try {
                const data = await fetch("https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json");
                const productsList = await data.json();
                return productsList;
            } catch(error) {
                console.log(error);
            }
        }
        const productsAPI = getProductsApi();
        productsAPI.then( response => {
            setProducts(response);
        });
    });

    function addToCartProduct( product:IObjectShopingCart ) {
        store.dispatch(addToCart(product));
    }

    return(
        <div style={{ width: "80%", margin: "0 auto" }}>
            <Slider {...carrouselSettings}>
                {products.map( (product) => {
                    return(
                        <ProductCard
                            key={ product.id }
                            id={ product.id }
                            productImg={ product.thumbnail }
                            sellos={ product.sellos }
                            supplier={ formatWord(product.supplier) }
                            content={ product.net_content }
                            title={ formatWord(product.title) }
                            price={ parseInt(product.price_real) }
                            units= { product.units_sf }
                            addToCartProduct= { addToCartProduct }
                        />
                    );
                })}
            </Slider>
        </div>
    );
}

export default ProductsList;