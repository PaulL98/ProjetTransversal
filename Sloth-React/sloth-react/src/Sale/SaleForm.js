import React, { Component } from 'react';
import axios from 'axios';
import SellerOption from '../Seller/SellerOption';
import StockOption from '../Stock/StockOption';
import ClientOption from '../Client/ClientOption';
import ModelOption from '../Model/ModelOption';

class AddSale extends Component {
    state = {
        idSeller: '',
        idModel: '',
        idClient: '0',
        size: '',
        quantity: '',
        price: '',
        name: '',
        lastName: '',
        hasBeenPayed: '1',
        stock: <StockOption sellerId={'1'}/>,
        sellers : <SellerOption/>,
        clients : <ClientOption/>,
        models : <ModelOption/>
    }

    postDataHandler = () => {
        if((this.state.idSeller != '' && this.state.idModel != '' && this.state.size != '' && this.state.quantity != '' && this.state.price != '')&&((this.state.name != '' && this.state.lastName != '')||(this.state.idClient != '0'))){
        if(this.state.idClient === '0'){
           const clientData = {
            name: this.state.name,
            lastName: this.state.lastName
           };
           axios.post('http://localhost:3001/api/client/addClient', clientData)
           .then(response => {
               axios.post('http://localhost:3001/api/client/client',clientData).then(response => {
                   console.log(response);
                   this.setState({idClient: response.data[0].Id});
                   const data = {
                    idSeller: this.state.idSeller,
                    idModel: this.state.idModel,
                    idClient: this.state.idClient,
                    size : this.state.size,
                    quantity: this.state.quantity,
                    price: this.state.price,
                    hasBeenPayed: this.state.hasBeenPayed
                };
                axios.post('http://localhost:3001/api/sale/addSale', data)
                    .then(response => {
                        console.log(response);
                        this.setState({idClient: '0'});
                        this.setState({idModel: ''});
                        this.setState({idSeller: ''});
                        this.setState({size: ''});
                        this.setState({quantity: ''});
                        this.setState({price: ''});
                        this.setState({hasBeenPayed: '1'});
                        this.setState({name: ''});
                        this.setState({lastName: ''});
                        this.setState({clients: ''});
                        this.setState({clients: <ClientOption/>});
                    });
               });
           });
        }else{
        const data = {
            idSeller: this.state.idSeller,
            idModel: this.state.idModel,
            idClient: this.state.idClient,
            size : this.state.size,
            quantity: this.state.quantity,
            price: this.state.price,
            hasBeenPayed: this.state.hasBeenPayed
        };
        axios.post('http://localhost:3001/api/sale/addSale', data)
            .then(response => {
                console.log(response);
                this.setState({idClient: '0'});
                this.setState({idModel: ''});
                this.setState({idSeller: ''});
                this.setState({size: ''});
                this.setState({quantity: ''});
                this.setState({price: ''});
                this.setState({hasBeenPayed: '1'});
                this.setState({name: ''});
                this.setState({lastName: ''});
                this.setState({clients: ''});
                this.setState({clients: <ClientOption/>});
            });
        }
      }
    }

    render () {
        if(this.state.idClient === '0'){
            return (
                <div  class="container my-5"> 
                    <h1>Add Sale</h1>
                    <div class="container border rounded p-3">
                    <div class="row">
                    <div class="form-group col">
                    <label>Seller :</label>
                   <select class="form-control" value={this.state.idSeller} onChange={(event) => {this.setState({idSeller: event.target.value}); this.setState({stock: <StockOption sellerId={this.state.idSeller}/>}); }}>
                      {this.state.sellers}
                    </select>
                    </div>
                    <div class="form-group col">
                    <label>Client :</label>
                   <select class="form-control" value={this.state.idClient} onChange={(event) => this.setState({idClient: event.target.value})}>
                      {this.state.clients}
                    </select>
                    </div>
                    </div>
                    <div class="row">
                    <div class="form-group col">
                       <label>Name :</label>
                       <input class="form-control" type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                       </div>
                       <div class="form-group col">
                       <label>Last Name :</label>
                       <input class="form-control" type="text" value={this.state.lastName} onChange={(event) => this.setState({lastName: event.target.value})} />
                       </div>
                       </div>
                       <div class="row">
                       <div class="form-group col">
                       <label>Model :</label>
                    <select class="form-control" value={this.state.idModel} onChange={(event) => this.setState({idModel: event.target.value})}>
                      {this.state.models}
                    </select>
                    </div>
                    <div class="form-group col">
                    <label>Size :</label>
                    <input class="form-control" type="text" value={this.state.size} onChange={(event) => this.setState({size: event.target.value})} />
                    </div>
                    <div class="form-group col">
                    <label>Quantity :</label>
                    <input class="form-control" type="text" value={this.state.quantity} onChange={(event) => this.setState({quantity: event.target.value})} />
                    </div>
                    </div>
                    <div class="row">
                    <div class="form-group col">
                    <label>Price :</label>
                    <input class="form-control" type="text" value={this.state.price} onChange={(event) => this.setState({price: event.target.value})} />
                    </div>
                    <div class="form-group col">
                    <label>Has Been Payed :</label>
                    <select class="form-control" value={this.state.hasBeenPayed} onChange={(event) => this.setState({hasBeenPayed: event.target.value})}>
                    <option value={1} >Yes</option>
                    <option value={0} >No</option>
                    </select>
                    </div>
                    </div>
                    <button class="btn btn-outline-success" onClick={this.postDataHandler}>Add Sale</button>
                    </div>
               
                </div>
                
            );
        }else{
            return (
                <div  class="container my-5"> 
                    <h1>Add Sale</h1>
                    <div class="container border rounded p-3">
                    <div class="row">
                    <div class="form-group col">
                    <label>Seller :</label>
                   <select class="form-control" value={this.state.idSeller} onChange={(event) => {this.setState({idSeller: event.target.value}); this.setState({stock: <StockOption sellerId={this.state.idSeller}/>}); }}>
                      {this.state.sellers}
                    </select>
                    </div>
                    <div class="form-group col">
                    <label>Client :</label>
                   <select class="form-control" value={this.state.idClient} onChange={(event) => this.setState({idClient: event.target.value})}>
                      {this.state.clients}
                    </select>
                    </div>
                    </div>
                       <div class="row">
                       <div class="form-group col">
                       <label>Model :</label>
                    <select class="form-control" value={this.state.idModel} onChange={(event) => this.setState({idModel: event.target.value})}>
                      {this.state.models}
                    </select>
                    </div>
                    <div class="form-group col">
                    <label>Size :</label>
                    <input class="form-control" type="text" value={this.state.size} onChange={(event) => this.setState({size: event.target.value})} />
                    </div>
                    <div class="form-group col">
                    <label>Quantity :</label>
                    <input class="form-control" type="text" value={this.state.quantity} onChange={(event) => this.setState({quantity: event.target.value})} />
                    </div>
                    </div>
                    <div class="row">
                    <div class="form-group col">
                    <label>Price :</label>
                    <input class="form-control" type="text" value={this.state.price} onChange={(event) => this.setState({price: event.target.value})} />
                    </div>
                    <div class="form-group col">
                    <label>Has Been Payed :</label>
                    <select class="form-control" value={this.state.hasBeenPayed} onChange={(event) => this.setState({hasBeenPayed: event.target.value})}>
                    <option value={1} >Yes</option>
                    <option value={0} >No</option>
                    </select>
                    </div>
                    </div>
                    <button class="btn btn-outline-success" onClick={this.postDataHandler}>Add Sale</button>
                    </div>
               
                </div>
            );
        }
        
    }
}

export default AddSale;