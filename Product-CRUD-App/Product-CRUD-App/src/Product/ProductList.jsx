import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'

const ProductList = () => {

    let [products, setProducts] = useState([])

    useEffect(() => {
        let url = 'http://localhost:3000/products'
        Axios.get(url).then((response) => {
            // console.log(response)
            setProducts(response.data);
        }).catch(() => { })
    }, []);


    return <>
        <div className="container">
            <pre>{JSON.stringify(products)}</pre>
            <div className="row">
                {
                    products.length > 0 ?
                        <>
                            {
                                products.map((product) => {
                                    return <div className="col-3" key={product._id}>
                                        <div className="card bg-info ">
                                            <div className="card-header">
                                                <img src={product.image} alt="img" width='70px' />
                                            </div>
                                            <div className="card-body" >
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>{product.name}</li>
                                                    <li className='list-group-item'>{product.price}</li>
                                                    <li className='list-group-item'>{product.qty}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </> : <h1>-----No Products!------</h1>
                }

            </div>
        </div>
    </>
}

export default ProductList
