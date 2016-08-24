jQuery(document).ready ($) ->
	console.log "init-masonry.coffee loaded"
	$content = $('.content')

	# # --------------------------------------------------
	# #  Given a clicked <a>, get the slug
	# # --------------------------------------------------
	# getSlugName = ($clicked) ->
	# 	$url = $clicked.attr('href')
	# 	$url_fragments = $url.split('/')
	# 	$slugName = $url_fragments[$url_fragments.length - 2]
	# 	return $slugName
	#
	# # --------------------------------------------------
	# #  Given a value, filter the Isotope content, scroll
	# #  back up to the top, and select the correct filter.
	# # --------------------------------------------------

	# filterContent = (filter) ->
	# 	# Filter the content
	# 	$content.isotope
	# 		itemSelector: 'article'
	# 		layoutMode: 'masonry'
	# 		filter: filter
	#
	# 	# Debugging
	# 	console.log(filter)
	#
	# 	# Scroll back up to the top
	# 	scrollBackUp()
	#
	# 	# Find nav filter buttons that match the filter, if any
	# 	$filteredByTag = $('nav.nav-secondary a[href*="' + filter.replace('.category-', '') + '"]')
	# 	unless filter is undefined
	# 		addSelectedFormatting($filteredByTag)
	# 	return false
	#
	# # --------------------------------------------------
	# #  Given an element to scroll to, scroll back up
	# #  to that element
	# # --------------------------------------------------
	# scrollBackUp = ->
	# 	if $(window).width() <= 640
	# 		$('html, body').animate(
	# 			scrollTop: 1200)
	# 	else
	# 		$('html, body').animate(
	# 			scrollTop: 900)
	# 	return false
	#
	# # --------------------------------------------------
	# #  Given a clicked <a>, add "selected" class to the
	# #  correct subnav filter element
	# # --------------------------------------------------
	# addSelectedFormatting = ($toElement) ->
	# 	$url = $toElement.attr('href')
	#
	# 	unless $url is undefined
	# 		$url_fragments = $url.split('/')
	# 		$filterName = $url_fragments[$url_fragments.length - 2]
	# 		$link = $('#menu-filter li a[href*="' + $filterName + '"]')
	#
	# 	$("#menu-filter li").each ->
	# 		$(this).find('a').removeClass "selected"
	#
	# 	if $link
	# 		$link.addClass "selected"
	# 	else
	# 		$('#menu-filter li a.show-all').addClass 'selected'

	# --------------------------------------------------
	#  Debounce utility function
	# --------------------------------------------------
	# debounce = (func, threshold, execAsap) ->
	#   timeout = null
	#   (args...) ->
	#     obj = this
	#     delayed = ->
	#       func.apply(obj, args) unless execAsap
	#       timeout = null
	#     if timeout
	#       clearTimeout(timeout)
	#     else if (execAsap)
	#       func.apply(obj, args)
	#     timeout = setTimeout delayed, threshold || 200

	# --------------------------------------------------
	#  Initiate Isotope after all images are loaded
	# --------------------------------------------------

	$content.imagesLoaded ->
		$content.isotope
			itemSelector: 'article'
			layoutMode: 'masonry'
			percentPosition: true
			masonry:
				columnWidth: 'article'
				gutterWidth: '.gutter-sizer'

	# --------------------------------------------------
	#  When clicked, subnav menu items should filter the
	#  content, scroll back to the top, and add selected
	#  formatting to the correct filter.
	# --------------------------------------------------
	$filter = $('ul#menu-filter')
	$filter.prepend "<li id='menu-all' data-sort-by='-1' class='menu-item menu-item-type-taxonomy menu-item-object-category'><a class='show-all' href=''>all</a></li>"

	$filterItems = []
	$('#menu-filter li').each ->
		$filterItems.push($(this))
		$(this).find('a').addClass "normal-filter"

		$(this).find('a').click ->
			event.preventDefault()

			if $(this).attr('class').includes('show-all')
				$filter = "*"
			else
				$filter = ".category-" + getSlugName($(this))

			filterContent($filter)
			return false

	# --------------------------------------------------
	#  Using the search bar should filter content and
	#  scroll you back up to the top
	# --------------------------------------------------
	$quicksearch = $('.quicksearch')
	$quicksearch.on "click", ->
		scrollBackUp()

	$quicksearch.on "keyup", ->
		pattern = new RegExp($quicksearch.val(), 'i')
		console.log pattern

		scrollBackUp()

		$searchTerm = $quicksearch.val()
		# console.log $searchTerm
		# qsRegex = new RegExp ( $searchTerm 'gi')
		if $searchTerm.length > 0
			$content.isotope
				filter: ->
					return true if pattern.test($(this).text())
					console.log pattern.test($(this).text())
					# return true if $(this).text().match($searchTerm) or $(this).html().match($searchTerm)
		else
			$content.isotope
				filter: '*'

		# debounce( ->
		# 	console.log $quicksearch.val()
		# 	qsRegex = new RegExp ( $quicksearch.val() 'gi')
		# 	$content.isotope
		# 		filter: ->
		# 			return qsRegex if $(this).text().match(qsRegex) is true
		# 	300)

# --------------------------------------------------
#  When clicking tags, they should act like filters
# --------------------------------------------------
	$tags = $('.tags')
	$tags.each ->
		$(this).find('a').click ->
			event.preventDefault()
			$filter = ".category-" + getSlugName($(this))
			if $(this).find('a').attr('class') == 'show-all'
				$filter = "*"

			filterContent($filter)
			return false
