const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products')
	.then(db => console.log('db is connected'))
	.catch(err => console.log(err))