require('dotenv').config()
const app = require('./app')
const port = process.env.PORT || 4000;

// https://www.youtube.com/watch?v=R50VuNUXZ44&t=1871s




app.listen(port, ()=>{
    console.log('server is connected', port);
})