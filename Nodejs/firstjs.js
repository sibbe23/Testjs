// const arr = ['apple', 'orange', '', 'mango', '','','lemon'];


// console.log(arr.map(fruit => fruit === '' ? 'empty_string' : fruit));


// const http = require('http');

// const hostname = 'localhost';
// const port = 4000;

// const server = http.createServer((req, res) => {
//   res.end('Ram');
// });

// server.listen(port, hostname, () => {
//   console.log('Ram');
// });

// const http = require('http');
// const fs = require('fs')
// const server = http.createServer((req,res)=>{
// const url = req.url;
// const method = req.method;
// const body = [];
// if(url==='/')
// {
//   fs.readFile('message.txt',{encoding : "utf-8"},(err,data)=>{
//     if(err)
//     {
//       console.log(err);
//     }
//     console.log("reading message from"+data);
//     res.write('<html>')
//     res.write('<head><title>Enter Message</title></head>')
//     res.write(`<body>${data}</body>`)
//     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
//     res.write('</html>')
//     return res.end()
//   })
// }

// else if(url === '/message'&& method==='POST')
// { 
//   req.on('data',(chunk)=>
//   {
//     console.log(chunk)
//     body.push(chunk)
//   })
//     return req.on('end',()=>
//   {
//     const parsedBody = Buffer.concat(body).toString();
//     console.log("parsedBody>>>>>>",parsedBody)
//     console.log("reading message from"+parsedBody);
//     const message = parsedBody.split('=')[1]
//     res.write('<html>')
//     res.write('<head><title>Enter Message</title></head>')
//     res.write(`<body>${message}</body>`)
//     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
//     res.write('</html>')
    
//     fs.writeFileSync('message.txt',message,(err)=>{
//     if(err){
//       console.log(err);
//     }     
//       res.statusCode=302;
//     res.setHeader('Location','/');
//     return res.end();
//     })   
//   })
// }
// else
// {
//   res.setHeader('Content-Type','text/html')
//   res.write('<html>')
//   res.write('<head><title>Error</title></head>')
//   res.write(`<body><h1>Page not Found</h1></body>`)
//   res.write('</html>')
//   res.end();
// }
// })
// server.listen(4000)

// const http = require('http');
// const routes = require('./routes')
// console.log(routes.someText)
// const server = http.createServer(routes.handler)
// server.listen(5000)
const path = require('path')

const express = require('express')

const bodyParser = require('body-parser')
const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactusRoutes = require('./routes/contactus')



app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes)

app.use(shopRoutes)
app.use(contactusRoutes)

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','success.html'))
})

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})


app.listen(5000)