import React from 'react';

const home = (props) => {
    
    let styles = {
        width: '20rem',
      };

  return(
      <div class="mb-3">
          <div class="card-deck m-2">
             <div class="card m-2" style={styles} >
             <div class="card-body d-inline">
                <h4 class="card-title">Comptability</h4>
                <h6 class="card-subtitle text-muted">Show comptability</h6>
                <p class="card-text">Profit / Profit per Model / Profit per Seller</p>
                <button class="btn btn-outline-success" onClick={props.Compta}>Access</button>
            </div>
            </div>
            <div class="card m-2" style={styles} >
             <div class="card-body d-inline">
                <h4 class="card-title">Sales</h4>
                <h6 class="card-subtitle text-muted">Show Sales</h6>
                <p class="card-text"> Seller / Client / Model / Size / Quantity / Price</p>
                <button class="btn btn-outline-success" onClick={props.Sale}>Access</button>
            </div>
            </div>
            <div class="card m-2" style={styles} >
             <div class="card-body">
                <h4 class="card-title">Add Sales</h4>
                <h6 class="card-subtitle text-muted">Sale Form</h6>
                <p class="card-text"> Add Seller Sales to the DB</p>
                <button class="btn btn-outline-success" onClick={props.AddSale}>Access</button>
            </div>
            </div>
          </div>

          <div class="card-deck m-2">
             <div class="card m-2" style={styles} >
             <div class="card-body d-inline">
                <h4 class="card-title">Payments</h4>
                <h6 class="card-subtitle text-muted">Show Payments</h6>
                <p class="card-text">Name / Sum / Description</p>
                <button class="btn btn-outline-success" onClick={props.Payment}>Access</button>
            </div>
            </div>
            <div class="card m-2" style={styles} >
             <div class="card-body d-inline">
                <h4 class="card-title">Add Payments</h4>
                <h6 class="card-subtitle text-muted">Payments Form</h6>
                <p class="card-text"> Add Payment to the DB</p>
                <button class="btn btn-outline-success" onClick={props.AddPayment}>Access</button>
            </div>
            </div>
            <div class="card m-2" style={styles} >
             <div class="card-body">
                <h4 class="card-title">Expense</h4>
                <h6 class="card-subtitle text-muted">Show Expense</h6>
                <p class="card-text">Name / Sum / Description</p>
                <button class="btn btn-outline-success" onClick={props.Expense}>Access</button>
            </div>
            </div>
          </div>


          <div class="card-deck m-2">
             <div class="card m-2" style={styles} >
             <div class="card-body d-inline">
             <h4 class="card-title">Add Expense</h4>
                <h6 class="card-subtitle text-muted">Expense Form</h6>
                <p class="card-text"> Add Expense to the DB</p>
                <button class="btn btn-outline-success" onClick={props.AddExpense}>Access</button>
            </div>
            </div>
            <div class="card m-2" style={styles} >
             <div class="card-body d-inline">
                <h4 class="card-title">Model</h4>
                <h6 class="card-subtitle text-muted">Show Model</h6>
                <p class="card-text"> Name / Total Production / Total Price</p>
                <button class="btn btn-outline-success" onClick={props.Model}>Access</button>
            </div>
            </div>
            <div class="card m-2" style={styles} >
             <div class="card-body">
                <h4 class="card-title">Add Model</h4>
                <h6 class="card-subtitle text-muted">Sale Form</h6>
                <p class="card-text"> Add Model Sales to the DB</p>
                <button class="btn btn-outline-success" onClick={props.AddModel}>Access</button>
            </div>
            </div>
          </div>

          <div class="card-deck m-2">
             <div class="card m-2" style={styles} >
             <div class="card-body d-inline">
                <h4 class="card-title">Stocks</h4>
                <h6 class="card-subtitle text-muted">Show Stocks</h6>
                <p class="card-text">Seller / Size / Quantity</p>
                <button class="btn btn-outline-success" onClick={props.Stock}>Access</button>
            </div>
            </div>
            <div class="card m-2" style={styles} >
             <div class="card-body d-inline">
                <h4 class="card-title">Add Stocks</h4>
                <h6 class="card-subtitle text-muted">Stock Form</h6>
                <p class="card-text"> Add Stocks to the DB</p>
                <button class="btn btn-outline-success" onClick={props.AddStock}>Access</button>
            </div>
            </div>
            <div class="card m-2" style={styles} >
             <div class="card-body">
                <h4 class="card-title">Transfert Stock</h4>
                <h6 class="card-subtitle text-muted">Transfert Stock</h6>
                <p class="card-text"> Transfert a stock to another seller </p>
                <button class="btn btn-outline-success" onClick={props.TransferStock}>Access</button>
            </div>
            </div>
          </div>

      </div>
       )
};

export default home;