const express=require('express')
const app=express()

const path=require('path');
const port=5000

app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

app.get('/index',(req,res)=>{
    return res.render("index")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log('hello');
  })