$ ->
	# If more than 1 article in Featured Header, then initiate carousel
	articles = $('.featured-header-wrapper article')
	if articles.length > 1
		$('.featured-header-wrapper').owlCarousel
			items: 1
			loop: true
			margin: 0
			center: true
			lazyContent: true

	# $play_shape = '
	# <svg id="svg" viewBox="0 0 191 192" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  #   <defs>
	# 		<clipPath id="clip-play-button" >
  #       <path stroke="red" d="M95.5801385,191.459949 C148.192812,191.459949 190.84381,148.80895 190.84381,96.1962772 C190.84381,43.5836041 148.192812,0.932605373 95.5801385,0.932605373 C42.9674653,0.932605373 0.316466652,43.5836041 0.316466652,96.1962772 C0.316466652,148.80895 42.9674653,191.459949 95.5801385,191.459949 Z M80.2729428,135.339449 C79.4058674,136.031588 78.7029639,135.699192 78.7029639,134.595624 L78.7029639,57.8003105 C78.7029639,56.6973686 79.3990652,56.3589173 80.2729428,57.0564863 L127.737347,94.9447387 C128.604422,95.6368778 128.611225,96.7536272 127.737347,97.4511962 L80.2729428,135.339449 Z" id="path-1"></path>
	# 		</clipPath>
	# 	</defs>
	# </svg>'
	# $('.featured-header-wrapper').append $play_shape
	articles.each ->
		# Get the "play-button" container div
		$play = $(this).find('.play-button')
		$play_container = $(this).find('.play-button-container')



		# Get the URL of the sibling div's background image
		$img = $(this).find('.featured-article-image').attr('style')
		$img = $img.replace('background:url(', '')
		$img = $img.replace(')', '')
		console.log $img

		# $play.attr('style', 'background-image:url(' + $img + ')')
		# $play.attr('style', 'background:red')
		# $play.append('<image src="' + $img + '" />')


		# Create a blurred version of that image in that play button container
		# $play.backgroundBlur
		# 	imageURL: $img,
		# 	blurAmount: 10,
		# 	imageClass: 'bg-blur'




	# showNav()

	# showNav = ->
	#   header = $('header')
	#   # navbg = $('#nav-bg')
	#   nav = $('nav')
	#   # downArrow = $('#down-arrow')
	#   range = 400

	#   $(window).on 'scroll',  ->
	#     scrollTop = $(this).scrollTop()
	#     offset = header.offset().top
	#     height = header.outerHeight()

	#     offset = offset + height / 2
	#     calc = (scrollTop - offset + range) / range
	#     # console.log "Calc " + calc
	#     invertedCalc = (scrollTop + offset - range) / range
	#     # console.log "Inverted " + invertedCalc

	#     # navbg.css opacity: calc
	#     nav.css opacity: calc
	#     # downArrow.css opacity: invertedCalc

	#     if calc > 1
	#       # navbg.css opacity: 1
	#       nav.css opacity: 1
	#       # downArrow.css opacity: 0
	#       return "done"
	#     else if calc < .5
	#       # navbg.css opacity: 0
	#       nav.css opacity: 0
	#       # downArrow.css opacity: 1
	#       return "done"


	# return "noop"
