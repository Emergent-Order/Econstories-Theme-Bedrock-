(($) ->

	console.log "navbars.coffee loaded"





	# $quicksearch = '<input type="text" class="quicksearch" placeholder="Search" />'


	$navWrap = $('header.banner')


	a = $navWrap.offset().top + 200

	$(document).scroll( ->
		if $(this).scrollTop() > a
		  $navWrap.addClass("bg-dark")
		else
		  $navWrap.removeClass("bg-dark")
	)

	$nav = $('nav.nav-primary')
	$nav_filter = jQuery('nav.nav-secondary')
	$nav_filter_overlay = '<div class="nav-filter-overlay"></div>'

	$nav_filter.prepend($nav_filter_overlay)
	$navbg = $('.nav-background')
	$header = $('header.site-header')
	range = 800

	# $nav.fixedsticky( top: 0 )
	$nav_filter.fixedsticky ( top: 0 )


	$nav_filter.find('.wrap').append $quicksearch

	$email_widget = $('.econstories-mailchimp-signup-widget')
	$email_widget.detach()
	$('header.site-header').append($email_widget)
	$('#menu-filter').attr('style','color: red')
	$('#menu-filter').scroll ->
		console.log "Scrolled!"
		return
	return


)(jQuery)
