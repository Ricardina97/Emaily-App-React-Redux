const passport = require('passport');
module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google',{
          scope:['profile','email']
        })
      );
    app.get(
      '/auth/google/callback',
      passport.authenticate('google',{
        scope: 'https://www.googleapis.com/auth/plus.login'
      }),
      (req,res) => {
        res.redirect('/surveys');
      }
    );
    app.get(
      '/api/current_user',
      (req,res)=>{
        res.send(req.user);
    });
    app.get('/api/logout',(req,res) => {
      req.logout(); // Method from passport
      res.redirect('/');
    });
    app.get(
      '/auth/facebook',
      passport.authenticate('facebook',{
        scope:['profile','email']
      })
    );
    app.get(
      '/auth/facebook/callback',
      passport.authenticate('facebook')
    );
}
