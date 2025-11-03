function checkMenuOrientation() {
  var nav = document.getElementById('mainNav');
  if (!nav) return;

  var screenWidth = window.innerWidth;

  if (screenWidth <= 768) {
    nav.style.flexDirection = 'column';
    nav.style.width = '100%';
  } else {
    nav.style.flexDirection = 'row';
    nav.style.width = 'auto';
  }
}

checkMenuOrientation();

window.addEventListener('resize', function() {
  checkMenuOrientation();
});
