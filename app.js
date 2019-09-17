const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(morgan('common'))
app.use(cors());



const playApps = require('./apps-data.js')

app.get('/', (req, res) => {
    res.send('app is connected')
    app.listen(8000, () => {
        console.log('Express server is listening on port 8000!');
      });
})

app.get('/apps', (req, res) => {
    const { search = '', sort, genres } = req.query

    if(sort) {
        if(!['rating', 'app'].includes(sort)) {
            return res.status(400).send('sort by rating or app name')
        }
    }
    if(genres) {
        if(!['action', 'puzzle', 'strategy', 'casual', 'arcade', 'card'].includes(sort)) {
            return res.status(400).send('please select valid genre')
        }
    }


    
})