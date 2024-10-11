import React, { useEffect, useState } from 'react'
import mockProducts from "../../assets/mockData.json"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const { id } = useParams(); // Extrae valor del id

    useEffect(() => {

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockProducts)
            }, 2000)
        })

        const getProducts = async () => {
            setLoading(true)

            try {
                const promProducts = await promise;

                if (id) {
                    const productId = parseInt(id);
                    let productFind = promProducts.find((product) => product.id === productId);
                    setProduct(productFind);
                }

            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false)
            }
        }

        getProducts();


    }, [id])


    return (
        loading ? <h1>Loading...</h1> : <ItemDetail product={product} />
    )
}

export default ItemDetailContainer