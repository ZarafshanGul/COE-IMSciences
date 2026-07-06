const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/centers', apiController.getCenters);
router.get('/courses', apiController.getCourses);

router.get('/notifications', apiController.getNotifications);
router.post('/notifications/mark-read', apiController.markAllNotificationsRead);

module.exports = router;
