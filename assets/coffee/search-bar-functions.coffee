jQuery(document).ready ($) ->
  # Add "Clear" button to search bar
  $('nav.nav-secondary input').wrap('<div class="search-bar-wrap"></div>')

  $search_bar_wrap = $('nav.nav-secondary .search-bar-wrap')
  $search_bar = $('nav.nav-secondary input')

  # $search_bar_wrap.append('<a id="clear-search" href="#" data-action="clear" class="hide"><i class="ion ion-close-round"></i></a>')
  $clear = $('nav.nav-secondary #clear-search')

  # When a user clicks into the search bar,
  # show the clear button.
  $search_bar.focus ->
    $clear.removeClass 'hide'
  $search_bar.off 'focus', ->
    $clear.addClass 'hide'

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
  console.log $search
  if $(window).width() <= 640
    lastScrollTop = 0
    $(window).on "scroll", ->
      currentScrollTop = $(this).scrollTop()
      if currentScrollTop < lastScrollTop
        up = true
      else
        up = false
      # If scrolling up and nav is sticky, show the search
      if up and currentScrollTop > 800
        $search.removeClass "hide"
        $search.removeClass "small"
      # If clicked into search, show the search
      else if $('nav.nav-secondary input').is(":focus")
        $search.removeClass "hide"
        $search.removeClass "small"
      # Otherwise, hide it
      else
        $search.addClass "hide"
        $search.addClass "small"
      lastScrollTop = currentScrollTop
