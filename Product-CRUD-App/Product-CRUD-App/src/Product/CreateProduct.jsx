import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { Navigate } from 'react-router-dom'



const CreateProduct = () => {

  let [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    qty: "",
    info: ""

  })

  let [submitted, setSubmitted] = useState(false)
  // let [errormessage, setErrormessage] = useState('')

  let updateHandler = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value })
  }


  let submitHandler = (event) => {
    event.preventDefault();
    //    alert(JSON.stringify(product))

    let url = 'http://localhost:3000/products';
    Axios.post(url, product).then((response) => {
      console.log(response.data)
      setSubmitted(true);
    }).catch(( ) => { })

  }

  // Change Image

  let changeImage = (event) => {
    console.log(event);
    let imageFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.addEventListener('load', () => {
      if (reader.result) {
        setProduct({ ...product, image: reader.result });
      }
      else {
        alert('Error Occurred');
      }
    });
  };


  return <>
    {
      submitted ? <Navigate to="/admin"/>:

    <div className="container mt-5">
      <pre>{JSON.stringify(product)}</pre>
      <pre>{JSON.stringify(submitted)}</pre>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-header bg-warning text-white">
              <h3>Create Product</h3>
            </div>
            <div className="card-body bg-success">
               
              <form onSubmit={submitHandler}>
                <div className='form-group'>
                  <input type="text" onChange={updateHandler} name='name' className='form-control' placeholder='Product Name' />
                </div>
                <div className='form-group'>
                  <input type="number" onChange={updateHandler} name='price' className='form-control' placeholder='Price' />
                </div>
                <div className='form-group'>
                  <input type="file" onChange={changeImage} name='image' className='form-control-file' placeholder='Image' />
                </div>
                <div className='form-group'>
                  <input type="number" onChange={updateHandler} name='qty' className='form-control' placeholder='Qty' />
                </div>
                <div className='form-group'>
                  <input type="text" onChange={updateHandler} name='info' className='form-control' placeholder='Info' />
                </div>
                <input type="submit" className='btn btn-danger' value='Create Product' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
     }
  </>
}

export default CreateProduct
