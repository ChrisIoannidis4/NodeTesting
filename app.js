const express = require('express')
const helmet = require("helmet");
const app = express()
const port = 3000
const cors = require('cors')
const morgan = require('morgan')
const jwt = require ('jsonwebtoken')
const mongoose = require('mongoose');

app.use(cors())
app.use(morgan(':metohod'))
app.use(helmet())
app.get('/', (req, res) => {
  res.send('Hello World, this is Chris Ioannidis, and i love the Dropkick Murphys!')
})

app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.header('Acces-Control-Allow-Headers', 'Origin, Content-Type');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();

})

app.get('/posts', (req, res)=> { res.json(posts)})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

console.log(process.env.SECRET_MESSAGE)
console.log(process.env.TOKEN);

const got = require('got');

(async () => {
	const {body} = await got.post('https://httpbin.org/anything', {
		json: {
			hello: 'world'
		},
		responseType: 'json'
	});

	console.log(body.data);
	//=> {hello: 'world'}
})();