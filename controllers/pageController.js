const Center    = require('../models/Center');
const Course    = require('../models/Course');
const { isDBConnected } = require('../config/db');
const fallback  = require('../data/fallback');

// ---- helpers -----------------------------------------------
function getCentersWithCourses() {
  // coursesByCenter values are now {title, slug} objects — pass them through as-is
  return fallback.centers.map((center) => ({
    ...center,
    courses: fallback.coursesByCenter[center.slug] || [],
  }));
}

// ---- page renderers ----------------------------------------

exports.renderHome = async (req, res) => {
  res.render('index', {
    pageTitle: 'COE IMSciences',
    activeNav:  'home',
    hubFeatures:      fallback.hubFeatures,
    spokeInstitutes:  fallback.spokeInstitutes,
    courseCategories: fallback.allCourseCategories,
    heroSlides:       fallback.heroSlides,
    footerSpokes:     fallback.footerSpokes,
  });
};

exports.renderCourses = async (req, res) => {
  const centers = getCentersWithCourses();
  res.render('courses', {
    pageTitle:   'Courses | COE IMSciences',
    activeNav:   'courses',
    centers,
    imsCourses:  fallback.imsCourses,
    prevCourses: fallback.prevCourses,
    footerSpokes: fallback.footerSpokes,
  });
};

exports.renderCourse = (req, res) => {
  const baseCourse = fallback.courseDetails[req.params.slug];
  if (!baseCourse) {
    return res.status(404).render('404', {
      pageTitle:   '404 | COE IMSciences',
      activeNav:   '',
      footerSpokes: fallback.footerSpokes,
    });
  }
  const center = fallback.centers.find(({ slug }) => slug === req.query.center)
    || fallback.centers.find(({ type }) => type === 'hub');
  const offering = fallback.courseOfferingsByCenter[center?.slug]?.[req.params.slug];
  const courseDetails = offering ? { ...baseCourse, ...offering } : baseCourse;
  const course = {
    ...courseDetails,
    registrationsOpen: Boolean(
      center?.registrationsOpen
      && courseDetails.applyLink
      && (offering || baseCourse.registrationsOpen)
    ),
  };
  res.render('course-detail', {
    pageTitle:   `${course.title} | ${course.contactEmail ? 'Admissions' : 'COE IMSciences'}`,
    activeNav:   'courses',
    course,
    footerSpokes: fallback.footerSpokes,
  });
};

exports.renderFaq = async (req, res) => {
  res.render('faq', {
    pageTitle:   'FAQ | COE IMSciences',
    activeNav:   'faq',
    faqs:        fallback.faqs,
    footerSpokes: fallback.footerSpokes,
  });
};

exports.renderSpokePage = (req, res, next) => {
  const spokePage = fallback.spokePages[req.params.spoke];
  if (!spokePage) {
    return next();
  }
  const center = fallback.centers.find(({ slug }) => slug === req.params.spoke);
  const spoke = {
    ...spokePage,
    registrationsOpen: Boolean(center?.registrationsOpen && spokePage.applyLink),
  };
  res.render('spoke-admissions', {
    pageTitle:   `${spoke.title} | Admissions | COE IMSciences`,
    activeNav:   '',
    spoke,
    footerSpokes: fallback.footerSpokes,
  });
};

exports.renderLogin = async (req, res) => {
  res.render('login', {
    pageTitle:   'Apply / Login | COE IMSciences',
    activeNav:   'login',
    footerSpokes: fallback.footerSpokes,
  });
};

exports.render404 = (req, res) => {
  res.status(404).render('404', {
    pageTitle:   '404 | COE IMSciences',
    activeNav:   '',
    footerSpokes: fallback.footerSpokes,
  });
};
