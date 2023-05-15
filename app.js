const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const {log} = console;
const PORT = process.env.PORT || 4000;
const path = require("path");
const fs = require('fs')
const nodemailer = require("nodemailer");
app.use("/public",express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("left.ejs")
})
app.get("/form",(req,res)=>{
    res.render("form.ejs")
})
app.get("/one",(req,res)=>{
    res.render("1.ejs")
})
app.get("/two",(req,res)=>{
    res.render("2.ejs")
})
app.get("/three",(req,res)=>{
    res.render("3.ejs")
})

var user
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    secure: true,
    auth: {
        user: "apoorva@craftech360.com",
        pass: "rlfoybhgcwgrwwsd"
    },
  })
  let mailOptions;
  mailOptions = {
    from: '"Craftech360" <accounts@craftech360.com>', // sender address
    to: "", // list of receivers
    subject: "Leave an impression behind with every interaction!", // Subject line
    html:`<p> Greetings from Craftech360! <p>
          <p>I hope this email finds you well. It was an absolute pleasure meeting you at the Experiential Design & Creativity Awards 2023 (<b>EDCA</b>) event. We are delighted to have connected with you and appreciate your interest in getting to know more about Craftech360, our cutting-edge tech experiential marketing agency.</p>
          <p>As promised, we have attached a PDF that provides detailed information about our agency, including our services, past projects, and the exciting ways in which we can elevate your events. I encourage you to check it out and let us know if you have any questions or comments.<p> 
          <p>At <b>Craftech360</b>, we specialize in providing innovative and engaging experiences that captivate audiences and leave lasting impressions. With our cutting-edge technology and experiential marketing strategies, we help our clients create unforgettable events that stand out from the competition.<p>
          <p>If you are planning any upcoming events or projects, we would be thrilled to work with you and bring our expertise to the table. Whether you are looking to incorporate augmented reality, virtual reality, or interactive experiences, we can provide tailored solutions that fit your unique needs.<p>
          <p>Thank you again for expressing interest in our agency, and we look forward to the possibility of working together. Please don't hesitate to reach out if you have any questions or would like to discuss your upcoming projects.<p>
          <br>
          <img width=500 height=100 src="cid:unique@kreata.ee"/>` ,                                           
    attachments: [
        {
            filename: 'signature.png',
            path: path.join(__dirname, './signature.png'),
            cid: 'unique@kreata.ee' //same cid value as in the html img src
        },
      {
          filename: 'Craftech360Product.pdf', // <= Here: made sure file name match
          path: path.join(__dirname, './Craftech360Product.pdf'), // <= Here
          contentType: 'application/pdf'
      }
  ]
  };

io.on("connection",(socket)=>{
    
    socket.on('sendEmail', e => {
        console.log(e)
        mailOptions.to = e.email;
        transporter.sendMail(mailOptions, (err, info) => {
          if(err) {
            return console.error(err)
          }
        //   io.emit('sent')
          console.log("message sent:", info.messageId)
        })
      })
    socket.on('sendData' , (e) => {
        const customer = {
            name: e.name,
            email: e.email,
            phone:e.phone,
            date:new Date().toLocaleString()
        }
        const jsonString = JSON.stringify(customer)
        fs.appendFile('./newCustomer.json', jsonString + "\n", err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    })
})


server.listen(4000,process.env.OPENSHIFT_NODEJS_IP|| process.env.IP,()=>{
    log(`server started on ${PORT}`)
})