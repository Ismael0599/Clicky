import React from 'react'

const Item = ({item}) => {
  return (
    <div className='item-card'>
        <img src={item.image} alt={item.title}/>
        <h2>{item.title}</h2>
        <p>$ {item.price}</p>
        <button className='btn-details'>Details</button>
    </div>
  )
}

export default Item