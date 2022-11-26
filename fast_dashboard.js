module.exports = function (client)  {
    const express = require('express');
    const app = express();
    const path = require('path')
    const port = 3000;
    const bodyParser = require('body-parser');
      const { IPinfoWrapper } = require("node-ipinfo");
    const ipinfo = new IPinfoWrapper('9e7871e3c48407');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, '/'), { dotfiles: 'allow' }));
 app.get(`/`, (req, res) => {
           let ip = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
             ipinfo.lookupIp(ip).then(async(response) => {
        res.send(response)
             });
   });
    app.listen(port, () =>
        console.log(`Bot bu adres üzerinde çalışıyor: http://localhost:${port}`)
    );

  /////////////////////////404/////////////////////////
app.get('/404', (req, res)=>{
        res.send("404, sayfa yok!")
});

app.use((req, res) => {
    res.status(404).redirect("/404");
});
  /////////////////////////404/////////////////////////

//sayflar//

 } 
