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

	// testimonial
// 	$("#popular-post-owl").owlCarousel({

// 		slideSpeed : 300,
// 		paginationSpeed : 400,
// 		items: 2,
// 		itemsMobile: 2,
// 		navigation: true,
// 		responsiveClass:true,
// responsive:{
//         425:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
// 	})

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
	$('#slide-out-left li').click((e)=>{
		e.preventDefault();
		$(this).find('.submenu').slideToggle();;
	})

});