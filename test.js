var express = require("express"),
app = express(express.logger());

app.use(express.bodyParser());

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/docs/index.html', function(err) {
        if (err) res.send('Page not found!', 404);
    });
});

app.get('/page', function(req, res) {
    res.sendfile(__dirname + '/docs/' + req.query.name + '.html', function(err) {
        if (err) res.send('Page not found!', 404);
    });
});

app.post('/login', function(req, res) {
	res.send(200, 'email:' + req.body.email + '<br>' + 
		'passwd:' + req.body.passwd + '<br>' + 
		'remember:' + req.body.remember
		);
});

app.get('/*', function(req, res) {
    res.sendfile(__dirname + '/docs/' + req.params[0], function(err) {
        if (err) res.send('Page not found!', 404);
    });
});

port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Server listening on " + port);
});