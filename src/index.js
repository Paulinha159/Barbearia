const express = require ("express")
const cep_endereco = require("./middlewares/cep_endereco.js")
const app = express
const port = 5000
app.use(express.json())
app.use(cep_endereco)

app.post("/barbearia",(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})
 app.listen(port,()=>{
    console.log("sucesso na conexão", port)
 })