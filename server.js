var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic("/Users/sakhter/Developer/AngularJS/address-book"));
app.listen(5000);

