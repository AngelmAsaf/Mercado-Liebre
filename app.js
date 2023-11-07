const express = require('express');
const path = require('path');
const app = express();

/*
app.listen(3030, () => console.log('servidor corriendo.'))

*/
//app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})



app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

const port = process.env.PORT || 3001;

app.listen (port, () => console.log(`Servidor funcionando bien en puerto ${port}`));
