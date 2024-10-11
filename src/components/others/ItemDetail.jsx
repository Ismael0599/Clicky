import React, { useState } from 'react'

const ItemDetail = ({ product }) => {

    if (!product) {
        return <h2>Producto no encontrado</h2>;
    }

    let [count, setCount] = useState(1);

    let increment = () => {
        setCount((prevCount) => prevCount + 1);
    }

    let decrement = () => {
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
    }

    const handleChange = (event) => {
        let value = Math.max(1, parseInt(event.target.value || 1));
        setCount(value);
    }

    return (
        <div className='itemDetail'>
            <img src={product.image} alt={product.title} />
            <div className='detail-container'>
                <section className='section-title'>
                    <h2>{product.title}</h2>
                    <hr />
                    <p className='price'>$ {product.price}</p>
                </section>

                <section className='section-details'>
                    <h3>Product Details</h3>
                    <dl>
                        <dt>Size</dt>
                        <dd>Keyboard {product.category} %</dd>

                        <dt>Description</dt>
                        <dd>{product.description}</dd>
                    </dl>
                </section>

                <section className='section-quantity'>
                    <h3>Quantity</h3>
                    <div className='input-container'>
                        <button className='btn-decrement' onClick={decrement}>-</button>
                        <input type="number" value={count} onChange={handleChange} min="1" />
                        <button className='btn-increment' onClick={increment}>+</button>
                    </div>
                </section>

                <section className='btn-addCart'>
                    <button>Add Cart</button>
                </section>
            </div>
        </div>
    )
}

export default ItemDetail