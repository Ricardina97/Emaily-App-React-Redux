const express = require('express');
const cookieSession = require('cookie-session'); // give access to cookies
const passport = require('passport'); // tell passport to make use of the cookies
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// mongoose.connection.on('open', function(event){
//     console.log("boomshakalaka!");
// });

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// call function and immediately pass the app component
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // E.g: main.jsor main.css file
    app.use(express.static('client/build'));

    // Express will serve up the index.html
    // if does not recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// app.get('/',(req,res)=>{
// res.set('Content-Type', 'text/html')
// res.send("<!DOCTYPE html><html><head></head><body><a><img src='http://i.picasion.com/gl/90/cL2b.gif' width=\"200\" height=\"200\"></a></body></html>");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);
