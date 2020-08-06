module.exports = (app) => {
  app.get("/index",(req,res)=>{
    res.render('datacenter')
  });
  app.post("/editProfile");
  app.post("/saveEdit");
};
