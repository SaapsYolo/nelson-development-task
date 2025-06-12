const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/sort', (req, res) => {
    const {data} = req.body;

    //if there is no string data, return an error message
    if (typeof data !== 'string') {
        return res.status(400).json({error: 'Provided data must be a string.'});
    }

    // Split the string into an array of words
    const charArray = data.split('');
    // Sort the array of characters
    const sortedArray = charArray.sort();
    
    return res.json({
        finalResults : sortedArray
    });
});

const app = require('../script');
module.exports=serverless(app);