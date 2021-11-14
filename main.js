window.addEventListener('scroll', function () {
  console.log('scroll');
  let header = document.querySelector('.main-navigation');
  let windowPosition = window.scrollY > 400;
  header.classList.toggle('scrolling-active', windowPosition);
})