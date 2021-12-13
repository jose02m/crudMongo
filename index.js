const express = require('express');
const app = express();

require('./db/database');

const routes = require('./src/routes/productRoutes');

app.set('port', process.env.PORT || 3000);
app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.use('/', routes);

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});