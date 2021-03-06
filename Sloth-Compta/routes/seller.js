const express = require('express');
const router = express.Router();
const con =  require('./connection.js');

router.get('/',(req,res)=>{
	res.sendFile('C:/Users/Paul Lucas/Documents/ProjetTransversal/Sloth-Compta/html/seller.html');
  });

router.post('/addSeller', function (req, res) {
	var postData  = req.body;
	var sql = 'INSERT INTO Seller (Name, LastName) VALUES (@Name = ? , @LastName = ?)'
	con.query(sql, [req.body.Name, req.body.LastName ] , function (error, results, fields) {
	   if (error) throw error;
	   res.send(results);
	 });
 });

router.get('/allSeller', function (req, res) {
	module.exports.getAllSeller() 
	.then(result => res.send(result))
	.catch(err => res.send('Error', err.message));
})

module.exports.getAllSeller = function(){
	return new Promise((resolve, reject)=>{
		con.query('SELECT * FROM Seller', (err, results) => {
			if(err) throw err;
			resolve(JSON.stringify(results));
		});
	  });
}


module.exports.router = router;