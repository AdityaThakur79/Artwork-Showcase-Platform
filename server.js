const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv')
const connectToDb = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const categoryRoutes = require('./routes/categoryroutes')
const authMiddleware = require('./middlewares/authMiddleware')
const ArtistRoutes = require('./routes/ArtistRoutes')
const Artwork = require('./routes/artworkRoutes')
const cors = require('cors')
const path = require("path");

// configing the dotenv file 
dotenv.config()

// rest object
const app = express()

// creating the middleware
app.use(cors())

// Parse URL-encoded bodies (e.g., form data)
app.use(express.urlencoded({ extended: true }));

app.use(express.json())

// app.use(authMiddleware)
app.use(morgan('dev'))

// connection to database
connectToDb()

// below we are creating the routes
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/admin', adminRoutes)
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/artist', ArtistRoutes)
app.use('/api/v1/artwork', Artwork)

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`server is running in ${process.env.MODE}on the port ${8080}`)
})
