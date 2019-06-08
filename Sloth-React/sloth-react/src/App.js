import React, { Component } from 'react';
import './App.css';
import Payment from './Payment/Payment';
import AddPayment from './Payment/PaymentForm';
import AddModel from './Model/ModelForm';
import AddExpense from './Expense/ExpenseForm';
import Expense from './Expense/Expense';
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Model from './Model/Model';
import Compta from './Compta/Compta';
import Stock from './Stock/Stock';
import Sale from './Sale/Sale';
import AddSale from './Sale/SaleForm';

class App extends Component {
  state = {
    payment : <Payment/>,
    expense : <Expense/>,
    sale : <Sale/>,
    model : <Model/>,
    stock: <Stock/>,
    compta : <Compta/>,
    addPayment : <AddPayment/>,
    addExpense : <AddExpense/>,
    addModel : <AddModel/>,
    addSale : <AddSale/>,
    home : <Home Payment={() => this.setCurrentState(this.state.payment)}
                 Expense={() => this.setCurrentState(this.state.expense)}
                 Sale={() => this.setCurrentState(this.state.sale)}
                 Model={() => this.setCurrentState(this.state.model)}
                 Stock={() => this.setCurrentState(this.state.stock)}
                 Compta={() => this.setCurrentState(this.state.compta)}
                 AddPayment={() => this.setCurrentState(this.state.addPayment)}
                 AddExpense={() => this.setCurrentState(this.state.addExpense)}
                 AddModel={() => this.setCurrentState(this.state.addModel)}
                 AddSale={() => this.setCurrentState(this.state.addSale)}/>,
    currentState : []
  }

  componentDidMount(){
    this.setCurrentState(this.state.home);
   }

   setCurrentState = (state) =>{
     this.setState({currentState : [state]})
   }

render(){
  return (
    <>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
      crossorigin="anonymous"></link>
      <link rel="stylesheet" href="node_modules/lib/bootstrap2-toggle.css"></link>

    <div className="App">
      <Header
      Home={() => this.setCurrentState(this.state.home)}
      Payment={() => this.setCurrentState(this.state.payment)}
      Expense={() => this.setCurrentState(this.state.expense)}
      Sale={() => this.setCurrentState(this.state.sale)}
      Model={() => this.setCurrentState(this.state.model)}
      Stock={() => this.setCurrentState(this.state.stock)}
      Compta={() => this.setCurrentState(this.state.compta)}
      AddPayment={() => this.setCurrentState(this.state.addPayment)}
      AddExpense={() => this.setCurrentState(this.state.addExpense)}
      AddModel={() => this.setCurrentState(this.state.addModel)}
      AddSale={() => this.setCurrentState(this.state.addSale)}/>
      {this.state.currentState}
      
    </div>
    </>
  );
}

}

export default App;
