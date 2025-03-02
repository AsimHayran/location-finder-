const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/location', (req, res) => {
    const location = req.body;
    console.log('Received location:', location);

    // Here you can save the location data to a database or process it as needed
    // For example, you can send an email or log the data

    res.status(200).send('Location received');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
