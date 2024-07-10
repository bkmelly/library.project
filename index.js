const express= require("express")

const app =express()

app.get("/",(req,res)=>{
    res.render("index.ejs")
})
app.get("/authors",(req,res)=>{
    res.render("authors.ejs")
})
app.get("/books",(req,res)=>{
    res.render("books.ejs")
})
app.get("/profile",(req,res)=>{
    res.render("profile.ejs")
})
app.listen(8000,()=>console.log("app listening on port 8000"))