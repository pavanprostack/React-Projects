import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import {Navigate} from 'react-router-dom'

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    info: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const getInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const url = `http://127.66.77.88:5000/product/create`
    Axios.post(url, product).then((response) => {
      console.log(response.data);
      setSubmitted(true);
    }).catch(() => { })
  }

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
    submitted?<><Navigate to="/admin"/></>:
  
    <div className="container mt-5">
      <pre>{JSON.stringify(product)}</pre>
      <pre>{JSON.stringify(submitted)}</pre>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h2>Select Product</h2>
            </div>
            <div className="card-body bg-info">
              <form onSubmit={submitHandler}>
                <div className='form-group'>
                  <input type="text" placeholder='Product Name' className='form-control' onChange={getInput} name='name' />
                </div>
                <div className='form-group'>
                  <input type="file" className='form-control-file' onChange={changeImage} name='image' />
                </div>
                <div className='form-group'>
                  <input type="text" placeholder='Price' className='form-control' onChange={getInput} name='price' />
                </div>
                <div className='form-group'>
                  <input type="text" placeholder='qty' className='form-control' onChange={getInput} name='qty' />
                </div>
                <div className='form-group'>
                  <input type="text" placeholder='info' className='form-control' onChange={getInput} name='info' />
                </div>
                <input type="submit" value='Add Product' className='btn btn-success' />
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
