var express = require("express");
var bodyParser = require("body-parser");
const truecallerjs = require('truecallerjs');
const app = express();

app.use(bodyParser.json())

const PORT = process.env.PORT || 3000;


app.get('/search', async (req, res) => {

    const number = req.query.number;
    searchData = {
        number,
        countryCode:'ma',
        installationId:"a1i0U--d-az9g-YVTSdir5crZQgFNBy0Pv38aWxi2OpkAb08UIEj_OwNu6eAyOMx",
        output: "JSON",
      }
      const searchResult = await truecallerjs.searchNumber(searchData);
        console.log(searchResult);
        res.send(JSON.parse(searchResult))
        
   
});




app.listen(PORT, () => console.log(`App listening at ppport ${PORT}`));
