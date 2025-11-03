var accordionHeaders = document.querySelectorAll('.accordion-header');

for (var i = 0; i < accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener('click', function() {
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      var allContents = document.querySelectorAll('.accordion-content');
      for (var j = 0; j < allContents.length; j++) {
        allContents[j].style.maxHeight = null;
      }
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}
