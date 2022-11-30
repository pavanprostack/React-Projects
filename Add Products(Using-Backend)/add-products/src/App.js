import React, { useState } from 'react'
import Axios from 'axios'

const App = () => {


  const [data, setData] = useState({
    id: "",
    name: ""
  });

  const getInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const submitHandler= (event)=>{
    event.preventDefault();
    const url = `http://localhost:8000/addproducts`
    Axios.post(url, data).then((res)=>{
      alert("Data Sent Successfully")
      setData("")
    }).catch(()=>{})
  }

  return <>

    <div className="container mt-5">
      <pre>{JSON.stringify(data)}</pre>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-header bg-success">
              <h1>Add Products</h1>
            </div>
            <div className="card-body">

              <form onSubmit={submitHandler}>

                <div className='form-group'>
                  <input type="number" className='form-control' required placeholder='Product ID' name='id' onChange={getInput} />
                </div>

                <div className='form-group'>
                  <input type="text" className='form-control' required placeholder='Product Name' name='name' onChange={getInput} />
                </div>

                <input type="submit" value='submit' onChange={getInput} />

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default App
