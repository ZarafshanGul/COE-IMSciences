require('dotenv').config();
const mongoose = require('mongoose');

const Center = require('../models/Center');
const Course = require('../models/Course');
const Notification = require('../models/Notification');
const fallback = require('../data/fallback');

async function seed() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI is not set. Add it to your .env file before seeding.');
    process.exit(1);
  }

  await mongoose.connect(uri);
  console.log('Connected to MongoDB for seeding...');

  await Promise.all([Center.deleteMany({}), Course.deleteMany({}), Notification.deleteMany({})]);
  console.log('Cleared existing centers, courses and notifications.');

  const createdCenters = await Center.insertMany(fallback.centers);
  console.log(`Inserted ${createdCenters.length} centers.`);

  const courseDocs = [];
  createdCenters.forEach((center) => {
    let courses = [];

    if (center.slug === 'imsciences-peshawar') {
      courses = [
        ...fallback.imsCourses.map((c) => ({ ...c, status: 'open' })),
        ...fallback.prevCourses.map((c) => ({ ...c, status: 'closed' })),
      ];
    } else {
      courses = (fallback.coursesByCenter[center.slug] || []).map((c) => ({
        ...c,
        status: center.registrationsOpen ? 'open' : 'closed',
      }));
    }

    courses.forEach((c) => {
      courseDocs.push({ title: c.title, center: center._id, status: c.status });
    });
  });

  if (courseDocs.length) {
    const createdCourses = await Course.insertMany(courseDocs);
    console.log(`Inserted ${createdCourses.length} courses.`);
  }

  const createdNotifications = await Notification.insertMany(fallback.notifications);
  console.log(`Inserted ${createdNotifications.length} notifications.`);

  console.log('Seeding complete.');
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
