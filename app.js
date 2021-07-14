const express = require('express')
const helmet = require("helmet");
const app = express()
const port = 3000
const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use(morgan())
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

console.log(process.env.SECRET_MESSAGE)
console.log(process.env.TOKEN);