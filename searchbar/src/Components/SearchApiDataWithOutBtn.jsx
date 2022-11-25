import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const SearchApiDataWithOutBtn = () => {

    let [users, setUsers] = useState({})

    // Search Operation
    let [searchName, setSearchName] = useState('')
    let [foundUser, setFoundUser]= useState(users)

    let filter = (event)=>{
        let keyWord = event.target.value
        setSearchName(keyWord)

        if(searchName !== ""){
            let results = users.filter((singleUser)=>{
                return singleUser.firstName.toLowerCase().startsWith(searchName.toLowerCase())
            })
            setFoundUser(results)
        }
        else{
            setFoundUser(users)
        }
    }

    let refresh = ()=>{
        // const searchName = ""
        if(searchName == ""){
            setFoundUser(users)
        }
    }

    useEffect(() => {
        Axios.get('https://dummyjson.com/users').then((response) => {
            let dataArray = (response.data).users
            setUsers(dataArray)
        }).catch(() => { })
    }, [])

    return <>
        <div className="container">
            <pre>{JSON.stringify(users)}</pre>
            <div className="row">
                <div className="col-6">

                    <input type="search"
                     value={searchName}
                      onChange={filter} 
                      className='input'
                       onFocus={refresh}
                       placeholder='Filter' />

                    <table className='table table-hover'>
                        <thead className='bg-success'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                foundUser.length > 0 ? <>
                                    {
                                        foundUser.map((user) => {
                                            return <tr  key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.firstName}</td>
                                                <td>{user.email}</td>
                                            </tr>
                                        })
                                    }
                                </> : <h1>No Beutiful...There is no Users</h1>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export default SearchApiDataWithOutBtn
