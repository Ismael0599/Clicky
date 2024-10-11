import React, { useState, useEffect } from "react";
import mockProducts from "../../assets/mockData.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    //! States  
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);



    const { categoryId } = useParams(); // Extrae valor de categoryId

    useEffect(() => {

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockProducts)
            }, 2000);
        });

        const getProducts = async () => {
            setLoading(true);

            try {
                const promProducts = await promise; // Espera a que se resuelva la promesa

                let productsFiltered;
                if (categoryId) {
                    // Filtra los productos según categoryId
                    productsFiltered = promProducts.filter(product => product.category === categoryId);
                } else {
                    // Devuelve todos los productos si no hay categoría
                    productsFiltered = promProducts;
                }

                setProducts(productsFiltered);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false); // Ocultar el loader
            }
        };

        getProducts(); // Llama a la función para obtener los productos


    }, [categoryId]); // Vuelve a ejecutar si categoryId cambia

    return (
        loading ? <h1>Loading...</h1> : <ItemList products={products} />
    );
}

export default ItemListContainer