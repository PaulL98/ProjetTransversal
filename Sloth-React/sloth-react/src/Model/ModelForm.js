import React, { Component } from 'react';
import axios from 'axios';

class AddModel extends Component {
    state = {
        name: '',
        totalProduction: '',
        totalPrice: '',
        isClothes: '0'
    }

    postDataHandler = () => {
        if(this.state.name != '' && this.state.totalProduction != '' && this.state.totalPrice != ''){
        const data = {
            name: this.state.name,
            totalProduction: this.state.totalProduction,
            totalPrice: this.state.totalPrice,
            isClothes: this.state.isClothes
        };
        axios.post('http://localhost:3001/api/model/addModel', data)
            .then(response => {
                console.log(response);
                this.setState({name: ''});
                this.setState({totalProduction: ''});
                this.setState({totalPrice: ''});
                this.setState({isClothes: ''});
            });
        }
    }

    render () {
        return (
            <div class="container my-5">
                <h1>Add Model</h1>
                <div class="container border rounded p-3">
                <div class="form-group">
                <label>Name :</label>
                <input class="form-control" type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                </div>
                <div class="form-group">
                <label>Total Production :</label>
                <input class="form-control" type="text" value={this.state.totalProduction} onChange={(event) => this.setState({totalProduction: event.target.value})} />
                </div>
                <div class="form-group">
                <label>Total Price :</label>
                <input class="form-control" type="text" value={this.state.totalPrice} onChange={(event) => this.setState({totalPrice: event.target.value})} />
                </div>
                <div class="form-group">
                <label>Is Clothes :</label>
                <select class="form-control" value={this.state.isClothes}  onChange={(event) => this.setState({isClothes: event.target.value})}>
                <option value={0} >Not Clothes</option>
                <option value={1} >Clothes</option>
                </select>   
                </div>
                <button class="btn btn-outline-success" onClick={this.postDataHandler}>Add Model</button>
                </div>
            </div>
        );
    }
}

export default AddModel;