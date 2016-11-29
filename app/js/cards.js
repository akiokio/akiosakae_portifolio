(function () {
  // Helper functions
  function outerHeight(el) {
    var height = el.offsetHeight;
    var style = getComputedStyle(el);

    height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    return height;
  }

  var cardBtns = document.getElementsByClassName('card-button');
  Array.prototype.forEach.call(cardBtns, function(cardBtn) {
    var cardWrapper = cardBtn.parentElement.querySelector('.card-wrapper');

    cardBtn.addEventListener('click', function(e){
      e.preventDefault();
      cardWrapper.style.height = outerHeight(this.parentElement.parentElement) + "px";
    });

    cardWrapper.addEventListener('click', function(e){
      cardWrapper.style.height = "0px";
    });
  });
})();