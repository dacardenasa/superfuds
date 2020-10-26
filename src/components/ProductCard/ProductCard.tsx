import React, { useState} from 'react';
import styles from './ProductCard.module.css';
import formatNumber from '../../utils/formatNumber';
import IObjectShopingCart from '../../consts/IObjectShoppingCart';

type ProductsType = {
    id: number;
    productImg: string;
    sellos: SellosProperties;
    supplier: string;
    content: string;
    title: string;
    price: number;
    units: number;
    addToCartProduct: (product:IObjectShopingCart) => void;
}

type SellosProperties = Array<{ name:string, image:string }>
type ProductKeys = keyof SellosProperties;

const ProductCard = ( props:ProductsType ) => {
    const [ displayButton, setDisplayButton ] = useState<boolean>(false);
    const [ displayTooltip, setDisplayTooltip ] = useState<{[index: string]:any, vegano: boolean, khoser: boolean, organico: boolean}>({ vegano: false, khoser: false, organico: false });
    
    const productShopingCart:IObjectShopingCart = {
        id: props.id,
        image: props.productImg,
        supplier: props.supplier,
        content: props.content,
        title: props.title,
        price: props.price,
        units: props.units,
        quantity: 1,
    }

    function toggleButton(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        if (e.type === "mouseover") {
            setDisplayButton(true);
        } else if (e.type === "mouseleave") {
            setDisplayButton(false);
        }
    }

    function toggleTollTip(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        const { id } = e.currentTarget;
        if (e.type === "mouseover") {
            if ( id === "vegano") {
                setDisplayTooltip({ vegano: true, khoser: false, organico: false });
            } else if ( id === "khoser") {
                setDisplayTooltip({ vegano: false, khoser: true, organico: false });
            } else {
                setDisplayTooltip({ vegano: false, khoser: false, organico: true });
            }
        } else if (e.type === "mouseleave") {
            if ( id === "vegano") {
                setDisplayTooltip({ vegano: false, khoser: false, organico: false });
            } else if ( id === "khoser") {
                setDisplayTooltip({ vegano: false, khoser: false, organico: false });
            } else {
                setDisplayTooltip({ vegano: false, khoser: false, organico: false });
            }
        }

    }
    
    return(
        <div key={ props.id } className={ styles.productContainerBoxStyles + " product" } onMouseOver={ toggleButton } onMouseLeave={ toggleButton }>
            <div className={ styles.productBoxStyles }>
                <div className={ styles.imgBoxStyles }>
                    <img src={ props.productImg } className={ styles.imgStyles } alt={ `Product ${props.title}` }/>
                    <div className={ styles.iconsListBoxStyles }>
                        <ul className={ styles.listStyles }>
                            {props.sellos.map( (sello) => {
                                const field:ProductKeys = sello.name as ProductKeys;
                                return(
                                    <li key={ sello.name } style={{ position: "relative" }} id={ sello.name } onMouseOver={ toggleTollTip } onMouseLeave={ toggleTollTip }>
                                        <img src={ sello.image } className={ styles.iconStyles } alt={ `Icon ${ sello.name }` }/>
                                        <div className={ styles.tooltipStyles } style={ displayTooltip[field] ? { display: "block"} : { display: "none" } }>
                                            <h5 className={ styles.tooltipTitleStyles }>
                                                <span className={ styles.tooltipSpanStyles }>
                                                    Producto
                                                </span> { sello.name }</h5>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className={ styles.descriptionBoxStyles }>
                    <div className={ styles.providerBoxStyles }>
                        <h4 className={ styles.supplierNameStyles }>{ props.supplier }</h4>
                        <span className={ styles.netContentStyles }>{ props.content }</span>
                    </div>
                    <div className={ styles.titleBoxStyles }>
                        <h4 className={ styles.titleStyles }>{ props.title }</h4>
                    </div>
                    <div>
                        <h3 className={ styles.priceStyles }>
                        <span className={ styles.spanCurrencyStyles }>$</span>{ formatNumber(props.price) }<span className={ styles.spanQuantityStyles }> x { props.units } unids</span>
                        </h3>
                    </div>
                </div>
            </div>
            <button className={ styles.customButtonCardStyles } onClick={ () => props.addToCartProduct(productShopingCart) } style={ displayButton ? { display: "block" } : { display: "none" } }>
                Agregar al carrito
            </button>
        </div>
    );
}

export default ProductCard;