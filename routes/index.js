// var express = require('express');
// var router = express.Router();

// router.get('/', function(req, res, next) {
//     res.send
//     ('<html>' +
//      '<title>Course Info Start Page</title>' + 
//      '<br><br>' + 
//      '<body>' + 
//      '<a href="/courses/instructor">select instructor</a>' +
//      '<br><br>' +
//      '<a href="/courses/area">select area</a>' +     
//      '</body>' +
//      '</html>'
//     );
// });
// module.exports = router;


/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

