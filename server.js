"use strict";

const express = require("express");


const app = express();

app.get('/api/whoami', (req, res) => {

  const regex = /\((.*?)\)/
  const os = req.header('user-agent').match(regex)[1].split(";").slice(0,2).join(" ");
  const ip = req.header('x-forwarded-for') || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  const language = req.header('accept-language').split(',')[0];
  
  const obj = {
      "IP Address": ip,
      "Language": language,
      "OS": os
  }
  
  res.send(obj);
  
})

app.listen(process.env.PORT || 8080);