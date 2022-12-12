$(function(){
	'use-strict';

	// side nav left
	$(".side-nav-left").sideNav({

		edge: 'left',
		closeOnClick: false

	});

	// slider
	$(".slider").slider({full_width: true});

	$('#popular-post-owl').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		navigation: true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			}
		}
	})

	
	// select
	$('select').material_select();

	// loader
    $("#fakeLoader").fakeLoader({
      
      zIndex: 999,
      spinner: 'spinner4',
      bgColor: '#ffffff'

    });

    $('.collapsible').collapsible({
		accordion: false
	});

	// Funcion menu 
	$(this).click((e)=>{
		// e.preventDefault();
		let id = e.target.id
		$(`#${id}`).parent().find('.submenu').slideToggle();
	})

	$("#dailyNews").hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('#dailyNews').fadeIn();

		} else {
			$('#dailyNews').fadeOut();
		}
	});

	// $('#toTop').click(function () {
	// 	$('body,html').animate({scrollTop: 0}, 800);
	// 	// return false;
	// });


});