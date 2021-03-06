import React, { Component } from 'react';
import axios from 'axios';

class Payment extends Component{
    state = {
      payment : [],
      currentState : []
    }

    componentDidMount(){
        this.getAllPayment();
       }

    render(){
  return(
           <div  class="container my-5">
           <h1>Payment</h1>
           {this.state.payment}
           </div>
       )
  }

       getAllPayment = () => {
        axios.get('http://localhost:3001/api/payment/allPayment').then( response => {
          this.setState({payment : response.data.map((payment, index) => {
            return( 
                <tr>
               <td>{payment.LastName}</td>
               <td>{payment.Sum}</td>
               <td>{payment.Description}</td>
               {console.log(payment.Date)}
               <td>{payment.Date.replace(/-/g, "/").replace(/T/g, " ").substring(0, payment.Date.length - 8)}</td>
           </tr>
          );
           })})
        }).then( () => {
          let state = this.state.payment.slice();
          state = <table id="customers"> <tr>
          <th>LastName</th>
          <th>Sum</th> 
          <th>Description</th> 
          <th>Date</th> 
        </tr>
        {state}
        </table>;
          this.setState({payment : state});
        });
       }
};


export default Payment;