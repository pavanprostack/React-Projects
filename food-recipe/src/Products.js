import React from 'react'

const Products = ({data}) => {
  return <>
  <div className="container mt-5">
    <div className="row">
        {
            data.map((data, index) =>{
              return   <div className="col-md-4" key={index}>
                    <div className="card">
                        <div className="card-header">
                            <img src={data.recipe.image} alt="img" />
                        </div>
                        <div className="card-body">
                            <ul className='list-group'>
                                <li className='list-group-item'><b>{data.recipe.label}</b></li>
                                <li className='list-group-item'>Total Amount of Calories : <b>{Math.round(data.recipe.calories)}</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
  </div>
  </>
}

export default Products
