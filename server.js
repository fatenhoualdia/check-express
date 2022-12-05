const express = require("express");
const app = express();
const isAuth=require("./Midlleware/time");
app.use(isAuth);

app.use(express.static("./public"))
app.get("/", (request, response) => {
      console.log(__dirname);
   response.sendFile(__dirname + "/public/home.html");
 });
 app.get("/services", (request, response) => {
      console.log(__dirname);
   response.sendFile(__dirname + "/public/contact.html");
 });
 app.get("/about", (request, response) => {
    console.log(__dirname);
 response.sendFile(__dirname + "/public/about.html");
});
 app.get("/style", (request, response) => {
          console.log(__dirname);
  response.sendFile(__dirname + "/public/off.html");
 });

const port = 6000;
app.listen(port, (err) => {
err ? console.error(err) : console.log(`server is running on ${port}`)});