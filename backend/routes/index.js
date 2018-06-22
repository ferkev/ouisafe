var mongoose= require('mongoose');
var express = require('express');
var router = express.Router();

var options = { server: { socketOptions: {connectTimeoutMS: 5000 } }};
mongoose.connect('mongodb://ouisafeproject:LACAPSULE2018@ds263660.mlab.com:63660/ouisafe',
    options,
    function(err) {
     console.log(err);
    }
);

var userSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    password: String,
    email: String,
    telephone: Number
});

var UserModel = mongoose.model('users', userSchema);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
  var newUser = new UserModel ({
     lastName: req.body.lastname ,
     firstName: req.body.firstname,
     password: req.body.password,
     email: req.body.email,
     telephone: req.body.telephone
  });
  newUser.save(
    function (error, user) {
        res.json(user);
      }
  );

});


router.get('/signin', function(req, res, next) {
  UserModel.findOne(
      { email: req.query.email, password: req.query.password} ,

      function (err, user) {
         res.json(user);
      }
  )

});



module.exports = router;
