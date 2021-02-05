let http = require('http');
let url = require('url');
let fs = require('fs');

function readFile(filename, res) {
    let filePath = "./textFiles/" + filename;
    fs.readFile(filePath, (err, data) => {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("Error 404! " + filename + " not found :/");
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}

function appendFile(q, res) {
    if(q.query["text"] === undefined){
        res.writeHead(400, {'Content-Type': 'text/html'});
            return res.end("Please provide text to write.");
    }
    
    let data = "\n" + q.query["text"];
    
    fs.appendFile('./textFiles/file.txt', data, function (err) {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end(err);
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("Appended, OK!");
        return res.end();
      });
}

http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let pathname = q.pathname;
    let splitPathname = pathname.split('/');

    if(splitPathname[1].toLowerCase() === "readfile"){
        const filename = splitPathname[splitPathname.length -1];
        readFile(filename, res);
    }

    else appendFile(q, res);
    
}).listen(8888);