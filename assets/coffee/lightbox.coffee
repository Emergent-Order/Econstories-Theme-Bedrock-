(($) ->
  console.log "lightbox.coffee loaded"

  $('#lightbox-content').featherlight
  $articles = $('.content').find('article')

  post = ""
  oembed = ""
  extracredit = ""

  # For each article
  $articles.each ->
    # Find the featured image
    $container = $(this).find('.entry-featured-image')

    # Check how long the style tag is.
    # If it's long, add special image class.
    # $style = $container.attr('style')
    # if $style.length > 27
    #   $(this).addClass('has-econstories-image')

    $title = $(this).find('h2.entry-title').text()
    # Find the links inside the article
    $(this).on "click", ->
      # If the link has "open-lightbox" class
      if $(this).find('a').hasClass('open-lightbox')
        event.preventDefault()
        getPostData($title)


  $featuredArticles = $('header').find('article')
  $featuredArticles.each ->
    $(this).on "click", ->
      event.preventDefault()
      $title = $(this).find('.entry-title').text()
      # console.log $title
      getPostData($title)


  # --------------------------------------------------
  #  Get data from WP about the post, based on its
  #  title.
  # --------------------------------------------------
  getPostData = ($title) ->
    # console.log $title
    # Call WP database with url, get Extra Credit box
    req = $.ajax({
      url: lightboxy.ajax_url
      type: 'POST'
      data: {
        title: $title
        action: 'extra_credit_html'
      }
      dataType: 'json'
      success: (data) ->
        # $lightbox.empty()
        post = data[0]
        oembed = data[1]
        extracredit = data[2]
      })
      .done(appendLightbox)
      .fail(errorFunction)
      .always(openLightbox)



  # --------------------------------------------------
  #  Append retrieved data to the lightbox
  # --------------------------------------------------
  appendLightbox = (data,status,object) ->
    # console.log "Data Handled: " + data
    # console.log "Data Handled: " + status
    # console.log "Data Handled: " + object
    oembed = $("#lightbox-oembed-container")
    extracredit_container = $("#lightbox-extracredit-container")
    learnmore = $("#lightbox-learn-more")

    if data.length > 0
      # console.log data[1]
      # oembed.append "This worked"
      oembed.append data[1]
      if data.length > 2
        $('#lightbox-extracredit-container .entry-title').append data[3]
        $('#lightbox-extracredit-container .entry-author').append data[4]
        $('#lightbox-extracredit-container .entry-content').append data[5]
        $('#lightbox-affiliate-url').attr('href', data[6])
        if data[2]
          $('#lightbox-learn-more').append data[2]
        else
          $('#lightbox-learn-more').append "Want to learn more? Check out this book we've picked for you:"

        if data[7]
          $('#lightbox-extracredit-container article').addClass "has-econstories-image"

      unless data[2]
        $('#lightbox-learn-more').addClass "hide"

      unless data[3].length > 2
        $('#lightbox-extracredit-container').addClass "hide"

    # console.log "Data appended"


    return "done"


  openLightbox = ->
    lightbox = $("[data-remodal-id='lightbox']").remodal()
    lightbox.open()
    $(document).on('closed', '#lightbox-container', ->
        $('#lightbox-content #lightbox-oembed-container').empty()
        $('#lightbox-extracredit-container .entry-title').empty()
        $('#lightbox-extracredit-container .entry-author').empty()
        $('#lightbox-extracredit-container .entry-content').empty()
        $('#lightbox-affiliate-url').attr('href', "")
        $('#lightbox-learn-more').empty()
        $('#lightbox-extracredit-container').removeClass "hide"
        $('#lightbox-learn-more').removeClass "hide"
        # console.log "Theoretically delete things only now"
      )
    # $('#lightbox-content').modal('show')
    # $('#lightbox-content').modal('setting', 'transition', 'fade')
    # $('#lightbox-content').modal
    #   blurring: true
    #   duration: 100
    #   onHide: ->
    #

    # console.log "(Theoretically) Open a lightbox"

  deleteAllThings = ->

    # console.log "Data removed "


  errorFunction = ->
    console.log "Something didn't work"
)(jQuery)
