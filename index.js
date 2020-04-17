const express = require('express')
const path = require('path')
const logger = require('./middleware/logger')

const app = express()

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

//init middleware
// app.use(logger)

//set a static folder
app.use(express.static(path.join(__dirname, 'public')))

//members api routes

app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
