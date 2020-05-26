### Test Task

For start you need clone this project:

https://github.com/Rostyan/testTask.git

Then you need install all npm dependencies:

## npm install

Wait when all install, and run command, also you need start mongodb server, type

## service mongod start

And you can open MongoCompas (https://www.mongodb.com/download-center/compass), run on 27017 server mongo

## npm run dev

For work client and server at the same time, or

## npm run server 

Just for server, or

## npm run client

For client

When you start project, opent Postman and choose POST method, on URL type http://localhost:3001/api/register , for Registration user, in Body column type in key name, email and password, on value type your data, then push 'Send' button

Then in URL change from http://localhost:3001/api/register to http://localhost:3001/api/login, choose body column again and on key type email and password, on value type data that you type on register, or look in database for data, then push 'Send' button.

Then in URL change from http://localhost:3001/api/register to http://localhost:3001/api/addNewPost, again go to body column and type on key name and post, on value your name and type post than you want to add, then push 'Send' button.

For see all post that you add, chane method to 'GET', and go to http://localhost:3001/api/ in URL, and just push 'Send' button and you see all post that you add.