# Email mass sender app with React and Redux:

Hello!

This was a course that I took to try React, MongoDB, Express and NodeJS.

For this application I want to do the following:

1. Someone uses a startup owner's service;
2. The startup owner wants feedback and sends customers e-mails;
3. They send the customers e-mails requesting feedback;
4. Get tabulation of the results;
5. Make the app better with feedback;

# User point of view:

1. User uses Google OAuth;
2. User pays with e-mail credits via stripe;
3. User creates a new campaign;
4. User enters a list of e-mails to send the survey to;
5. We send e-mail list of surveyees;
6. User can see the report of all the survey responses;
7. There's feedback tabulation;

# Technologies Used:

1. Express;
2. MongoDb;
3. React;
4. Google OAuth and Facebook OAuth;
5. Passport;
6. Cookie Session;
7. Concurrently;
8. Materialize CSS;
9. Webpack;
10. Axios;
11. Redux Thunk;
12. Stripe;
13. Heroku;
14. SendGrid;
15. Redux Form;
16. Ngrok.

# Final Product:

![Emaily](https://i.giphy.com/j44TXKl06eigBHbJl1.gif)

# Backend side - Server Side

## NodeJS
Javascript runtime used to execute code outside of the browser.

## ExpressJS

Library that runs in Node runtime. Has helpers to make dealing with HTTP traffic easier.

## Relationship between ExpressJS and NodeJs
![Relationshipdiagram](../images/expressnodejs.png)

# Put ExpressJS running

1. Create the file index.js -- this is where you'll create all the routes using Express.
2.

# How to run things

## ExpressJS

1. Insert on the terminal: node index.js
2. Open http://localhost:5000/

## Deployment - Heroku

1. You need to create a account on https://www.heroku.com
2. Set the ports on index.js
3. On package.json create the following versions of the engines:
  "engines":{
    "node":"12.13.1",
    "npm":"6.12.1"
  }
4. Insert the command so that heroku can run the application, create the start command on the package.json file;
5. Add a .gitignore

## Google Auth

The client uses Google Auth. This is basically a Sign-In with Google.
What's going to happen:
1. The client sees a button to login with google and clicks on it;
2. Direct the user localhost:5000/auth/google;
3. This makes the user forward to a google sign in request. The url will be google.com/auth?appId=123;
4. This will prompt the user if it lends permission to our website;
5. If the user grants permissions it will redirect to the localhost:5000/auth/google/callback?code=456 (the 456 will be important later);
6. We will remove the url and send another request to Google with the code 456;
7. Google sees the codes matches up and replies with data about the user;
8. We now have user details to create a new record in the data base.

### How we will use PassportJS

PassportJS will help to automate most of this steps but we will need
PassportJS uses two libraries: passport (general helpers for handling auth with Express apps) and passport strategy (helpers for authenticating with one very specific method, this can be e-mail/password, Google, Facebook, etc).
Basically we can do any auth using PassportJS.

**How to install PassportJS:**
npm install --save passport passport-google-oauth20 (if you check the documentation about strategies it's advised that we use google-oauth20)

**Mongoose and MongoDB - Different decisions I made from the course**

Firstly, after installing mongoose, on the index.js file. I added two atributes to the mongoose.connect declaration.
```javascript
  mongoose.connect(keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });
```
I still got (and for now get) a MongooseServerSelectionError and could not connect to the database.
I used the [link](https://docs.atlas.mongodb.com/configure-api-access/#enable-api-whitelisting-for-your-organization)to start whitelisting my application. After creating the API key I used this steps to whitelist my IP:

1. To add an IP address from which you want Atlas to accept API requests for this API Key, click Add Whitelist Entry and type an IPv4 address.
2. You can also click Use Current IP Address if the host you are using to access Atlas also will make API requests using this API Key.
3. To remove a whitelisted IP address, click trash icon to the right of the whitelisted IP address.
4. Click Save.

Also on the project I did the following:
1. On the side bar click security;
2. Click on Network Access and on API Whitelist;
3. Edit your IP address;
4. Click on Add Current IP Address;

Everytime we access localhost:5000/google/auth mongo db stores every instance of the google id in the database. We want to only save the user's id one time to make the sign-ins and user accesses easier. For that we save the googleId on MongoDB.

We also needed a cookie handler, we installed cookie-session: https://www.npmjs.com/package/cookie-session

Even though it's not mandatory for this course I tried to also implement Facebook OAuth using Passport.
For this I used the same strategy the Professor used for GoogleAuth.
First we need to install Facebook OAuth:  npm install passport passport-facebook --save
I just followed the same steps such as Google OAuth.

I had an error I didn't know could happen.
On passport.js file make sure you have passport.use(new GoogleStrategy) AND another passport.use(new FacebookStrategy), you can check this out on passport.js file.


## React error

I had this error:
Aborting installation.
  yarnpkg add --exact react react-dom react-scripts cra-template --cwd /Users/diasv/Documents/React experiment/server/client has failed.

I had to write the following command to make it work: yarn cache clean

