require('dotenv').config()
const axios = require('axios')
const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())
app.get('/search', async (req, res) => {
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
  console.log({photos: result.data.photos})
  res.json({photos: result.data.photos})
})
const port = 3000
app.listen(port, () => console.log(`Back OK. Porta ${port}.`))