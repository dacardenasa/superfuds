import React, { useState } from 'react';
import Logo from '../../assets/img/logo.svg'
import styles from './Header.module.css';
import ShoppingCartButton from '../../components/ShoppingCartButton/ShopingCartButton';

const Header = () => {

    const [searchBoxResponsive, setSearchBoxResponsive] = useState<boolean>(false)

    function toggleSearchInput():void {
        searchBoxResponsive ? setSearchBoxResponsive(false)
                            : setSearchBoxResponsive(true);
    }

    return(
        <div className={ styles.headerBox }>
            <div className={ styles.containerBox }>
                
                <div className={ styles.logoBox }>
                    <a href="https://www.superfuds.com/" target="_blank" rel="noopener noreferrer">
                        <img src={ Logo } className={ styles.logo } alt="Logo superfuds"/>
                    </a>
                </div>
                
                <div className={ styles.mixPanelBox }>
                    <div className={ styles.searchBox }>
                        <input type="text" className={ styles.inputSearch } placeholder="Busca marcas y productos"/>
                        <button className={ styles.customButton }>
                            <i className={ styles.searchIcon + " fa fa-search"} aria-hidden="true"></i>
                        </button>
                    </div>
                    
                    <div className={ styles.responsiveSearchBox }>
                        <button className={ styles.responsiveSearchButton } onClick={ toggleSearchInput } >
                            <i className={ styles.responsiveSearchIcon + " fa fa-search"} aria-hidden="true"></i>
                        </button>
                    </div>

                    <ShoppingCartButton />

                    <div className={ styles.profileBox }>
                        <div className="profile-data">
                            <h5 className={ styles.profileName }>Sophie Adams</h5>
                            <div className={ styles.profileMenuBox }>
                                <h5 className={ styles.myProfile }>Mi perfil</h5>
                                <button className={ styles.customButton }>
                                    <i className={ styles.arrowDownIcon +" fa fa-angle-down" }  aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                        <div className={ styles.profileImg }></div>
                    </div>

                    <div className={ styles.profileResponsiveBox }>
                        <div className={ styles.profileImg }></div>
                    </div>

                </div>
                
            </div>

            <div className={ styles.searchBoxResponsive } style={ searchBoxResponsive ? { display: 'block' } : { display: 'none' } }>
                <input type="text" className={ styles.inputSearch } placeholder="Busca marcas y productos"/>
            </div>

        </div>
    );
}

export default Header;