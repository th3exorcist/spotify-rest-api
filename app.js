const express = require('express');
const app =  express();
const port = 3000;

const padraoRouter = require('./padrao.route');
const usuarioRouter = require('/usuario.route');
const musicasRouter = require('/musicas.route');
const playlistRouter = require('/playlist.route');
const favoritosRouter = require('/favoritost.route');


app.use(express.json());
app.use(padraoRouter);
app.use(usuarioRouter);
app.use(musicasRouter);
app.use(playlistRouter);
app.use(favoritosRouter);
app.listen(port);