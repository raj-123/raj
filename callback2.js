var express = require('express');
var app     = express();
var http    = require('http');
var https   = require('https');
var request = require('request');
var fs      = require('fs');
var path    = require('path');

app.get('/', function( request, response ){
    response.send('connection established...!');
});

app.get('/download', function(request, response){
    var file     = "https://www.youtube.com/watch?v=IFTGi_BU39g&list=RDIFTGi_BU39g"; 

    var filename = path.basename( file );
    var ssl      = file.split(':')[0];
    var dest     = __dirname +'/'+ filename;
    var stream   = fs.createWriteStream( dest );

    if ( ssl == 'https') {
        https.get( file, function( resp ) {
            resp.pipe( stream );
            response.send('file saved successfully.*');
        }).on('error', function(e) {
            response.send("error connecting" + e.message);
        });
    } else {
        http.get( file, function( resp ) {
            resp.pipe( stream );
            response.send('file saved successfully.*');
        }).on('error', function(e) {
            response.send("error connecting" + e.message);
        });
    }
});
app.listen(process.env.PORT || 5000);
