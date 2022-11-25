import React, { Component } from 'react'
import Axios from 'axios'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'


class ContactApp extends Component {
  constructor(props){
    super(props)
    this.state= {
      contacts : {},
      selectedUsers:{}
    }
  }

  getSelectedUser = (value)=>{
    console.log(value.firstName)
    this.setState({selectedUsers:value})
  }

  componentDidMount = ()=>{
    Axios.get('https://dummyjson.com/users').then((response)=>{
      console.log(response.data);
      this.setState({contacts:response.data})
    }).catch(()=>{})
  }

  render() {
    return <>
    <h1>Contact App</h1>
    {/* <pre>{JSON.stringify(this.state.contacts)}</pre>
    <pre>{JSON.stringify(this.state.selectedUsers)}</pre> */}
     <div className="container">
      <div className="row">
        <div className="col-md-8">
          {
           Object.keys( this.state.contacts).length > 0 ?
            <>
            <h2>Contact List</h2>
            <ContactList pavan={this.state.contacts} method1={this.getSelectedUser} />
           </> : null
          }
        </div>
        <div className="col-md-4">
          <h2>Contact Details</h2>
          {
            Object.keys(this.state.selectedUsers).length > 0 ?
             <>
              <ContactDetails kalyan={this.state.selectedUsers} />
             </> : null
          }
         
        </div>
      </div>
     </div>
     
     </>
  }
}

export default ContactApp