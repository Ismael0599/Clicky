import React from "react";
import CartWidget from "../../assets/iconCart.svg";

const IconCart = () => {
    return (
        <div className="cart-icon-box">
            <div className="cart-icon">
                <img src={CartWidget} alt="Carrito de compras" title="Carrito" />
                <p>0</p>
            </div>
        </div>

    );
};

export default IconCart;
