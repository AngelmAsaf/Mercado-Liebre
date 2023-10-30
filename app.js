const express = require('express');
const path = require('path');
const app = express();


app.listen(3003, () => console.log('servidor corriendo.'))

//app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})



