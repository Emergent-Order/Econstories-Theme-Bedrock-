# --------------------------------------------------
#  Given a value, filter the Isotope content, scroll
#  back up to the top, and select the correct filter.
# --------------------------------------------------
$content = $('.content')
filterContent = (filter) ->
	# Filter the content
	$content.isotope
		itemSelector: '.entry'
		layoutMode: 'masonry'
		filter: filter

	# Debugging
	console.log(filter)

	# Scroll back up to the top
	scrollBackUp()

	# Find nav filter buttons that match the filter, if any
	$filteredByTag = $('nav.nav-secondary a[href*="' + filter.replace('.category-', '') + '"]')
	unless filter is undefined
		addSelectedFormatting($filteredByTag)
	return false


# --------------------------------------------------
#  Given an element to scroll to, scroll back up
#  to that element
# --------------------------------------------------
scrollBackUp = ->
	if $(window).width() <= 640
		$('html, body').animate(
			scrollTop: 1200)
	else
		$('html, body').animate(
			scrollTop: 900)
	return false

# --------------------------------------------------
#  Given a clicked <a>, add "selected" class to the
#  correct subnav filter element
# --------------------------------------------------
addSelectedFormatting = ($toElement) ->
	$url = $toElement.attr('href')
	$url_fragments = $url.split('/')
	$filterName = $url_fragments[$url_fragments.length - 2]
	$link = $('#menu-filter li a[href*="' + $filterName + '"]')

	$("#menu-filter li").each ->
		$(this).find('a').removeClass "selected"

	$link.addClass "selected"

# --------------------------------------------------
#  Given a clicked <a>, get the slug
# --------------------------------------------------
getSlugName = ($clicked) ->
	$url = $clicked.attr('href')
	$url_fragments = $url.split('/')
	$slugName = $url_fragments[$url_fragments.length - 2]
	return $slugName

# --------------------------------------------------
#  Debounce utility function
# --------------------------------------------------
debounce = (func, threshold, execAsap) ->
  timeout = null
  (args...) ->
    obj = this
    delayed = ->
      func.apply(obj, args) unless execAsap
      timeout = null
    if timeout
      clearTimeout(timeout)
    else if (execAsap)
      func.apply(obj, args)
    timeout = setTimeout delayed, threshold || 200
