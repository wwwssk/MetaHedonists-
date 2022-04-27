$(document).ready(function() {

})


/* ------------------headerBurger--------------------headerBurger----------------------------- */
const headerBurger = document.querySelector('.header__burger');
const body = document.querySelector('body');
const menuMobile = document.querySelector('.menu-mobile');

headerBurger.addEventListener("click", function(e) {
	headerBurger.classList.toggle('active')
	body.classList.toggle('active')
	menuMobile.classList.toggle('active')
});




/* ------------ScrollTrigger---------------------ScrollTrigger-----------------------------------ScrollTrigger------------------- */
const tl = gsap.timeline();

tl.fromTo('.sec1__body', 1,{opacity: '1',}, {opacity: '0'}, 1)

ScrollTrigger.create({
	animation: tl,
	trigger: '.sec1__wizard',
	start: '-200px top',
	end: 'center',
	scrub: true,
	pin: true,
})

const tl1 = gsap.timeline();

tl1.fromTo('.sec3__container',0.5, {x: '0', y: '0'}, {x: '0', y: '-80%'},0.05)

ScrollTrigger.create({
	animation: tl1,
	trigger: '.sec3',
	start: 'top top',
	end: 'bottom',
	scrub: true,
	pin: true,
})


// Прокрутка при клике
$('.click').on('click', function() {

	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
	    duration: 770,   // по умолчанию «400» 
	    easing: "linear" // по умолчанию «swing» 
	});

	return false;
});


$(document).ready(function() {
	$('.remove-click').click(function(event) {
		$('.header__burger, body, .menu-mobile').removeClass('active')
	});
})

