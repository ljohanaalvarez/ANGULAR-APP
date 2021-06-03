import express from 'express';
import routes from './routes/routes'
const app = express();

require('./db');

app.use(express.json());
app.use(routes);
app.listen(3000);
console.log('server on port with jijiji', 3000)