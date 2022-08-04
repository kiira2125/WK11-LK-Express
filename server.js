// Node Modules
const express = require('express');
const app = express();
const path = require('path')

// need to import my routes
const apiRoutes = require('.//routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// her need to code for middleware to parse JSON & URLencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// here need to PORT the Info
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))

// need to call the Routes
app.use("/", apiRoutes);
app.use("/", htmlRoutes);

// need to get the route for index.html using app.get
// needs to set to last
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})
