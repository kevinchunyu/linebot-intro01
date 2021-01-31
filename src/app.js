// requires
// Using express, linebot for code development
const express = require('express')
const app = express()
const linebot = require('linebot');

// bot linebot information
const bot = linebot({
  channelId: '1655623292',
  channelSecret: '878ea3b73da5839afdf76fc88e68031b',
  channelAccessToken: 'tpet8lw5YNWo94OACtnY4b5Wro6rKjghAXXROKIY71tBHau9XMwjmxxQn+kr+fDkt9F3YTS8i8mNsqZwFK4EJkhmj6263yuYrZQOgbYeLqUZ1TwN/xErdHRNYSWpVf+ohUjLsSNgocpyxXQNICW4qAdB04t89/1O/w1cDnyilFU='
});

const linebotParser = bot.parser();

bot.on('message', function (event) {
  switch(event.message.text) {
    case 'hello, tell me more about him!':
      event.reply([
        {type: 'text', text: "Hello! As Kevin's bot, I would like to introduce you to why he his valuable to the team and what he brings."},
        {type: 'text', text: "I will use four words to describe his traits, and for four of these words, you can enter a message and read more."},
        {type: 'text', text: "1. passionate\n2. diversity\n3. motivated\n4. team-orientated"}
      ])
      break;
    case 'passionate':
      event.reply([
        {type: 'text', text: "In whatever he does, his motto is: 'If you are going to commit yourself into something, then strive to do the best of your ability at that.'"},
        {type: 'text', text: "Studying both GIS: Data Science and Informatics brings a different experience unlike Computer Science. What he learns brings about the considerations\
  of social aspects and perspectives in technology. The intersection between technology and humanistic value becomes the driving force of creativity and innovation.\
  His passion lies in analyzing and solving problems that further explores and addresses the societal implications between humans and technology. As mentioned, recently, he has developed a project\
  to update course materials using HTML, CSS, and JS. Furthermore, he has also gained an opportunity to join the HGIS lab for the upcoming quarter. Further\
  information of this lab can be found on this website: https://hgis.uw.edu/."}
      ])
      break;
    case 'diversity':
      event.reply("Kevin was raised in a Taiwanese family in Indonesia for his whole life before going to university. Thus, he has picked up speaking\
 Bahasa Indonesia, the official language of Indonesia, but also is natively fluent in Chinese and English. Growing up in an small, close-knitted Christian\
 international school (https://www.baisedu.org/) , he has also gained exposure to many different kinds of people from all around the world. He has the ability to bond, \
 communicate, and work with people from all different kinds of backgrounds. For him, keeping an open mindset and being available to discuss and voice his own\
 opinions is important in bringing diversity and fun into a team. :)");
      break;
    case 'motivated':
      event.reply("Looking through possible career paths, Kevin is currently at a stage in which he is motivated to use his abilities that has accumulated in class to\
 bring an impact to the world. His unfaltering work ethic and motivation can be reflected through his solid GPA whilst managing a student\
 organization during his student careeer. Maintaining a strong, organized routine has also helped him stay motivated through online classes as the pandemic continues to\
 boil on in the States. Despite of the opposite sleep schedules and time differences, he has also maintained a healthy, well-balanced life, constantly also participating sport events involving basketball, intramurals soccer,\
 and volleyball. He is a quick learner and is able to adapt, understand, and find what he needs in order to become a better\
 leader or a member of the team.");
      break;
    case 'team-orientated':
      event.reply("Being the captain of the Varsity Basketball team in high school for two years, his sense of responsibility cannot be doubted. Being on a team that also\
 won two championships, one bronze, and one silver, he has developed a strong, mature, winning-mindset that is able to unite and lead a team. Serving\
 as a leader is the theme that he continuously reminds himself if put in a position to lead, whether it be in the classroom, work, or extracurriculars.\
 To him, constant encouragement, constructive criticism, and constant reflection are the core values of a good, determined team. He has also participated in numerous hackathons\
 in his Freshmen and Sophomore years. Though not winning particularly any, continuing to absorb experience and skills in a team-setting has pushed him forward in his\
 coding and analysis skills.");
      break;
    case 'help':
      event.reply("This is a SIMPLE BOT that promotes Kevin Ko. Here, there are not many functions, but I recommend you to start by entering:\n\
 hello, tell me more about him!\nin the chat, and I will guide you through. Please also keep in mind to enter the chat directly, as\
 currently, this version of the BOT does not handle cases (lower & upper) as of just yet! Further instructions of the app can be found here: https://github.com/kevinchunyu/linebot-intro01");
      break;
    case 'contact-him':
      event.reply("Email: kevin11@uw.edu\n Phone: +886912430483\n GitHub: https://github.com/kevinchunyu\n LinkedIn: www.linkedin.com/in/kevinkochunyu\n\
 Preferred method of contact: [EMAIL]");
      break;
    default:
      event.reply("Entered command is not recognized, please enter a supported command or type: 'help' in the chat to see a help message!");
      break;
  }
});

// attempt to create an imagemap
// question/bug noted in journal.md
// note: make to lowercase to avoid case issues
// function promote(event) {
//   if(event.message.text == 'tell me more about him') {
//     event.reply({
//       type: 'imagemap',
//       baseUrl: `https://github.com/kevinchunyu/linebot-intro01/tree/main/imgs`,
//       altText: 'self-promote',
//       baseSize: { height: 1040, width: 1040 },
//       actions: [{
//         type: 'message',
//         text: 'passionate',
//         area: { x: 0, y: 0, width: 520, height: 520 }
//       }, {
//         type: 'message',
//         text: 'motivated',
//         area: { x: 0, y: 520, width: 520, height: 520 }
//       }, {
//         type: 'message',
//         text: 'diversity',
//         area: {x: 520, y :0, width: 520, height: 520}
//       }, {
//         type: 'message',
//         text: 'team-orientated',
//         area: {x: 520, y : 520, width: 520, height: 520 }
//       }]
//     });
//   }
// }

app.post('/', linebotParser);
app.listen(process.env.PORT || 8000, () => {
 console.log('Express server start')
});