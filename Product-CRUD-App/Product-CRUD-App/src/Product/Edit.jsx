import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'



const Edit = () => {

    let [selectedProduct, setSelectedProduct] = useState({
        name: "",
        price: "",
        image: "",
        qty: "",
        info: ""

    })

    let [submitted, setSubmitted] = useState(false)

    let updateHandler = (event) => {
        setSelectedProduct({ ...selectedProduct, [event.target.name]: event.target.value })
    }

    let selectedId = useParams().id   // using this we can get product id

    useEffect(() => {
        Axios.get(`http://localhost:3000/products/${selectedId}`).then((response) => {
            setSelectedProduct(response.data)
        }).catch()
    }, [selectedId])


    let submitHandler = (event) => {
        event.preventDefault();

        let url = `http://localhost:3000/products/${selectedId}`;
        Axios.put(url, selectedProduct).then((response) => {
            console.log(response.data)
            setSubmitted(true);
        }).catch(() => { })

    }

    // Change Image

    let changeImage = (event) => {
        let imageFile = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener('load', () => {
            if (reader.result) {
                setSelectedProduct({ ...selectedProduct, image: reader.result });
            }
            else {
                alert('Error Occurred');
            }
        });
    };


    return <>
        {
            submitted ? <Navigate to="/product" /> :

                <div className="container mt-5">

                    <pre>{JSON.stringify(selectedProduct)}</pre>
                    <pre>{JSON.stringify(submitted)}</pre>

                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <h3>Create Product</h3>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={submitHandler}>
                                            <div className='form-group'>
                                                <input type="text" onChange={updateHandler} name='name' value={selectedProduct.name} className='form-control' placeholder='Product Name' />
                                            </div>
                                            <div className='form-group'>
                                                <input type="number" onChange={updateHandler} name='price' value={selectedProduct.price} className='form-control' placeholder='Price' />
                                            </div>
                                            <div className='form-group'>
                                                <input type="file" onChange={changeImage} name='image' className='form-control-file' placeholder='Image'  />
                                                <img src={selectedProduct.image} alt="img" width='40px' />
                                            </div>
                                            <div className='form-group'>
                                                <input type="number" onChange={updateHandler} name='qty' value={selectedProduct.qty} className='form-control' placeholder='Qty' />
                                            </div>
                                            <div className='form-group'>
                                                <input type="text" onChange={updateHandler} name='info' value={selectedProduct.info} className='form-control' placeholder='Info' />
                                            </div>
                                            <input type="submit" className='btn btn-success' value='Create Product' />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        }
    </>
}

export default Edit
