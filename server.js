const express = require('express');
const PORT = process.env.PORT || 3001;

const database = require('./db/db.json')

const htmlRouter = require('./routes/htmlRoutes')
const apiNotesRouter = require('./routes/apiRoutes')


const app = express();


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiNotesRouter)
app.use('/', htmlRouter)



app.listen(PORT, () => 
    console.log(`App listening at localhost:${PORT} 🚀`)
)
