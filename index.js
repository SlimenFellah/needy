const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended : true}))

mongoose.connect("mongodb+srv://needyesi123:EWUF5ZuBJFJ6ZHch@needy.fqjq7d7.mongodb.net/needy",{useNewUrlParser : true}, {useUnifiedTopology : true})

const messageSchema = {
    name : String,
    email : String,
    subject : String,
    message : String
}

const message = mongoose.model("message", messageSchema)

app.use(express.static("public"))
/*
app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html")
})
*/
app.post("/", function(req,res){
    let newMessage = new message({
        name : req.body.name,
        email : req.body.email,
        subject : req.body.subject,
        message : req.body.message,
    })
    newMessage.save()
    res.redirect('/')

})

app.listen(3000, function(){
    console.log("listening at 3000")
})