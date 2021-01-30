let linebot = require('linebot');

let bot = linebot({
  channelId: '1655623292',
  channelSecret: '878ea3b73da5839afdf76fc88e68031b',
  channelAccessToken: 'tpet8lw5YNWo94OACtnY4b5Wro6rKjghAXXROKIY71tBHau9XMwjmxxQn+kr+fDkt9F3YTS8i8mNsqZwFK4EJkhmj6263yuYrZQOgbYeLqUZ1TwN/xErdHRNYSWpVf+ohUjLsSNgocpyxXQNICW4qAdB04t89/1O/w1cDnyilFU='
});


bot.on('message', function (event) {
  // reply bot
  event.reply(`you said ${event.message.text}`);
});

bot.listen('/', process.env.PORT || 5000, function () {
  console.log('Bot has successfully been deployed!');
});