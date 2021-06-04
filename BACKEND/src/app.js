import express from 'express';
import routes from './routes/routes';
import config from './config'
const cors = require('cors')
const app = express();

require('./db');
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(config.port, () => {
    console.log(`App listen in ${config.host} : ${config.port}`)
});
