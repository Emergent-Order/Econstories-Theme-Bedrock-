jQuery(document).ready ($) ->
	console.log "whomadethis loaded"
	whomade = $('#whomadethis-lightbox').remodal()
	$('.who-made-this').on 'click', (event) ->
		event.preventDefault()
		whomade.open()
	return
