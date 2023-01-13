<div align="center" id="top">
  <img width="500px" height="200px" src="assets/welcome.svg"/>
  </div>
  
## USER STORY / OVERVIEW

```
AS A social media startup

I WANT an API for my social network that uses a NoSQL database

SO THAT my website can handle large amounts of unstructured data
```

## ROUTES / ACCEPTANCE CRITERIA

---
**`/api/users`**

* `GET` all users
* `POST` a new user:

    ```json
    // example data
    {
        "username": "JonSno",
        "email": "SnoverJon@gmail.com"
    }
    ```

---
**`/api/users/:userid`**

* `GET` a single user by its `_id`
* `PUT` to update a user by its `_id`
* `DELETE` to remove user by its `_id`

---
**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list
* `DELETE` to remove a friend from a user's friend list

---
**`/api/thoughts`**

* `GET` to get all thoughts
* `POST` to create a new thought

    ```json
    // example data
    {
    "_id": "63bdc073b7dae68fdbda3993",
  "thoughtText": "FOR SHIZZLE",
  "username": "JonSno",
  "thoughtId": "63c1c15dc622559147980dce",
  "createdAt": "Jan 13, 2023 at 01:38 pm"
    }
    ```

---
**`/api/thoughts/:thoughtId`**

* `GET` to get a single thought by its `_id`
* `PUT` to update a thought by its `_id`
* `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction

    ```json
    // example data
    {
    "reactionBody": "WOW,ISNT THAT SPECIAL!!!!!",
    "username": "JonSnoFLO",
    "_id": "63c1cd281f71764fda48a59c",
    "reactionId": "63c1cd281f71764fda48a59d",
    "createdAt": "Jan 13, 2023 at 02:29 pm"
    }
    ```

---
**`/api/thoughts/:thoughtId/reactions/:reactionId`**

* `DELETE` remove a reaction by the `reactionId`

## TABLE OF CONTENTS

 🎗[USER STORY](#userstory)

 🎗[INSTALLATION](#installation)

 🎗[LICENSE](#license)  

 🎗[TESTS](#tests)

 🎗[DEPENDENCIES](#dependencies)

 🎗[CONTACT ME](#CONTACTME)  

## INSTALLATION

<p style="display: inline-block;" align="center">
  <kbd>
    <kbd>FRONT-END</kbd>
    <br>
    <br>
    <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
  </kbd>
  <kbd>
    <kbd>BACK-END</kbd>
    <br>
    <br>
    <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
    <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
    <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
    <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
  </kbd>
  <kbd>
    <kbd>Library/FrameWorks</kbd>
    <br>
    <br>
   <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
    <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
   </kbd>
  <kbd>
    <kbd>TERMINAL-SCRIPTS</kbd>
    <br>
    <br>
    <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  </kbd>
  <kbd>
    <kbd>TOOLS</kbd>
    <br>
    <br>
    <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" />
    <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
    <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" />
    <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
    <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" />
    <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" />
    <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" />
    <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-plain.svg" />

</kbd>
  
## LIVE LINK / MOCK-UP

🎗 GITHUB REPOSITORY:

  <a href="https://github.com/jonsno29/NoSql-Social-Network.git" target="_blank"><img src="https://img.shields.io/badge/Github-jonsno29-red?style=for-the-badge&logo=github"></a>
  
🎗 

## CREDITS

🎗 ![](https://img.shields.io/badge/Created%20by-JON%20T.%20SNOVER-blue?style=for-the-badge)  

## DEPENDENCIES

   ```
   
    "dependencies": 
    "express": "^4.18.2",
    "moment": "^2.29.4",
    "mongoose": "^6.8.3"
    "devDependencies": 
    "nodemon": "^2.0.20"
  
   ```

## LICENSE

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## HOW TO CONTRIBUTE

🎗 Fork my repositories so I can fork yours:

🎗 Use the "scout rule" to help others.

## TESTS

🎗 ![](https://img.shields.io/badge/Database-MongoDB-yellow?style=flat-square&logo=mongoDB)


🎗 ![](https://img.shields.io/badge/npm%20package-express-orange?style=flat-square&logo=npm)


🎗 <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />

🎗 <img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
  

🎗 ![](https://img.shields.io/badge/npm%20package-mongoose-cyan?style=flat-square&logo=npm)


🎗 ![](https://img.shields.io/badge/npm%20package-moment-%3CCOLOR%3E?style=flat-square&logo=npm)

## CONTACT ME

<a href="https://github.com/jonsno29/NoSql-Social-Network.git" target="_blank"><img src="https://img.shields.io/badge/Github-jonsno29-red?style=for-the-badge&logo=github"></a>

<a href="mailto:snoverjon@gmail.com"><img src="https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=snoverjon@gmail.com"/></a>
