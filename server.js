const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"public/index.html"))
})

app.use(express.static(path.join(__dirname,"public")))
app.use("/build", express.static(path.join(__dirname,"build")))

app.listen(port, () => {
  console.log('site is on port '+ port)
})
