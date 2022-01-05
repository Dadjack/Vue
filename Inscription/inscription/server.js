// const express = require('express');
const cors = require('cors');
// const app = express();
const port = 8080;

// res.header('Access-Control-Allow-Origin','*');

// res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');

// res.header('Access-Control-Allow-Headers','Origin,Content-Type,X-Requested-With,Accept,Authorization');




const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/hello', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers','Origin,Content-Type,X-Requested-With,Accept,Authorization');
    res.send('Hello World');
})

app.listen(3000, () => {
    console.log('alive');
})

app.use(cors());