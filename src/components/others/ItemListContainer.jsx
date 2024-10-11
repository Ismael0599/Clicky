import React, { useState, useEffect } from "react";
import mockProducts from "../../assets/mockData.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        let productsFiltered;
        if (categoryId) {
            // Filtra el arreglo mockProducts y devuelve un nuevo arreglo con los productos cuya categoría coincide con el categoryId
            productsFiltered = mockProducts.filter(product => product.category === categoryId)
        } else {
            productsFiltered = mockProducts;
        }
       
        setProducts(productsFiltered)

    }, [categoryId]);    
    
    return (        
        <ItemList products={products} />
    );
}

export default ItemListContainer