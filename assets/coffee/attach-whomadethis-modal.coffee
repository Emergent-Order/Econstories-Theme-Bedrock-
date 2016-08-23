jQuery(document).ready ($) ->
	console.log "whomadethis loaded"
	whomade = $('#whomadethis-lightbox').remodal()
	$('.who-made-this a').click ->
		whomade.open()
	return
