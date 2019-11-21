const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.listen(8080, () => console.log('server running at 8080'))