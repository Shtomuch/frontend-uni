var detailsField = document.getElementById('detailsField');
var tooltip = document.getElementById('tooltip');

detailsField.addEventListener('mouseenter', function() {
  tooltip.classList.add('show');
});

detailsField.addEventListener('mouseleave', function() {
  tooltip.classList.remove('show');
});
