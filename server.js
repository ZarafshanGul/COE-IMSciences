require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { connectDB } = require('./config/db');

const pageRoutes = require('./routes/pages');
const apiRoutes = require('./routes/api');
const pageController = require('./controllers/pageController');

const app = express();

// ==========================================
// Global Google Form Link
// ==========================================
app.locals.applyFormLink = '#';

// Kick off the DB connection (non-blocking - pages fall back to static data
// until the connection resolves, which matters most on serverless cold starts).
connectDB();

// ---------- View engine ----------
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ---------- Core middleware ----------
app.use(morgan(process.env.NODE_ENV === 'production' ? 'tiny' : 'dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------- Static assets ----------
app.use(express.static(path.join(__dirname, 'public')));

// ---------- Routes ----------
app.use('/api', apiRoutes);
app.use('/', pageRoutes);

// ---------- 404 ----------
app.use(pageController.render404);

// ---------- Error handler ----------
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  if (req.originalUrl.startsWith('/api')) {
    return res.json({ message: err.message || 'Server error' });
  }
  res.send('Something went wrong. Please try again later.');
});

const PORT = process.env.PORT || 3000;

// Vercel imports this file as a serverless function (see vercel.json), so we
// only call app.listen() when running locally / on a traditional Node host.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`COE IMSciences server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
