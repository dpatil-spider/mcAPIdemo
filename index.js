const ET_Client = require('fuelsdk-node');
const client = new ET_Client('tzv6fcoi1oachkygw2hnvva9', 'l0sUcKPSJMZEHYxJE68eQG0v', 's7');
var bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
var pug = require('pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');
app.set('view engine','pug');
var port = process.env.PORT || 3000;
var jwt = require('jwt-simple');

app.post('/', (req, res) => {
    
    //console.log(req);
     //console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        var jwtToken = req.body.jwt;
        var secret = 'aPwkRdSokdV9CsilYuZN3StLLeaKPUbFZRmptaoDcpFiEa2pUMSPNfbniKG3p06IlFak9TKz9CW0tTnlt1xuSybQkV3kCjGWN8cCsxyAGfHcb_050k-XplzYQyAJLwuYHBzBuU8w0FUbMRij64HjYljIwniEwlry348T3PDBIbPpq5qLGbWgdnOaTiG5SBW4qigC5ALKgSIArrPYvZgPBZS1TKGpm5cs4K-OQ3v7j_q1-qDawDQzSKN9Fdtj5g2
';
       var decode = jwt.decode(jwtToken,secret);
    console.log(decode)
    
        res.sendFile(__dirname + '/index.html');
    
});
const props = ['Name'];
app.post('/getTableData', (req, res) => {
console.log(req.body);
    if (req.body.username == 'sfmc' && req.body.pwd == '1234') {
        client.dataExtensionRow({ props, Name: 'PandaAPIDE3' }).get((err, response) => {
        res.render('DisplayTableData', {data : response.body.Results});
        })
    }
    else {
        return res.redirect('/');
    }

});

app.listen(port, () => console.log('Gator app listening on port '+port+''));
