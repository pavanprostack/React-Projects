import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'

const SearchAPIData = () => {

    let [products, setProduct] = useState({})

    // Search Operation

    let [searchName, setSearchName] = useState('')

    let [foundProduct, setFoundProduct] = useState(products)

    let handleClick = () => {
        alert("Please enter fields")
    }

    let getdata = (event) => {
        let keyWord = event.target.value
        console.log(keyWord);
        setSearchName(keyWord)
    }
    let filter = () => {

        if (searchName !== "") {
            let results = products.filter((singleProduct) => {
                return singleProduct.title.toLowerCase().startsWith(searchName.toLowerCase());
            })
            setFoundProduct(results);
        }
    }
    let refresh = () => {
        const searchName = ""
        if (searchName === "") {
            setFoundProduct(products)
        }
    }

    useEffect(() => {
        Axios.get('https://dummyjson.com/products').then((res) => {
            let dataArray = (res.data).products
            setProduct(dataArray)

        }).catch(() => { })
    }, [])
    return <>
        <div className="container">
            <pre>{JSON.stringify(products)}</pre>
            <pre>{JSON.stringify(foundProduct)}</pre>
            <div className="row">
                <div className="col">

                    <input type="search"
                        className='input'
                        value={searchName}
                        placeholder='Filter'
                        onChange={getdata}
                        onFocus={refresh}
                    />

                    <input type="button"
                        value="search"
                        onClick={searchName === "" ? handleClick : filter.bind(this, searchName)} />

                    <table className='tble table-hover'>
                        <thead className='bg-primary text-white'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                foundProduct.length > 0 ? <>
                                    {
                                        foundProduct.map((product) => {
                                            return <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.title}</td>
                                                <td>{product.price}</td>
                                            </tr>
                                        })
                                    }
                                </> : <h1>No products buddy</h1>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export default SearchAPIData
