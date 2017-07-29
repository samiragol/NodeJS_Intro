import express from 'express';
//import fs from 'fs';
import apiRouter from './api';

const server=express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
res.render('index', {content: 'hello samira! you are <em>awesome</em>:)'});
});

server.use('/api', apiRouter);
server.use(express.static('./public'))
// server.get('/about.html', (rep, res) => {
// fs.readFile('./public/about.html', (err, data) => {

// res.send(data.toString());

// });

// });
server.listen('3000', () =>{
console.info('Express is listening on port')

});