const Center = require('../models/Center');
const Course = require('../models/Course');
const Notification = require('../models/Notification');
const { isDBConnected } = require('../config/db');
const fallback = require('../data/fallback');

// ---------- Centers & Courses ----------

exports.getCenters = async (req, res) => {
  try {
    if (isDBConnected()) {
      const centers = await Center.find().sort({ type: 1, name: 1 }).lean();
      if (centers.length) return res.json({ source: 'db', centers });
    }
    return res.json({ source: 'fallback', centers: fallback.centers });
  } catch (err) {
    res.status(500).json({ message: 'Failed to load centers', error: err.message });
  }
};

exports.getCourses = async (req, res) => {
  try {
    if (isDBConnected()) {
      const courses = await Course.find().populate('center', 'name slug').lean();
      if (courses.length) return res.json({ source: 'db', courses });
    }
    return res.json({ source: 'fallback', coursesByCenter: fallback.coursesByCenter });
  } catch (err) {
    res.status(500).json({ message: 'Failed to load courses', error: err.message });
  }
};

// ---------- Notifications ----------

exports.getNotifications = async (req, res) => {
  try {
    if (isDBConnected()) {
      const notifications = await Notification.find().sort({ publishedAt: -1 }).lean();
      if (notifications.length) return res.json({ source: 'db', notifications });
    }
    return res.json({ source: 'fallback', notifications: fallback.notifications });
  } catch (err) {
    res.status(500).json({ message: 'Failed to load notifications', error: err.message });
  }
};

exports.markAllNotificationsRead = async (req, res) => {
  try {
    if (isDBConnected()) {
      await Notification.updateMany({}, { $set: { isRead: true } });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update notifications', error: err.message });
  }
};
