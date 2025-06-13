const express = require('express');
const app = express();

app.use(express.json());

app.post('/script', (req, res) => {
    const {data} = req.body;

    //if there is no string data, return an error message
    if (typeof data !== 'string') {
        return res.status(400).json({error: 'Provided data must be a string.'});
    }

    // Split the string into an array of words and sort it
    const charArray = data.split('').sort();
    
    return res.json({word : charArray});
});

module.exports=app;