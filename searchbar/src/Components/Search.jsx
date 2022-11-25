import React from 'react'
import { useState } from 'react';
import '../Components/style.css'

const USERS = [
    { id: 1, name: 'Andy', age: 32 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Tom Hulk', age: 40 },
    { id: 4, name: 'Tom Hank', age: 50 },
    { id: 5, name: 'Audra', age: 30 },
    { id: 6, name: 'Anna', age: 68 },
    { id: 7, name: 'Tom', age: 34 },
    { id: 8, name: 'Tom Riddle', age: 28 },
    { id: 9, name: 'Bolo', age: 23 },
];
const Search = () => {
    // The value of search field
    const [name, setName] = useState('')

    // The search result
    const [foundUsers, setFoundUsers] = useState(USERS)
    //console.log(USERS);

    const filter = (e) => {
        let keyWord = e.target.value
        if (keyWord != '') {
            const results = USERS.filter((user) => {
                return user.name.toLowerCase().startsWith(keyWord.toLowerCase())
                // use the toLowerCase() method to make it case-insensitive.
            })
            setFoundUsers(results)
        } else {
            setFoundUsers(USERS)
            // if the text field is empty, show all users.
        }
        setName(keyWord)
    }


    return <>
        <div className="container">
            <input type="search" value={name} className='input' placeholder='Filter' onChange={filter} />
        </div>

        <div className='user-list'>
            {
                foundUsers && foundUsers.length > 0 ? <>
                {
                    foundUsers.map((user)=>(
                        <li key={user.id} className='user'>
                            <span className='user-id'>{user.id}</span>
                            <span className='user-name'>{user.name}</span>
                            <span className='user-age'>{user.age} Years Old </span>
                        </li>
                    ))
                }
                </> : <h1 className='noResults'>No results found!</h1>
            }
        </div>
    </>
}

export default Search