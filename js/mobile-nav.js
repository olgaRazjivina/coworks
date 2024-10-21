const mobileNavBtnOpen = document.querySelector('#openMobileNav');
const mobileNavBtnClose = document.querySelector('#closeMobileNav');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLinks = mobileNav.querySelectorAll('a, button');

mobileNavBtnOpen.addEventListener('click', function () {
  mobileNav.classList.add('mobile-nav--open');
  document.body.classList.add('no-scroll');
});

mobileNavBtnClose.addEventListener('click', function () {
  mobileNav.classList.remove('mobile-nav--open');
  document.body.classList.remove('no-scroll');
});

mobileNavLinks.forEach(function (item) {
  item.addEventListener('click', function () {
    mobileNav.classList.remove('mobile-nav--open');
    document.body.classList.remove('no-scroll');
  });
});
