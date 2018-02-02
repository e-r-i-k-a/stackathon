[Code is actively being refactored]

#Team Builder

Team Builder is a React Native game management app that only schedules a game if there are enough confirmed players.  You pick a date, time, and player amount, then send pre-populated invitations.  Each RSVP updates a database, and when the minimum amount of players needed confirm that they'll attend, everyone invited is notified that the game is on!

#Using the App

Press the "Click to Start" button on the landing page and you will be brought to a game creation screen.  Enter administrative data about your game - the name (e.g. "Canasta Party"), the date (e.g. next Friday), and the minimum amount of players needed (e.g. 4, because you need at least 4 people to play).  Next, you are prompted assemble a team, and you can add as many players as you'd like.  Then, click "Checkout my Team" to send customized invitations to each teammate.

That's all you have to do as an administrator!  As your teammates RSVP to their customized inviations, a database is updated.  When at least 4 people have confirmed that they'll attend, a message is sent to all invitees confirming that the Canasta game is on for next Friday.

#Built With

JavaScript
React and React-Native
Express Routing
Sequelize Models
