import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

const header = (props) => {
    
  return(
      <div>

<nav class="navbar sticky-top navbar-expand-sm navbar-dark bg-success mb-3">
        <div class="container">
            <a class="navbar-brand" href="#">Sloth-Compta</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#"  onClick={props.Home}>Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"  onClick={props.Compta}>Compta</a>
                </li>
                
                <NavDropdown title="Sale" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2" onClick={props.AddSale}>Add Sale</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"  onClick={props.Sale}>Sale</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Payment" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2" onClick={props.AddPayment}>Add Payment</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"  onClick={props.Payment}>Payment</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Expense" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2" onClick={props.AddExpense}>Add Expense</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"  onClick={props.Expense}>Expense</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Model" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2" onClick={props.AddModel}>Add Model</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"  onClick={props.Model}>Model</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Stock" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2" onClick={props.Stock}>Add Stock</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"  onClick={props.Stock}>Stock</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"  onClick={props.Stocks}>Transfer Stock</NavDropdown.Item>
                </NavDropdown>
            </ul>
        </div>
    </nav>
      </div>
       )
};

export default header;