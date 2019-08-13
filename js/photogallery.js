(function($) {
$(function() {

	$('ul.reveal-modal-catalog-1-photo-small').on('click', 'li:not(.current)', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.reveal-modal-catalog-1-photo').find('div.reveal-modal-catalog-1-photo-big-show').eq($(this).index()).fadeIn(1000).siblings('div.reveal-modal-catalog-1-photo-big-show').hide();
	})

})
})(jQuery)