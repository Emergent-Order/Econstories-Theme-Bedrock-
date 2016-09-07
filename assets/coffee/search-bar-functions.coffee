jQuery(document).ready ($) ->
  console.log "search-bar-functions loaded"




  # Add "Clear" button to search bar
  $('nav.nav-secondary input').wrap('<div class="search-bar-wrap"></div>')

  $search_bar_wrap = $('.nav-secondary .search-bar-wrap')
  $search_bar = $('.nav-secondary input')

  # $search_bar_wrap.append('<a id="clear-search" href="#" data-action="clear" class="hide"><i class="ion ion-close-round"></i></a>')
  $clear = $('nav.nav-secondary #clear-search')

  # When a user clicks into the search bar,
  # show the clear button.
  $search_bar.on 'focus', ->
    console.log "Focused"
    $clear.removeClass 'hide'
    return
  $search_bar.off 'focus', ->
    console.log "un-focused"
    $clear.addClass 'hide'
    return

  # When a user clicks the clear button,
  # clear the text from the search bar and
  # filter the content back to "all".
  $clear.click ->
    event.preventDefault()
    console.log event.type
    $search_bar.val ""
    $clear.addClass 'hide'
    filterContent("*")
    return false

  $search = $search_bar_wrap
  # console.log $search

  # if $(window).width() <= 640
  #   lastScrollTop = 0
  #   $(window).on "scroll", ->
  #     currentScrollTop = $(this).scrollTop()
  #     if currentScrollTop < lastScrollTop
  #       up = true
  #     else
  #       up = false
  #     # If scrolling up and nav is sticky, show the search
  #     if up and currentScrollTop > 800
  #       $search.removeClass "hide"
  #       $search.removeClass "small"
  #     # If clicked into search, show the search
  #     else if $('nav.nav-secondary input').is(":focus")
  #       $search.removeClass "hide"
  #       $search.removeClass "small"
  #     # Otherwise, hide it
  #     else
  #       $search.addClass "hide"
  #       $search.addClass "small"
  #     lastScrollTop = currentScrollTop
    #   return
    # return
  return
