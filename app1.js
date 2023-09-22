var fs = require('fs').promises;
async function readFile(filePath){
 try{
 const data = await fs.readFile(filePath);
 console.log(data.toString());
 const data1=data.toString();
 fs.writeFile('app.html',data1)
 }catch (error){
 console.error(`Got an error trying to read the file: ${error.message}`)
 }
}
readFile('employees.json')
var fs1 = require('fs');
console.log('hi');
var http = require('http');
http.createServer(function (req, res) {
 fs1.readFile('employees.json', function(err, data) {
 res.writeHead(200, {'content-type': 'text/html'});
 res.write(data);
 return res.end();
 });
}).listen(8080);