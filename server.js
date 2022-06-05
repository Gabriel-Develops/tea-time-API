const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

app.use(cors())

const teas = {
    'oolong': {
        'type': 'black',
        'origin': 'yo mammas house',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavor': 'delicious'
    },
    'matcha': {
        'type': 'green',
        'origin': 'yo mammas house',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': false,
        'flavor': 'delicious'
    },
    'unknown': {
        'type': 'unkown',
        'origin': 'unkown',
        'waterTemp': 0,
        'steepTimeSeconds': 0,
        'caffinated': false,
        'flavor': 'unkown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:teaType', (request, response) => {
    let teaType = request.params.teaType.toLowerCase()
    response.json(teas[teaType] || teas.unknown)
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}, better go catch it!`)
})