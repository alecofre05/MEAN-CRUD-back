const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

connectDB();
app.use(cors());

app.use(express.json());

app.use('/api/servicios', require('./routes/services'));

app.listen(4000, () => {
    console.log("el sv corre correctamente");
})