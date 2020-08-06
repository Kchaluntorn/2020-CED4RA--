const db = require("../db/connect");
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const md5 = require('md5')


const login = (req, res) => {
    res.render("Login")
};

const postLogin = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

   
    const qs = `select password from user where username = '${username}'`;
    db().query(qs, (err, rs) => {
        if (err) {
            console.log(err);
            return;
        }else{
            if(rs.length>0){
                const dbpass = rs[0].password.split("=");
                

                function hashPassword(password) {
                    var salt = crypto.randomBytes(20).toString("base64");
                    var iterations = 10000;
        
                    var mykey = crypto.createCipher('aes-128-cbc', password);
                    var mystr = mykey.update('abc', 'utf8', 'hex')
                    mystr += mykey.final('hex');
        
                    var newpass = salt + mystr;
                    return newpass;
                }
                const newpass = hashPassword(password);
                
                const sppass = newpass.split("=")
                if(dbpass[1] == sppass[1]){
                    res.redirect('/index');
                }
            }else{
                res.render('Login',{message:"username or password worng"})
            }
         
        }
      
    });
};

module.exports = login;
module.exports.postLogin = postLogin;