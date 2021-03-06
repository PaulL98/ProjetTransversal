const express = require('express');
const router = express.Router();
const con =  require('./connection.js');

router.get('/',(req,res)=>{
  res.sendFile('C:/Users/Paul Lucas/Documents/ProjetTransversal/Sloth-Compta/html/client.html');
});

router.post('/addClient', function (req, res) {
	console.log('client to add',req.body);
	var postData  = req.body;
	addClient(postData).then(result => res.send(result))
	.catch(err => res.send('Error', err.message));
 });
 
 router.get('/allClient', function (req, res) {
	module.exports.getAllClient() 
	.then(result => res.send(result))
	.catch(err => res.send('Error', err.message));
});

router.post('/client', function (req, res) {
	console.log('client to get',req.body);
	module.exports.getClient(req.body.name, req.body.lastName) 
	.then(result => res.send(result))
	.catch(err => res.send('Error', err.message));
});

module.exports.getAllClient = function(){
	return new Promise((resolve, reject)=>{
		con.query('SELECT * FROM Client', (err, results) => {
			if(err) throw err;
			resolve(JSON.stringify(results));
		});
	  });
}

module.exports.getClient =  function(name, lastName){
	return new Promise((resolve, reject)=>{
		con.query('SELECT * FROM Client Where Name = ? && LastName = ?',[name, lastName], (err, results) => {
			if(err) throw err;
			console.log(results);
			resolve(results);
		});
	});
}

function addClient(postData){
	return module.exports.getClient(postData.name, postData.lastName)
	.then(result => insterClient(postData,result))
	.catch(err => console.log('Error', err.message));
}

function insterClient(postData, res){
	return new Promise((resolve, reject)=>{
		if (!res.length){
			con.query('INSERT INTO Client SET ?', postData, function (error, results, fields) {
				if (error) throw error;
				resolve(results);
			});
		}else{
			resolve('Client already existe')
		}
	});
}

function isEmpty(obj) {
	if (obj == null) return true;
	if (obj.length && obj.length > 0)    return false;
	if (obj.length === 0)  return true;
	for (var key in obj) {
			if (hasOwnProperty.call(obj, key)) return false;
	}
	return true;
}

module.exports.router = router;