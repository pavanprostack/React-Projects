import React, { Component } from 'react'
import Axios from 'axios'
import ItemList from './ItemList'
import ItemDetails from './ItemDetails'

class ItemApp extends Component {
  state = {
    item: {},
    selectedList:{}
  }

  getSelectedList = (product)=>{
    console.log(product)
    this.setState({selectedList:product})
  }

  componentDidMount = () => {
    Axios.get('https://dummyjson.com/products').then((response) => {
      this.setState({ item: response.data })
      // console.log(response.data);
    }).catch(() => { })
  }
  render() {
    return <>
      <h1 className='text-white'>Item App</h1>
      <hr />
      {/* <pre>{JSON.stringify(this.state)}</pre> */}
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2 className='text-white'>Item List</h2>
            {
              Object.keys(this.state.item).length > 0 ?
                <>
                  <ItemList prop1={this.state.item} method={this.getSelectedList} />
                </> : null
            }

          </div>
          <div className="col-6">
            <h2 className='text-white'>Item Details</h2>
           {
             Object.keys(this.state.selectedList).length > 0 ? 
             <>
             <ItemDetails props2={this.state.selectedList} />
             </> : null
           }
            
          </div>
        </div>
      </div>
    </>
  }
}

export default ItemApp