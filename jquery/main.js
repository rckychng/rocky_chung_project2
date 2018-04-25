$(function() {
	$('.main-nav__icon').on('click', function(){
		$('.main-nav__list').addClass('open');
	});
	
	$('.main-nav__link').on('click', function(){
		$('.main-nav__list').removeClass('open');
	});
});