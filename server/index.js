const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())


const {getMovies, deleteMovie, createMovie} = require('./controller.js')

// endpoints
app.get('/api/movies', getMovies)
app.delete('/api/movies/:id', deleteMovie)
app.post('/api/movies', createMovie)


app.listen(4004, () => {
    console.log('Up on 4004!')
})