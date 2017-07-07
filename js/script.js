// scrollspy plagin initialization
$('body').scrollspy({ target: '.navbar-collapse' });

$('.video-overlay').click(function(evt){
    evt.preventDefault();
    $('.video-overlay').addClass('hidden');
});

// slick slider for portfolio slider + counting slides
$(document).ready(function(){
  $('.potfolio-slider-inner').slick({
      speed: 1500,
      cssEase: 'cubic-bezier(.6, -.3, .71, 1)'
  });
});

var $status = $('.portfolio-slider-page');
var $slickElement = $('.potfolio-slider-inner');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});

// slick slider for review slider
$(document).ready(function(){
  $('.review-slider-inner').slick({
  });
});

// slick slider for members slider + counting slides
$(document).ready(function(){
  $('.members-slider-inner').slick({
      vertical: true
  });
});

var $statusMemeber = $('.members-slider-page');
var $slickElementMember = $('.members-slider-inner');

$slickElementMember.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $statusMemeber.text(i + '/' + slick.slideCount);
});