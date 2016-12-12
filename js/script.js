
  jQuery(document).ready(function($) {
    $('.my-slider').unslider({
      autoplay: true,
      delay: 4000,
      speed: 2000,
      infinite: true,
      arrows: false,
      animation: 'fade'
    });


  var objGroup = document.getElementsByClassName('ratingSelector');
  for (var i = 0; i < objGroup.length; i++) {
    var objRadio = [].slice.call(objGroup[i].getElementsByClassName('full')); // Create an array of items
    for (var j = objRadio.length; j--;) { // Loop through the array backwards
      var checkbox = document.getElementById(objRadio[j].getAttribute('for'));
      objGroup[i].appendChild(checkbox);
      objGroup[i].appendChild(objRadio[j]);
    }
  }
});
