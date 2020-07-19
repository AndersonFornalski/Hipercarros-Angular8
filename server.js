const express = require("express");
const PORT = process.env.PORT || 4203;

const app = express();

app.use(express.static(__dirname + "/dist/Hipercars"));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/dist/Hipercars/index.html');
});

app.listen(PORT,()=>{
    console.log("Servidor rodando na porta 4203")
})
