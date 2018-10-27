function carousel_init() {
	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		dots: true,
	});
}

function isotope_init(){
var $grid = $('.grid').isotope({
	// options
	itemSelector: '.grid-item',
	layoutMode: 'fitRows'
  });
$('.filter-button-group').on('click', 'button', function(){
	$('.is-checked')[0].classList.remove('is-checked');
	$(this)[0].classList.add('is-checked');
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({filter: filterValue});
})
}

// $(".link_faq").click(function(e){
//   $($(".link_text")[($(this).index())]).toggleClass('active');
//   e.preventDefault();
// });

// $(document).ready(function () {
//   $(".link_faq").click(function (e) {
//     $(this).toggleClass('active');
//     $(".link_text").toggle();

//     e.stopPropagation();
//   });
// });

// onload = function ()
//     {
//     document.querySelector ('.link_faq').onclick = function (e)
//         {
//         var e = e || window.event;
//         if (e.preventDefault) e.preventDefault (); else e.returnValue = false;
//         document.querySelector ('.link_text').style.display = 'block';
//         }
//     document.querySelector ('.link_text').onclick = function (e)
//         {
//         var e = e || window.event;
//         if (e.preventDefault) e.preventDefault (); else e.returnValue = false;
//         document.querySelector ('.link_faq').style.display = 'none';

//         }
//     }

// $(document).ready(function(){
//  $('.link_faq').click(function(){
//   $(this).parent().children('.link_text').slideToggle(200);
//   return false;
//  });
// });

/*ACCORDION INIT FAQ*/
$(document).ready(function() {
	$('.link_text').hide();
	$('.link_faq').click(function() {
		$(this).toggleClass('opened').toggleClass('closed').next().slideToggle(500);

	});
});


/*google map script*/

function initMap(){
	// The location of Uluru
  var uluru = {lat: 47.910483, lng: 33.391783};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {
				zoom: 12,
				center: uluru,
				styles:[
					{
							"featureType": "water",
							"elementType": "geometry",
							"stylers": [
									{
											"color": "#e9e9e9"
									},
									{
											"lightness": 17
									}
							]
					},
					{
							"featureType": "landscape",
							"elementType": "geometry",
							"stylers": [
									{
											"color": "#f5f5f5"
									},
									{
											"lightness": 20
									}
							]
					},
					{
							"featureType": "road.highway",
							"elementType": "geometry.fill",
							"stylers": [
									{
											"color": "#ffffff"
									},
									{
											"lightness": 17
									}
							]
					},
					{
							"featureType": "road.highway",
							"elementType": "geometry.stroke",
							"stylers": [
									{
											"color": "#ffffff"
									},
									{
											"lightness": 29
									},
									{
											"weight": 0.2
									}
							]
					},
					{
							"featureType": "road.arterial",
							"elementType": "geometry",
							"stylers": [
									{
											"color": "#ffffff"
									},
									{
											"lightness": 18
									}
							]
					},
					{
							"featureType": "road.local",
							"elementType": "geometry",
							"stylers": [
									{
											"color": "#ffffff"
									},
									{
											"lightness": 16
									}
							]
					},
					{
							"featureType": "poi",
							"elementType": "geometry",
							"stylers": [
									{
											"color": "#f5f5f5"
									},
									{
											"lightness": 21
									}
							]
					},
					{
							"featureType": "poi.park",
							"elementType": "geometry",
							"stylers": [
									{
											"color": "#dedede"
									},
									{
											"lightness": 21
									}
							]
					},
					{
							"elementType": "labels.text.stroke",
							"stylers": [
									{
											"visibility": "on"
									},
									{
											"color": "#ffffff"
									},
									{
											"lightness": 16
									}
							]
					},
					{
							"elementType": "labels.text.fill",
							"stylers": [
									{
											"saturation": 36
									},
									{
											"color": "#333333"
									},
									{
											"lightness": 40
									}
							]
					},
					{
							"elementType": "labels.icon",
							"stylers": [
									{
											"visibility": "off"
									}
							]
					},
					{
							"featureType": "transit",
							"elementType": "geometry",
							"stylers": [
									{
											"color": "#f2f2f2"
									},
									{
											"lightness": 19
									}
							]
					},
					{
							"featureType": "administrative",
							"elementType": "geometry.fill",
							"stylers": [
									{
											"color": "#fefefe"
									},
									{
											"lightness": 20
									}
							]
					},
					{
							"featureType": "administrative",
							"elementType": "geometry.stroke",
							"stylers": [
									{
											"color": "#fefefe"
									},
									{
											"lightness": 17
									},
									{
											"weight": 1.2
									}
							]
					}
			]
			});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}


function mapOverlatHidden(){
var mapTitle =$ ('.map-title'),
	mapOverlay=$ ('.map-overlay'),
	sectionMap =$ ('.map-section');

		mapTitle.click(function(){
		mapOverlay.addClass('hidden');
		});


		$(document).click(function(e){
			if ((mapTitle.has(e.target).length===0) && (sectionMap.has(e.target).length !==1)){
				mapOverlay.removeClass('hidden');
				};
		});
	}

function to_top(){
	var btn = $ ('.totop-button');
		$(window).scroll (function(){
			if ($(window).scrollTop() > 300){
				btn.addClass('show');
			}
			else{
				btn.removeClass('show');
			}
		});

		btn.on('click', function(e) {
				e.preventDefault();
				$('html, body').animate({scrollTop:0}, '300');
		});
}



$(document).ready(function() {
	carousel_init();
	isotope_init();
	mapOverlatHidden();
	to_top();

});
