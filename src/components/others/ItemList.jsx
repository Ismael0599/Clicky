import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
  return (
    <div className='itemList'>
      {products.map((product) => {
        return (
          <Item item={product} key={product.id} />
        )
      })}
    </div>
  )
}

export default ItemList