import React, { useState } from 'react'
import Products from './Products';
import Axios from 'axios'


const App = () => {
  let [search, setSearch] = useState("");
  let [data, setData]=useState([]);

  let changeInput = (event)=>{
   setSearch(event.target.value)
  }
  

  // These id and keys from edamam.com website path=/dashboard/applications/views.
  const YOUR_APP_ID = "51e4738b"
  const YOUR_APP_KEY= "9453c63674a7bd78b262c9093f2fd5ae"

  let submitHandler = (event)=>{
    event.preventDefault();
    console.log(search);
    // This below API url from edamam.com/documents 
    // fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`).then(
    //   response=>response.json()).then(
    //     data=>setData(data.hits))
  
    // This below API url from edamam.com/documents 
    let url = `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`
    Axios.get(url).then((response)=>{
      setData(response.data.hits)
    }).catch(()=>{})

  }

  return <>
  <center>
    <h2>Food Recipe App</h2>

    <form onSubmit={submitHandler}>
      <input type="text" value={search} onChange={changeInput} /><br /><br /> 
      <input type="submit" className='btn btn-primary' value='Search' />
    </form>
    {
      data.length>0?<>
      <Products data={data}/>
      </>:null
    }
  </center>
  </>
}

export default App
