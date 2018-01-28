const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.redirect('https://github.com/HieroBC/Minha-Web-API');    
});

app.get('/rgb', (req, res) => {
    var rgb = {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255),
    }
    if (req.query.type === 'json'){
        res.send(rgb);
    }

    if (req.query.type === 'string'){
        var response = ('rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')');
        res.send(response);
    }

    if(req.query.type === undefined){
        res.send("Please provide query type: json or string");
    }
    
});

app.get('/notes', (req, res) => {
    switch(req.query.scale){
        case 'A':
            res.send(['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']);
            break;

        case 'Bb':
            res.send(['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A']);
            break;

        case 'B':
            res.send(['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#']);
            break;

        case 'C':
            res.send(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
            break;

        case 'Db':
            res.send(['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C']);
            break;

        case 'D':
            res.send(['D', 'E', 'F#', 'G', 'A', 'B', 'C#']);
            break;

        case 'Eb':
            res.send(['Eb', 'F', 'G', 'Ab', 'Bb', 'Cb', 'D']);
            break;

        case 'E':
            res.send(['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#']);
            break;

        case 'F':
            res.send(['F', 'G', 'A', 'Bb', 'C', 'D', 'E']);
            break;

        case 'Gb':
            res.send(['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E']);
            break;

        case 'G':
            res.send(['G', 'A', 'B', 'C', 'D', 'E', 'F#']);
            break;

        case 'Ab':
            res.send(['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G']);
            break;
    }
});


app.listen(port, () => {
    console.log('Server listening on port ' + port);
})