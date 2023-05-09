/* eslint-disable spellcheck/spell-checker */
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('/catelog', { title: 'Express' });
});

module.exports = router;
