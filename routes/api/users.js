var express = require('express');
var router = express.Router();
var User = require('../../models/User');
var usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.put('/:id', usersCtrl.updateUser);



/*---------- Protected Routes ----------*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
}




module.exports = router;