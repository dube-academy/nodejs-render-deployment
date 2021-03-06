const express = require('express')
const server = express()

server.use((req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log('Server listening on http://localhost:' + PORT)
})
