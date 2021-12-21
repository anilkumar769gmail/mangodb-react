import React,{Component} from 'react';

import './App.css';

class Tutorials extends Component{

    state ={
        tutorials:null,
    }
    
    async componentDidMount(){
        
        const getCall = await fetch('http://localhost:8081/tutorials/');
        const getVal = await getCall.json();
        const tutorials = getVal;
        this.setState({tutorials:tutorials})
    }
    render(){
        return(
            <div>
               <div className='subheading'>Customer Record Management </div>
                <table>
                    <tr className='tablerow'>
                        <th className='tableheader'>Account Number</th>
                        <th className='tableheader' >Fisrt Name</th>
                        <th className='tableheader'>Last Name</th>
                        <th className='tableheader'>Address</th>
                        <th className='tableheader'>Email</th>
                        <th className='tableheader'>Balance</th> 
                    </tr>
                    
                        {this.state.tutorials && this.state.tutorials.map(tutorial =>
                    <tr className='tablerow'>
                        <td className='tabledata'>{tutorial.account_number}</td>
                        <td className='tabledata'>{tutorial.firstname}</td>
                        <td className='tabledata'>{tutorial.lastname}</td>
                        <td className='tabledata'>{tutorial.address}</td>
                        <td className='tabledata'>{tutorial.email}</td>
                        <td className='tabledata'> ${tutorial.balance}</td>
                    </tr>
                    )}
                </table>
                
            </div>
        );

    }
}
export default Tutorials