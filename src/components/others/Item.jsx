import React from 'react'
import { NavLink } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <article className='item-card'>
      <div className='item-card-img-container'>
        <img src={item.image} alt={item.title} />
        <p>Size {item.category} %</p>
      </div>
      <h2>{item.title}</h2>
      <p>$ {item.price}</p>
      <NavLink to={`/Clicky/detail/${item.id}`}>
        <button className='btn-details'>Details</button>
      </NavLink>
    </article>
  )
}

export default Item