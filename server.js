
const express = require('express')
const app = express()
const hbs=require("hbs")

app.use(express.static(__dirname+'/public') )

const port=process.env.PORT||3000;

//express hbs engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

require("./hbs/helpers")

app.get('/',  (req, res)=> {
// res.send('Hola mundo')
  
    res.render("home",{
        nombre:"Fernando"        
    })

})
app.get('/about',  (req, res)=> {
    // res.send('Hola mundo')
      
        res.render("about")
    
    })
 
app.listen(port,()=>{
    console.log(`escuchando peticiones en el puerto ${port}`);
})