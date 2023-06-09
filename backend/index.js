const main = require('./db');
const express = require('express')

main();

const app = express()
const port = 4000

// Init Middleware
app.use(express.json({ extended: false }));

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  
})


