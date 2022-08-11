var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board App', messages: messages });
});

/* GET form page. */
router.get("/new", (req, res, next) => {
  res.render("form")
})

/* POST form page. */
router.post("/new", (req, res, next) => {
  let formData = req.body;
  messages.push({text: formData.msgText, user: formData.user, added: new Date()})
  res.redirect("/")
})

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

module.exports = router;
