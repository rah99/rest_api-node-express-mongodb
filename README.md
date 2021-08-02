# REST API using Node.js, Express and MongoDB

### Important - this application needs access to MongoDB, if you do not have it installed or access to it please follow the link below
```
https://www.mongodb.com/try/download/community
```
#
## IDE
### Visual Studio Code - with extension REST Client (to enable use of "route.rest" file) found as below
```
https://marketplace.visualstudio.com/items?itemName=humao.rest-client
```
### or install via "Extensions Marketplace" in VS Code, alternatively use Postman or similar

#
## Quick Start (use the terminal/command prompt)
### Please see "instructions.txt" file for full explaination of getting this up and running
#### Initialise package 
```
npm init -y
```
#### Import dependencies 
```
npm i express mongoose --save
```
#### Import 
```
npm i --save-dev dotenv nodemon
```
#### Replace the "test": "..." entry in the 'package.json' file with 
**NOTE the server.js will be what the current/your server file name is**
```
"devStart": "nodemon server.js"
```
#### Create ".env" file and add
```
DATABASE_URL = mongodb://localhost/subscribers
```
#### To start the server enter
```
npm run devStart
```
#
## Acknowledgements and Resources
```
https://www.youtube.com/watch?v=fgTGADljAeg
```


