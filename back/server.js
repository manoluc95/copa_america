const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(3003, () => {
    console.log('Server running on port 3003');
});
