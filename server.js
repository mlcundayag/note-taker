//connect dependencies
const express = require('express');

//port for heroku and localhost
const PORT = process.env.PORT || 3001;

//import routes
const htmlRouter = require('./routes/htmlRoutes')
const apiNotesRouter = require('./routes/apiRoutes')

//create express server
const app = express();

//make all the files in the public available
app.use(express.static('public'));
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect routes
app.use('/api', apiNotesRouter)
app.use('/', htmlRouter)


//listener
app.listen(PORT, () => 
    console.log(`App listening at localhost:${PORT} 🚀`)
)
