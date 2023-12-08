const express = require('express')
const https = require('https');
const fs = require('fs');

const app = express()

const port = 3000 

const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}

//app.use(express.static('pubblic'))

let flag=0

app.get('/', (req, res) =>{
  res.send('Hello World!!!');
});

app.get('/uuu', (req, res) =>{
  res.sendfile('location.png', {root: __dirname+'/pubblic/assets'});
});

app.get('/directory', (req, res) => {
  let i=0;
	if(flag++ %4==0) i=1;
  res.status(200).json({"dir":[{"file":["/config.json","1022"]},{"file":["/index.html","8988"]},{"file":["/invalidrequest.html","462"]},{"file":["/login.html","12677"]},{"file":["/nonautorizzato.html","459"]},{"file":["/setting.html","15417"]},{"file":["/sitonontrovato.html","461"]}],"ip":"192.168.1.52","infosys":["Total Space:     1953282 byte","Space Used:      41917 byte","Comp. Date:      Mar 20 2022","Comp. Time:      15:05:59","Voltage:         3.04 Volt","Count down:      -19 min","Last stato:      [Data updated (200)]"],"RSSI":"-70","SSID":"FASTWEB-6YJMRU","Board_Name":"ESP-BD13A8","Temperature":"13.53","Humidity":"38.19","Pressure":"1029.26","Host_name":"myesp","Count":19,"hour":"19","minute":"11","flag":`${i}`,"compDate":"Mar 20 2022","compTime":"15:05:59","Voltage":"3.04"})
  //res.sendFile('index.html',{root: __dirname+'/pubblic'})
})

app.get('/login', (req, res) => {
  //res.status(200).json([{success: true, b: "333"}])
  res.sendFile('login.html',{root: __dirname+'/pubblic'})
})

app.get('/iprequest', (req, res) => {
  res.status(200).json({"ip":"192.168.1.52","city":"Taranto","country":"Italy","temp":"https://thingspeak.com/channels/867219/charts/1?bgcolor=%23ffffff&amp;color=%23d62020&amp;dynamic=true&results=60&title=Temperatura&type=line&xaxis=Data","humi":"https://thingspeak.com/channels/867219/charts/2?bgcolor=%23ffffff&amp;color=%23d62020&amp;dynamic=true&results=60&title=Umidit%C3%A0&type=line&xaxis=Data"})
}) 

app.get('/setpage', (req, res) => {
  //res.status(200).json([{success: true, b: "333"}])
  res.sendFile('setting.html',{root: __dirname+'/pubblic'})
})
app.get('/infinity', (req, res) => {
  //res.status(200).json([{success: true, b: "333"}])
  res.sendFile('infinity.html',{root: __dirname+'/pubblic'})
})
app.get('/ar', (req, res) => {
  //res.status(200).json([{success: true, b: "333"}])
  res.sendFile('ar.html',{root: __dirname+'/pubblic'})
})

const server = https.createServer(options, app);

server.listen(port, () => console.log(`Server running at https://localhost:${port}/`))
