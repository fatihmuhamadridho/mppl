const express = require('express');
const cors= require('cors');
const app = express();
const port = process.env.PORT || 3001
const config = require('./config');

config.connectToServer();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
const customerRoute = require('./routes/customer');

app.use("/api/test", (req, res) => {
    res.send({
        data: "Test"
    })
})
app.use("/api/test2", customerRoute)

app.listen(port, function(){
    console.log('server is okay!')
})