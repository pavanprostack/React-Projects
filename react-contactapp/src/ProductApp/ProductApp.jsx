import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'


const ProductApp = () => {
    let [product, setProduct] = useState({})
    let [selectedProduct, setSelectedProduct] = React.useState({})

    let getProduct = (kalyan)=>{
        console.log(kalyan.id);
        setSelectedProduct({selectedProduct:kalyan})
    }

        useEffect(() => {
            Axios.get('https://dummyjson.com/products').then((response) => {
                setProduct({ product: response.data })
            }).catch()
        }, [])

        return <>
            <h1>Product App</h1>
            <hr />
            {/* <pre>{JSON.stringify(product)}</pre>
            <pre>{JSON.stringify(selectedProduct)}</pre> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Product List</h2>
                        {
                            Object.keys(product).length > 0 ?
                                <>
                                    <ProductList pavan={product} method={getProduct} />
                                </> : null
                        }

                    </div>
                    <div className="col-md-4">
                        {
                            Object.keys(selectedProduct).length > 0 ? 
                            <>
                            <ProductDetails Details={selectedProduct}/>
                            </> : null
                        }
                    </div>
                </div>
            </div>
        </>
    }

    export default ProductApp




