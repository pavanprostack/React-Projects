import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Admin = () => {

    let [products, setProducts] = useState([])

    let [errorMessage, setErrorMessage] = useState('')

    let navigate = useNavigate() 

    useEffect(() => {
        Axios.get('http://localhost:3000/products').then((response) => {
            setProducts(response.data)
        }).catch((err) => {
            setErrorMessage(err)
        })
    }, [])

    let deleteProduct = (id) => {
        Axios.delete(`http://localhost:3000/products/${id}`).then((response) => {
            navigate(0)    // after deleting the product it will refresh and stay at that page only.
         }).catch(() => { })
    }

    return <>
        <div className="container">
            <div className="row">
                <pre>{JSON.stringify(products)}</pre>
                <div className="col-6">
                    <table className='table table-hover'>
                        <thead className='bg-primary text-white'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Modification</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.length > 0 ? <>
                                    {
                                        products.map((product) => {
                                            return <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.name}</td>
                                                <td><img src={product.image} alt="img" width='70px' /></td>
                                                <td>{product.price}</td>
                                                <td>{product.qty}</td>
                                                <td><Link to={`/edit/${product.id}`} className='btn btn-success'>Edit</Link>&nbsp;<Link className='btn btn-danger' onClick={deleteProduct.bind(this, product.id)}>Delete</Link></td>
                                            </tr>
                                        })
                                    }
                                </> : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export default Admin
