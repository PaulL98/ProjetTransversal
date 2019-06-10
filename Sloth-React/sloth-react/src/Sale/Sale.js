import React, { Component } from 'react';
import axios from 'axios';

class Sale extends Component{
    state = {
      sale : [],
      currentState : [],
      hasBeenPayed : []
    }

    componentDidMount(){
        this.getAllSale();
       }

    render(){
  return(
           <div class="container my-5">
           <h1>Sale</h1>
           {this.state.sale}
           </div>
       )
  }

  postDataHandler = (id,hasBeenPayed) => {
    const data = {
        id: id,
        hasBeenPayed: hasBeenPayed
    };
    console.log(data);
    axios.post('http://localhost:3001/api/sale/updateHasBeenPayed', data).then(()=>{
      this.getAllSale();
    });
}
      
  getAllSale = () => {
    axios.get('http://localhost:3001/api/sale/allSale').then( response => {
      this.setState({sale : response.data.map((sale, index) => {
        return( <tr>
            <td>{sale.Seller}</td>
            <td>{sale.Name}</td>
            <td>{sale.LastName}</td>
            <td>{sale.Model}</td>
            <td>{sale.Size}</td>
            <td>{sale.Quantity}</td>
            <td>{sale.Price}</td>
            <td>{sale.Date.replace(/-/g, "/").replace(/T/g, " ").substring(0, sale.Date.length - 8)}</td> 
            <td><div class="form-group m-0 p-0">
                    
                    <select class="form-control" value={sale.HasBeenPayed} onChange={(event) => { this.postDataHandler(sale.Id, event.target.value);}}>
                    <option value={'1'} >Yes</option>
                    <option value={'0'} >No</option>
                    </select>
                    </div>
            </td>
        </tr>);
       })})
    }).then( () => {
      let state = this.state.sale.slice();
      state = <table id="customers"> <tr>
      <th>Seller</th>
      <th>Name</th> 
      <th>Lastname</th> 
      <th>Model</th> 
      <th>Size</th> 
      <th>Quantity</th> 
      <th>Price</th>
      <th>Date</th> 
      <th>Payed</th>
    </tr>
    {state}
    </table>;
      this.setState({sale : state});
    });
   }
  
};


export default Sale;