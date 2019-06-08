import React, { Component } from 'react';
import axios from 'axios';

class StockOption extends Component{
    state = {
      stock : [],

      currentState : []
    }

    componentDidMount(){
        this.getStock();
       }

    render(){
  return(
           <>
           <option value={0}> Choose Stock </option>
           {this.state.stock}
           </>
       )
  }

       getStock = () => {
         //if(this.state.sellerId === parseInt(this.state.sellerId , 10)){
        axios.get('http://localhost:3001/api/stock/StockFromSeller?idSeller='+this.props.sellerId).then( response => {
          {console.log(response)}
          this.setState({stock : response.data.map((stock, index) => {
              return( 
                <option value={stock.Id} >{stock.Name}</option>
               );
           })})
        });
       // }
       }
};


export default StockOption;