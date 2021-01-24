const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    getTitles(res);
}).listen(9000, '127.0.0.1');

function getTitles(res) {
    fs.readFile('./title.json', (err, data) => {
        if (err) {
            handError(err, res)
        } else {
            getTemplate(JSON.parse(data.toString()), res);
        }
    });
}

function getTemplate(titles, res) {
    fs.readFile('./template.html', (err, data) => {
        if (err) {
            handError(err, res)
        } else {
            console.log(data);
            console.log(data.toString());
            formatHtml(titles, data.toString(), res);
        }
    });
}

function formatHtml(`titles`, tmpl, res) {
    const html = tmpl.replace('%', titles.join('</li><li>'));
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(html);
}

function handError(err, res) {
    console.error(err);
    res.end('Server Errorr');
}