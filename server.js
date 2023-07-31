const http = require('http');
const fs = require('fs');

//you can declare a const if you want to use the server in future ref eg. web sockets

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);//shows url and get method in terminal

    //set header content type for response being sent back to the browser
    res.setHeader('Content-type', 'text/html');
    
    //sending an html file
    fs.readFile('./views/index.html', (err, data) => {
        if (err){
            console.log(err);
            res.end();
        } else{
            res.write(data)
            res.end();
        }
    })



    // res.write('<p>Hello, auxs</p>');//write on html page
    // res.write('<p>Hello again, auxs</p>')

    // res.end();//send it to the browser






});//creates a server and takes a callback function everytime a request is made
//server takes in a req(url) and response object(send a respone to user)


//sever needs to listen to the req from localhost and run a function
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})
//localhost is a listnening for requests coming from my own computer
//port numbers are doors into a computer



