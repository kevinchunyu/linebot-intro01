
## Development Journal and Notes

`1-28-2021 & 1-29-2021`
- End of another week of online school, time to start developing!
- Went through sample and kitchen bot.
    - Notes:
        - Use heroku to deply and launch application
        - LINE example in Java, I should choose my own development language.
    - Decided to use Node.js to develop!

- Did some online research about Node.js and express. Need to do some refreshing and review!
- Looked into the official LINE sdk and API, decided to use this one instead:
    - https://www.npmjs.com/package/linebot

`1-30-2021`
- Deployed application!
- Decided to put application in src folder just to organize everything.
- Procfile!
    - Had to read a little bit on StackOverflow to find the correct syntax to write.
- Bugs:
    - heroku: MODULE NOT FOUND on application log
        - **RESOLVED:** uninstalled and installed each npm dependencies again (express, nodemon, linebot)

    - is there a difference between package.json (Created through npm init) & package-lock.json?
        - **RESOLVED:** just added both files to avoid any more missing files/weird errors anyways and
              it seemed to work! :)

`1-31-2021`
- Development day part 2, hopefully I finish today!
- Looked thoroughly into imagemaps but still could not find out how to properly get the image to load.
- Bugs:
    - **[UNFIXED]** `app.js`: could not find the correct path and reason why .png image could not be
    displayed onto line messaging map - once deployed seem to not be able to find the picture.

`2-1-2021`
- Decided to use switch cases to quickly deploy the application.
- Wrote a detailed README.md file to introduce the application.
- Get ready to deploy and send project! I learned a lot and there is definitely room for improvement for this BOT.
- Suggested improvements to-do in own time:
    - Fix the imagemap bug
    - Do a wider variety of responses such as image carousel and other things
    - Add more sense of humor into the project :)

