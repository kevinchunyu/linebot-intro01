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
  // change if else loop here, does not handle the DNE correctly
  if (event.message.text.length > 0) {
    help(event);
    promote(event);
  } else {
    event.reply({type: 'text', text: 'command not known, please refer to "help" in order to know what to type'})
  }
//  event.reply(event.message.text).then(function (data) {
//    // success
//  }).catch(function (error) {
//    // error
//    console.log("Error is", error);
//  });
});

function help(event) {
  if(event.message.text == 'help') {
    event.reply([
      {type : 'text', text : "about"},
      {type : 'text', text : "tell me more about him"},
      {type : 'text', text : "story time"},
      {type : 'text', text : "experiences"}
    ])
  }
}

// function to detect online profiles
// note: make to lowercase to avoid case issues
function promote(event) {
  if(event.message.text == 'tell me more about him') {
    event.reply({
      type: 'imagemap',
      baseUrl: 'https://github.com/kevinchunyu/linebot-intro01/blob/main/imgs/imagemap01.png',
      altText: 'self-promote',
      baseSize: { height: 1040, width: 1040 },
      actions: [{
        type: 'message',
        text: 'passionate',
        area: { x: 0, y: 0, width: 520, height: 520 }
      }, {
        type: 'message',
        text: 'motivated',
        area: { x: 0, y: 520, width: 520, height: 520 }
      }, {
        type: 'message',
        text: 'diversity',
        area: {x: 520, y :0, width: 520, height: 520}
      }, {
        type: 'message',
        text: 'team-orientated',
        area: {x: 520, y : 520, width: 520, height: 520 }
      }]
    });
  }
}

app.post('/', linebotParser);
app.listen(process.env.PORT || 8000, () => {
 console.log('Express server start')
});