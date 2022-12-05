const { links } = require("express/lib/response");

const isAuth = (req, res, next) => {
  let time =new Date()

console.log(time.getHours())
console.log(time.getDay())
    let hour = time.getHours();
    let day=time.getDay();
    if ((hour>=9 && hour <=17)&&(day>=1&&day<=7)) {
     console.log("authorised");
      next();
  } else {
      res.status(401).send("we are not availble");
    }
  };
  
  module.exports = isAuth;