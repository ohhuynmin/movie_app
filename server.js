const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
const port = process.env.PORT || 3001; 
const axios = require('axios'); 
const ID_KEY = '2po3_CybHPXjUePThzrv'; 
const SECRET_KEY = 'KciI9Ai7h9'; 
app.use(cors()); 
app.use(bodyParser.json()); 
app.use('/search', (req, res) => { 
    const word = req.query.query; 
    axios.get('https://openapi.naver.com/v1/search/movie.json', 
    { params: { query: word, display: 20 }, 
    headers: { 
        'X-Naver-Client-Id': ID_KEY, 
        'X-Naver-Client-Secret': SECRET_KEY, 
        'Access-Control-Allow-Origin': '*' 
    } 
    }).then(function(response) { 
        const items = response.data.items; res.send({items:items}); 
        }).catch(function(error) { console.log(error); });
 }); 
    app.listen(port, () => { console.log('express is running on ${port}');
    });