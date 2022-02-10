# Full stack weather application

This is a [`create-react-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) project that uses
[Foreca Weather](https://rapidapi.com/foreca-ltd-foreca-ltd-default/api/foreca-weather/) APIs to search and list
locations, preview current weather and 7 day forecast.

[Node.js](https://nodejs.org/) application is for logging search keywords and current weather details by location. User
actions are saved into [MongoDB](https://www.mongodb.com/).

## Getting Started

1. Clone repository

2. Front end start

- cd client
- npm install
- npm start

3. Back end start

- cd server
- npm install
- rename .env.sample to .env and place your mongoDB connection string

## Dependencies

- axios
- bootstrap
- next
- react
- react-dom
- cors
- dotenv
- express
- mongoose
- morgan
