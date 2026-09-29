const express = require('express');
const router  = express.Router();
const pageController = require('../controllers/pageController');

router.get('/',              pageController.renderHome);
router.get('/courses',       pageController.renderCourses);
router.get('/courses/:slug', pageController.renderCourse);
router.get('/faq',           pageController.renderFaq);
router.get('/:spoke(haripur|skardu|kiu-gilgit)', pageController.renderSpokePage);

module.exports = router;
