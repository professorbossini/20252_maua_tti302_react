require('dotenv').config()
const axios = require('axios')
const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())

// console.log(process.env.PEXELS_API_KEY)

app.get('/search', async (req, res) => {
  //tratamento
  const pexelsClient = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
      Authorization: process.env.PEXELS_API_KEY
    }
  })
  const result = await pexelsClient.get('/search', {
    params: {
      query: req.query.query
    }
  })
  //responde para o cliente
  res.json({photos: result.data.photos})
})

const port = 3000
app.listen(port, () => console.log(`Back OK. Porta ${port}.`))