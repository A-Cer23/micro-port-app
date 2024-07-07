# Auth Server

This is a basic Auth server using Express as the rest API.

The auth server does basic authentication functionalities like registering and logging in a user as well as handleing session tokens 

All responses are in JSON for a third-party server using this service.\
`{success: boolean, message: string}`

---

## Endpoints

- /
    - GET
        - returns a success message if connected

- /register
    - POST (body: {username: 'username', password: 'password'})
        - returns a success if user is created or returns an error
---

## Running the application

### Requirements
`docker v26.1.4 or higher`\
`docker-compose v2.27.1 or higher`

### Steps to just run the application
`docker compose up`

---

## Developing the application

### Requirements
`node v22.3.0 or higher`\
`docker v26.1.4 or higher`\
`docker-compose v2.27.1 or higher`

### Steps to start developing
`npm i`\
`docker compose up`

---

### Compose Info

The docker image of the application has nodemon that listens to the source code such that any edits made to the source code will trigger a restart on the server

The compose file spins up an instance of the application, a PostgreSQL, and a dashboard for the database called Adminer

Using postman you can make hit the server's endpoints on `localhost:3000`

On a browser you can access the database dashboard on `localhost:5000`

---

### Database credentials
`Username: postgres`\
`Password: postgres`\
`DB: auth`