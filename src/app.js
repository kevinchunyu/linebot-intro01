// requires
// Using express, linebot, and dotenv for code development
const express = require('express')
const app = express()
const linebot = require('linebot');

if (process.env.NODE_ENV !== 'production') {
 require('dotenv').config()
}

// bot linebot information
const bot = linebot({
  channelId: '1655623292',
  channelSecret: '878ea3b73da5839afdf76fc88e68031b',
  channelAccessToken: 'tpet8lw5YNWo94OACtnY4b5Wro6rKjghAXXROKIY71tBHau9XMwjmxxQn+kr+fDkt9F3YTS8i8mNsqZwFK4EJkhmj6263yuYrZQOgbYeLqUZ1TwN/xErdHRNYSWpVf+ohUjLsSNgocpyxXQNICW4qAdB04t89/1O/w1cDnyilFU='
});

const linebotParser = bot.parser();

bot.on('message', function (event) {
 if (event.message.text == 'about') {
   event.reply("check if this works");
 }
//  event.reply(event.message.text).then(function (data) {
//    // success
//  }).catch(function (error) {
//    // error
//    console.log("Error is", error);
//  });
});

app.post('/', linebotParser);
app.listen(process.env.PORT || 8000, () => {
 console.log('Express server start')
});