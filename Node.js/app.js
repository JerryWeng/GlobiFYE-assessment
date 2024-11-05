const express = require('express')

const app = express();

app.get('/message', (req, res) => { // return JSON object with message
    res.json({message: "Hello, World!"});
}) 

const PORT = 3000; // check http://localhost:3000/message to confirm
app.listen(PORT, () => {
    console.log(`server running`)
})