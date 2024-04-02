const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../knexfile')[environment];
const knex = require('knex')(knexConfig);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('App is running!')
})

app.listen(PORT, () => {
    console.log('Listening on Port 8080...')
})

app.get('/pets', (req, res) => {
    knex('pet')
        .select('*')
        .then(pets => {
            var petNames = pets.map(pet => pet.name);
            res.status(200).json(petNames);
        })
        .catch(err => {
            res.status(404).json({
                message: 'Data not found.'
            })
        })
})