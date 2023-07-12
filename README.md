
# A Todo Application using MERN stack.

A simple todo list application that used MERN stack to achieve the CRUD operations and has been dockerized.



## Tools Required

Javascript, NodeJS, ExpressJS, MongoDB, ReactJS, Docker, VSCode(or some similar IDE).

MongoDB server can be accessed from here: https://cloud.mongodb.com/

Sign in and create a free account and a free shared cluster. Save the connection URL or the username and password that you create here. It will be useful for connecting from the frontend. We also need to add our local IP Address into the cluster so that we can access the cluster from our local machine. Most of the steps are self-explanatory.
## Installation

Clone this repository to use or build on top of my application

```bash
  https://github.com/Tamang-Suvam/DockerizedTodoApp.git
```
Go inside the client folder and run

```bash
cd client
npm install
docker build -t "react-app"
```

Similarly, go inside the server folder and run

```bash
cd server
npm install
docker build -t "api-server"
```
## Running the Application

```
Veri Important*: You need to create a .env file inside the server folder and put your mongoDB username and password from the link provided above to connect to the mongoDB cloud based database.
```

To run the application, navigate to the root directory of the project and run 

```bash
docker-compose up
```

This should get all the containers running as all of them along withe their decepndencies have been mentioned in the docker-compose.yml file in the root folder.

The application now must be accessible at:

```bash
http://localhost:3000/
```
## Access My Application At

My application has been hosted and is available in the URL: https://redwinglabstodoapp.netlify.app/

## Authors

- Suvam Tamang
- [Github](https://github.com/Tamang-Suvam)
- [LinkedIn](https://www.linkedin.com/in/suvam-tamang-726628190/)

