import { Router } from 'express'



//Homepage Route
Router.get('/',  (req, res)=>{
    res.send("Home Page")
});


//pricing page route

Router.get('/price',  (req, res)=>{
    res.send("Pricing page")
});

//Upload new or overwerite existing PDF
Router.put("/uploadpdf",  (req, res) => {
    res.send("Upload new PDF page")
});

modules.export = Router;