
import React, {Component} from 'react'

class Addcustomer extends Component{
state = {account_number:"",
        firstname:"",
        lastname:"",
        address: "",
        email:"",
        balance: "",
        myArrayList:[],
        currentCustomer:""
        }
        


updateAccountNumber = (e) =>{
   // e.preventDfault();
    this.setState({account_number:e.target.value});
}

updateFirstName = (e) =>{
   // e.preventDfault();
    this.setState({firstname:e.target.value});
}

updateLastName = (e) =>{
    //e.preventDfault();
    this.setState({lastname:e.target.value});
}

updateAddress = (e) =>{
   // e.preventDfault();
    this.setState({address:e.target.value});
}

updateEmail = (e) =>{
   // e.preventDfault();
    this.setState({email:e.target.value});
}
updateBalance = (e) =>{
   // e.preventDfault();
    this.setState({balance:e.target.value});
}

addToCustomerList=() =>{
    const newCustomer = {
        'accountnumber':this.state.account_number,
        'firstname':this.state.firstname,
        'lastname':this.state.lastname,
        'address':this.state.address,
        'email':this.state.email,
        'balance':this.state.balance
    };

   const newCustomerAdd = [...this.state.myArrayList,newCustomer];

    this.setState({myArrayList:newCustomerAdd,
                   account_number:"",
                   firstname:"",
                   lastname:"",
                   address:"",
                   email:"",
                   balance:"",
                   currentCustomer:""
                  });

    console.log(newCustomerAdd);
    
}


//add data to the database
submit = () =>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          account_number:this.state.account_number,
          firstname:this.state.firstname,
          lastname:this.state.lastname,
          address:this.state.address,
          email:this.state.email,
          balance:this.state.balance}),
    };
    fetch('http://localhost:8081', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}
deleteAccountNumber = (e) =>{
   this.setState({currentCustomer:e.target.value});
}
delete = () =>{
  const requestOptions = { 
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },  
  };
  fetch(`http://localhost:8081/${this.state.currentCustomer}`, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
}

render(){
    return(
        <div className='addcustfirstdiv'>
         <div className='addcustomer'>
              <div className='subsubheading'>Add Customer</div>
              <tr className='txtcolor'>
                <td>  Account Number:</td>
                <td><input  value={this.state.account_number ? this.state.account_number:""}  onChange={this.updateAccountNumber}/></td>
              </tr>
                
              <tr className='txtcolor'>
                <td>First Name:</td>
                <td><input  value={this.state.firstname ? this.state.firstname:""} onChange={this.updateFirstName}/> </td>
              </tr>

              <tr className='txtcolor'>
                <td>Last Name:</td>  
                <td><input  value={this.state.lastname ? this.state.lastname:""} onChange={this.updateLastName}/></td>
              </tr>
              <tr className='txtcolor'>
                <td>Address:</td>
                <td><input  value={this.state.address ? this.state.address:""} onChange={this.updateAddress}/></td>
              </tr>
              
              <tr className='txtcolor'>
                <td>Email:</td>
                <td><input  value={this.state.email ? this.state.email:""} onChange={this.updateEmail}/></td>
              </tr>
              <tr className='txtcolor'>
                <td>Balance:</td>
                <td><input value={this.state.balance ? this.state.balance:""} onChange={this.updateBalance}/></td>
              </tr>

              <tr className='txtcolor'>
                {/* <td><button type="button" className="button" onClick={this.addToCustomerList}>Submit</button></td> */}
                <td><button type="button" className="button" onClick={this.submit}>Submit</button></td>
              </tr>
          </div>
          -----
          <div className='deletecustomer'>
            <div className="subsubheading">Delete Customer</div>
            <tr className='txtcolor'>
              <td>  Account Number:</td>
              <td><input value={this.state.currentCustomer ? this.state.currentCustomer:""}  onChange={this.deleteAccountNumber}/></td>
            </tr>
            <tr>
              {/* <td><button type="button" className="button" onClick={this.addToCustomerList}>Submit</button></td> */}
              <td><button type="button" className="button" onClick={this.delete} currentCustomer = {this.currentCustomer} >Delete</button></td>
            </tr>
          </div>
        </div>
    )
}
}
//
export default Addcustomer