require('dotenv').config()
const
    express = require("express"),
    hbs  = require("express-handlebars"),
    fetch = require("node-fetch"),
    onHeaders = require("on-headers"),
    app = express(),
    port = process.env.PORT || 3000,
    data = require("./lib/data.js"),
    shrinkRay = require("shrink-ray")

app.use(shrinkRay({  cache: () => false,  cacheSize: false,  filter: () => true,  brotli: { 
    quality: 4, // between 1 and 11  
    }, 
    zlib: { 
    level: 6 // between 1 and 9  
        } 
    })
)

hbs.create({
    helpers:{
        link:(obj)=>{
            return obj.preview.url[0]
        }
    }
})

app.use(express.static("src"))

app.engine("hbs",hbs({
    extname:"hbs",
    defaultLayout: "main",
    helpers: require("./lib/helpers.js"),
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
}))
app.set("view engine","hbs")

app.get("/",async(req,res)=>{
    res.render("home")
})

app.get("/album/:album",async(req,res)=>{
    let json = {}
    if(port == 3000){
        json = await data.get("http://localhost:3000/db/db.json")
        console.log("local",json)
    }else{
        json = await data.get("https://performancebois.herokuapp.com/db/db.json")
    }
        
    dataSet = data.matching(json,req.params.album)[0]

    if(dataSet){
        const 
            lyrics = await data.lyrics(dataSet),
            wiki = await data.getWiki(dataSet.title),
            wikiA= await data.getWiki(dataSet.artists[0])
            // console.log(dataSet)
        res.render("home",{data:{meta:dataSet,lyrics:lyrics,wikiData:{album:wiki.query.search,artist:wikiA.query.search}}})
    } else{
        res.render("404")
    }

})

app.listen(port,()=>{
    console.log(`App is listening on port:${port}`)
})