jQuery(document).ready ($) ->
	console.log "whomadethis loaded"
	whomade = $('#whomadethis-lightbox').remodal()
	$('.who-made-this').click (e), ->
		e.preventDefault()
		whomade.open()
	return
