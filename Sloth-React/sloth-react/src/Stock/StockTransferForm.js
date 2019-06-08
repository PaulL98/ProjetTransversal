import React, { Component } from 'react';
import axios from 'axios';
import SellerOption from '../Seller/SellerOption';
import StockOption from './StockOption';
import ModelOption from '../Model/ModelOption';

class TransferStock extends Component {
    state = {
        fromIdSeller:'',
        toIdSeller:'',
        idModel:'',
        quantity:'',
        size:'',
        sellers : <SellerOption/>,
        models : <ModelOption/>
    }

    postDataHandler = () => {
        const data = {
            fromIdSeller: this.state.fromIdSeller,
            toIdSeller: this.state.toIdSeller,
            idModel: this.state.idModel,
            quantity: this.state.quantity,
            size: this.state.size
        };
        axios.post('http://localhost:3001/api/stock/transferStock', data)
            .then(response => {
                console.log(response);
                this.setState({fromIdSeller: ''});
                this.setState({toIdSeller: ''});
                this.setState({idModel: ''});
                this.setState({quantity: ''});
                this.setState({size: ''});
            });
    }

    render () {
        return (
            <div>
                <h1>Transfer Stock</h1>
                <div class="container border rounded p-3">
                <div class="form-group">
                <label>From Seller</label>
                   <select class="form-control" value={this.state.fromIdSeller} onChange={(event) => {this.setState({fromIdSeller: event.target.value}); this.setState({stock: <StockOption sellerId={this.state.idSeller}/>}); }}>
                      {this.state.sellers}
                    </select>
                </div>
                <div class="form-group">
                <label>To Seller</label>
                   <select class="form-control" value={this.state.toIdSeller} onChange={(event) => {this.setState({toIdSeller: event.target.value}); this.setState({stock: <StockOption sellerId={this.state.idSeller}/>}); }}>
                      {this.state.sellers}
                    </select>
                </div>
                <div class="form-group">
                <label>Model</label>
                    <select class="form-control" value={this.state.idModel} onChange={(event) => this.setState({idModel: event.target.value})}>
                      {this.state.models}
                    </select>
                </div>
                <div class="form-group">
                <label>Size</label>
                <input class="form-control" type="text" value={this.state.size} onChange={(event) => this.setState({size: event.target.value})} />
                </div>
                <div class="form-group">
                <label>Quantity</label>
                <input class="form-control" type="text" value={this.state.quantity} onChange={(event) => this.setState({quantity: event.target.value})} />
                </div>
                <button class="btn btn-outline-success" onClick={this.postDataHandler}>Add Post</button>
                </div>
            </div>
        );
    }
}

export default TransferStock;