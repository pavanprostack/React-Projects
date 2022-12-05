import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';

const Edit = () => {

    const [selectedProduct, setSelectedProduct] = useState({
        name: "",
        image: "",
        price: "",
        qty: "",
        info: ""
    });


    const [updated, setUpdated] = useState(false);

    const updateHandler = (e) => {
        setSelectedProduct({ ...selectedProduct, [e.target.name]: e.target.value })
    }

    const selected_Id = useParams().id

    useEffect(() => {
        Axios.get(`http://127.66.77.88:5000/product/${selected_Id}`).then((response) => {
            setSelectedProduct(response.data);
        }).catch(() => { })
    }, [selected_Id])

    const submitHandler = (e) => {
        e.preventDefault();
        const url = `http://127.66.77.88:5000/product/${selected_Id}`
        Axios.put(url, selectedProduct).then((res) => {
            console.log(res.data)
            setUpdated(true)
        }).catch(() => { })
    }

    const changeImage = (event) => {
        console.log(event);
        const imageFile = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener('load', () => {
            if (reader.result) {
                setSelectedProduct({ ...selectedProduct, image: reader.result })
            }
            else {
                alert('Error Occured')
            }
        })
    }

    return <>
        {
            setUpdated ? <Navigate to='/product' /> :

                <div className="container">
                    <pre>{JSON.stringify(selectedProduct)}</pre>
                    <pre>{JSON.stringify(updated)}</pre>
                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                                <div className="card-header">
                                    <h1>Update Product</h1>
                                </div>
                                <div className="card-body">

                                    <form onSubmit={submitHandler}>
                                        <div className='form-group'>
                                            <input type="text" name='name' value={selectedProduct.name} className='form-control' onChange={updateHandler} placeholder='Product Name' />
                                        </div>
                                        <div className='form-group'>
                                            <input type="file" name='image' className='form-control-file' onChange={changeImage} placeholder='Image' />
                                        </div>
                                        <div className='form-group'>
                                            <input type="number" name='price' value={selectedProduct.price} className='form-control' onChange={updateHandler} placeholder='Price' />
                                        </div>
                                        <div className='form-group'>
                                            <input type="number" name='qty' value={selectedProduct.qty} className='form-control' onChange={updateHandler} placeholder='Qty' />
                                        </div>
                                        <div className='form-group'>
                                            <input type="text" name='info' value={selectedProduct.info} className='form-control' onChange={updateHandler} placeholder='Info' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        }
    </>
}

export default Edit
