# Hook Testing Application

## Technologies
- Node.js
- Express.js
- Socket.io
- React.js
- MongoDD
- Mongoose

## Setup

- Clone this repo
- Run `yarn install` on both the client and the server
- Install MongoDB if you don't already have it on your machine
- In desired Directory run `mkdir mongodb-data` if needed
- In a separate terminal window and in the correct directory, start the Mongo server with `mongod --dbpath=mongodb-data`
- Finally in the initial terminal window, run `yarn dev` to start the development server

## Running

*** For Testing Locally, I used Ngrok ***

- Install ngrok if you want to test with outside webhook providers(stripe...etc)
- Download, unzip and connect to ngrok via the instructions on the website
- In a third terminal window, where you installed ngrok, run `./ngrok http 5000`
- On the client side, create a new hook!
- Grab the forwarding URL provided by ngrok, and append the unique hook url to the end ie `http://{ngrok-url}.ngrok.io/hook/{unique-id}`
- Paste the hook url into stripe or whatever hook integration you desire
- Call the hook from the integration, and watch as the client updates in real time

- You can also test the hook from Postman or other API development software
- Just send a post request to the server from Postman with your desired data