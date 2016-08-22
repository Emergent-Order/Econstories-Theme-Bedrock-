$ ->
	# --------------------------------------------------
	#  Initiate Isotope after all images are loaded
	# --------------------------------------------------

	$content.imagesLoaded ->
		$content.isotope
			itemSelector: '.entry'
			layoutMode: 'masonry'
			percentPosition: true
			masonry:
				columnWidth: 'article'

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

		$(this).click ->
			event.preventDefault()
			$filter = ".category-" + getSlugName($(this).find('a'))
			if $(this).find('a').attr('class') == 'show-all'
				$filter = "*"

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
	$tags = $('.entry-categories')
	$tags.each ->
		$(this).find('a').click ->
			event.preventDefault()
			$filter = ".category-" + getSlugName($(this))
			if $(this).find('a').attr('class') == 'show-all'
				$filter = "*"

			filterContent($filter)
			return false
