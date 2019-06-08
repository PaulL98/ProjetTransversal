import React, { Component } from 'react';
import axios from 'axios';
import SellerOption from '../Seller/SellerOption';

class AddExpense extends Component {
    state = {
        idSeller: '',
        sum: '',
        sellers : <SellerOption/>,
        description: ''
    }
    
    postDataHandler = () => {
        const data = {
            idSeller: this.state.idSeller,
            sum: this.state.sum,
            description: this.state.description
        };
        axios.post('http://localhost:3001/api/expense/addExpense', data)
            .then(response => {
                console.log(response);
                this.setState({idSeller: ''});
                this.setState({sum: ''});
                this.setState({description: ''});
            });
    }

    render () {
        return (
            <div>
                <h1> Add Expense</h1>
                <div class="container border rounded p-3">
                <div class="form-group">
                <label>idSeller</label>
               <select class="form-control" value={this.state.idSeller}  onChange={(event) => this.setState({idSeller: event.target.value})}>
                  {this.state.sellers}
                </select>
                </div>
                <div class="form-group">
                <label>Sum</label>
                <input  class="form-control" type="text" value={this.state.sum} onChange={(event) => this.setState({sum: event.target.value})} />
                </div>
                <div class="form-group">
                <label>Description</label>
                <input   class="form-control"type="text" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})} />
                </div>
                <button class="btn btn-outline-success" onClick={this.postDataHandler}>Add Post</button>
                </div>
            </div>
        );
    }
}

export default AddExpense;