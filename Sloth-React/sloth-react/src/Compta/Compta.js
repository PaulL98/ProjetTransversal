import React, { Component } from 'react';
import SellerCompta from './SellerCompta';
import ModelCompta from './ModelCompta';
import axios from 'axios';

class Compta extends Component {
  state = {
      profit : [],
    comptaSeller : [],
    comptaModel : [],
    currentState : [],
    comptaCreance : [],
    comptaExpense : []
  }

  componentDidMount(){
    this.getSellerCompta();
    this.getModelCompta();
    this.getProfit();
    this.getCreance();
    this.getExpense();
   }

render(){
  return (
    <div class="container my-5">
    <div className="App">
    <div class="row">
      <div class="container col">
      <h1> Profit :</h1>
      {this.state.profit}
      </div>
      <div class="container col">
      <h1> Créance :</h1>
      {this.state.comptaCreance}
      </div>
      <div class="container col">
      <h1> Expense :</h1>
      {this.state.comptaExpense}
      </div>
      </div>
      <h1> Profit Per Model :</h1>
      <div class="container">
      {this.state.comptaModel}
      </div>
      <h1> Seller :</h1>
      <div class="container">
      {this.state.comptaSeller}
      </div>
    </div>
    </div>
  );
}

getProfit = () => {
    axios.get('http://localhost:3001/api/compta/compta').then( response => {console.log(response)});
    axios.get('http://localhost:3001/api/compta/compta').then( response => {
      this.setState({profit : response.data.map((compta, index) => {
        return( <p>{compta.SaleIncome - (compta.MarchandisePrice + compta.Expense)} Chf </p>);
       })})
       console.log(this.state.comptaSeller);
    })
   }

   getCreance = () => {
    axios.get('http://localhost:3001/api/compta/comptaCreance').then( response => {
      this.setState({comptaCreance : response.data.map((compta, index) => {
        return( <p>{compta.Creance} Chf </p>);
       })
    })
   })
  }

  getExpense = () => {
    axios.get('http://localhost:3001/api/compta/comptaExpense').then( response => {
      this.setState({comptaExpense : response.data.map((compta, index) => {
        return( <p>{compta.Expense} Chf </p>);
       })
    })
   })
  }

 getSellerCompta = () => {
  axios.get('http://localhost:3001/api/compta/sellerCompta').then( response => {console.log(response)});
  axios.get('http://localhost:3001/api/compta/sellerCompta').then( response => {
    this.setState({comptaSeller : response.data.map((compta, index) => {
      return( <SellerCompta
       Name={compta.Name}
       LastName={compta.LastName}
       SumSale={compta.SumSale}
       SumExpense={compta.SumExpense}
       SumPayment={compta.SumPayment}
       key={compta.Id}
     />);
     })})
     console.log(this.state.comptaSeller);
  }).then( () => {
    let state = this.state.comptaSeller.slice();
    state = <table id="customers"> <tr>
    <th>Name</th>
    <th>Last Name</th>
    <th>Sum</th> 
  </tr>
  {state}
  </table>;
    this.setState({comptaSeller : state});
  });
 }

 getModelCompta = () => {
  axios.get('http://localhost:3001/api/compta/modelCompta').then( response => {console.log(response)});
  axios.get('http://localhost:3001/api/compta/modelCompta').then( response => {
    this.setState({comptaModel : response.data.map((compta, index) => {
      return( <ModelCompta
       Name={compta.Name}
       Income={compta.Income}
       key={compta.Id}
     />);
     })})
     console.log(this.state.comptaModel);
  }).then( () => {
    let state = this.state.comptaModel.slice();
    state = <table id="customers"> <tr>
    <th>Name</th>
    <th>Income</th>
  </tr>
  {state}
  </table>;
    this.setState({comptaModel : state});
  });
 }

}

export default Compta;
