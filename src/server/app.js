//експрес звязок з монго , 4 енд поінта, 1-2 реєстрація і логін, 
//юзер повинен створити пост, можливість отримати список постів з пагінацією, 
//github, звязати конекш до бд, авторизація через jwt

const express = require('express');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const mongoose = require("mongoose");

let app = express();

const mongoConnectionString = require('./config/mongo_url');

mongoose.connect(mongoConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('dist'));

app.use('/api/', indexRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));