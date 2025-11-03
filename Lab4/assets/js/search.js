var searchInput = document.getElementById('searchInput');
var cards = document.querySelectorAll('.card.lot');

searchInput.addEventListener('input', function() {
  var searchText = searchInput.value.toLowerCase();

  for (var i = 0; i < cards.length; i++) {
    var planetName = cards[i].getAttribute('data-name').toLowerCase();
    var parentLink = cards[i].parentElement;

    if (planetName.indexOf(searchText) >= 0) {
      parentLink.style.display = 'block';
    } else {
      parentLink.style.display = 'none';
    }
  }
});
