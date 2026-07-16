/* =============================================================
   COE IMSciences — main.js
   jQuery is used for:
     1. Hero carousel (Slick)
     2. Notifications panel (open/close/load/mark-read)
     3. Text-size accessibility toggle
     4.  Active navigation for Home sections
   Bootstrap JS handles:
     • Mobile navbar (collapse / hamburger)  → zero code here
     • FAQ accordion                         → zero code here
   ============================================================= */

$(function () {
  'use strict';

 /* ── 1. HERO CAROUSEL (Slick) ───────────────────────────── */

if ($.fn.slick) {

  // Desktop carousel
  if ($('.hero-slick').length) {
    $('.hero-slick').slick({
      dots: true,
      arrows: true,
      fade: true,
      cssEase: 'ease-in-out',
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3500,
      infinite: true,
      pauseOnHover: true
    });
  }

  // Mobile carousel (one image per slide)
  if ($('.hero-slick-mobile').length) {
    $('.hero-slick-mobile').slick({
      dots: false,
      arrows: false,
      fade: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3500,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true
    });
  }

}
  /* =========================================================
   Notifications panel (blurred overlay)
   ========================================================= */

var $overlay = $('#notifOverlay');
var $panel = $('#notifPanel');
var $list = $('#notifList');
var notificationsLoaded = false;

function formatDate(dateStr) {
  var d = new Date(dateStr);
  if (isNaN(d.getTime())) return '';

  return d.toLocaleDateString('en-PK', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function renderNotifications(items) {

  if (!items || !items.length) {
    $list.html(
      '<p class="notif-loading">You\'re all caught up — no notifications.</p>'
    );
    return;
  }

  var html = items.map(function (n) {

    return (
      '<div class="notif-card">' +

      '<h4>' + $('<span>').text(n.title).html() + '</h4>' +

      '<p>' + $('<span>').text(n.message).html() + '</p>' +

      (n.attachmentUrl
        ? '<a class="notif-attachment" href="' +
          n.attachmentUrl +
          '" target="_blank" rel="noopener noreferrer">' +
          $('<span>').text(n.attachmentName || 'Document').html() +
          '</a>'
        : '') +

      // '<span class="notif-date">' +
      // formatDate(n.publishedAt) +
      // '</span>' +

      '</div>'
    );

  }).join('');

  $list.html(html);
}

function loadNotifications() {

  $list.html(
    '<p class="notif-loading">Loading notifications…</p>'
  );

  $.getJSON('/api/notifications')

    .done(function (res) {

      var items = (res && res.notifications) || [];

      renderNotifications(items);

      notificationsLoaded = true;

    })

    .fail(function () {

      $list.html(
        '<p class="notif-loading">Could not load notifications.</p>'
      );

    });
}

// function openNotifications() {
//
//   $overlay.addClass('active');
//   $panel.addClass('active');
//
//   $('body').addClass('notif-open');
//
//   if (!notificationsLoaded) {
//     loadNotifications();
//   }
// }
//
// function closeNotifications() {
//
//   $overlay.removeClass('active');
//   $panel.removeClass('active');
//
//   $('body').removeClass('notif-open');
// }
//
// /* ── Auto-show notifications on homepage load ─────────────── */
// if (window.location.pathname === '/' || window.location.pathname === '/index') {
//   openNotifications();
// }
//
// /* Open panel */
//
// $('#notifTrigger, #notificationsTrigger, #notificationsTriggerMobile')
//   .on('click keypress', function (e) {
//
//     if (e.type === 'keypress' && e.which !== 13) {
//       return;
//     }
//
//     $('#mobileMenu').removeClass('open');
//
//     openNotifications();
//
//   });
//
// /* Close panel */
//
// $('#notifClose, #notifOverlay').on('click', closeNotifications);
//
// $(document).on('keyup', function (e) {
//
//   if (e.key === 'Escape') {
//     closeNotifications();
//   }
//
// });

/* Mark all as read */

// $('#markAllReadBtn').on('click', function () {

//   $.post('/api/notifications/mark-read')

//     .always(function () {

//       // Reload next time panel opens
//       notificationsLoaded = false;

//       // Close the panel immediately
//       closeNotifications();

//     });

// });

  /* ── 3. TEXT-SIZE ACCESSIBILITY TOGGLE ─────────────────── */
  var sizes = ['100%', '112%', '125%'];
  var sizeStep = parseInt(localStorage.getItem('coeTextStep') || '0', 10);

  function applySize(step) {
    document.documentElement.style.fontSize = sizes[step];
    localStorage.setItem('coeTextStep', step);
  }
  if (sizeStep) applySize(sizeStep);

  $('#textSizeBtn').on('click', function () {
    sizeStep = (sizeStep + 1) % sizes.length;
    applySize(sizeStep);
  });

  /* =========================================================
   Mobile navbar / active navigation
   ========================================================= */

function closeMobileMenu() {
  if (window.innerWidth < 992) {
    var $collapse = $('#mainNav');
    if ($collapse.hasClass('show')) {
      $collapse.collapse('hide');
    }
  }
}

function getHeaderOffset() {
  var $header = $('.site-header');
  var headerHeight = $header.outerHeight() || 0;
  var extraOffset = window.innerWidth < 992 ? 24 : 12;
  return Math.max(90, headerHeight + extraOffset);
}

function scrollToSection(targetId) {
  var target = document.getElementById(targetId);
  if (!target) return;

  var top = target.getBoundingClientRect().top + window.pageYOffset - getHeaderOffset();
  window.scrollTo({ top: top, behavior: 'smooth' });
}

$('.navbar-nav .nav-link, .navbar-nav .nav-notif-trigger, .navbar .btn-brand').on('click', function (e) {
  closeMobileMenu();

  var href = $(this).attr('href') || '';
  var parsed = href ? new URL(href, window.location.href) : null;

  if (parsed && parsed.pathname === window.location.pathname && parsed.hash) {
    e.preventDefault();
    var id = parsed.hash.replace('#', '');
    scrollToSection(id);
    history.pushState(null, '', parsed.hash);
  }

  if ($(this).hasClass('nav-link')) {
    $('.navbar-nav .nav-link').removeClass('active fw-bold');
    $(this).addClass('active fw-bold');
  }
});

});
