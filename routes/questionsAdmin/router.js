const express = require('express');
const router = express.Router();

const { validateSchema } = require('../../helper');
const {
  q1,
  q3a,
} = require('./validations');
const {
  question1,
  question1a,
  question1b,
  question2a,
  question2b,
  question3,
  question3a,
  question3b,
  question3c,
  question4,
  question4a,
  question5,
  question6,
  question7,
  question7a,
  question8a,
  question8b,
  question13,
  question15,
  question18,
  question19,
  question20,
  question21,
  question21b,
  question22,
  question23,
  question24,
  question25,
  question26,
  question26b,
  question26c,
  question27,
  question30,
  question34,
} = require('./controller');

router.get('/1', question1);
router.get('/1a', validateSchema(q1), question1a);
router.get('/1b', question1b);
router.get('/2a', question2a);
router.get('/2b', question2b);
router.get('/3', question3);
router.get('/3a', validateSchema(q3a), question3a);
router.get('/3b', question3b);
router.get('/3c', question3c);
router.get('/4', question4);
router.get('/4a', question4a);
router.get('/5', question5);
router.get('/6', question6);
router.get('/7', question7);
router.get('/7a', question7a);
router.get('/8a', question8a);
router.get('/8b', question8b);
router.get('/13', question13);
router.get('/15', question15);
router.get('/18', question18);
router.get('/19', question19);
router.get('/20', question20);
router.get('/21', question21);
router.get('/21b', question21b);
router.get('/22', question22);
router.get('/23', question23);
router.get('/24', question24);
router.get('/25', question25);
router.get('/26', question26);
router.get('/26b', question26b);
router.get('/26c', question26c);
router.get('/27', question27);
router.get('/30', question30);
router.get('/34', question34,
);

module.exports = router;
