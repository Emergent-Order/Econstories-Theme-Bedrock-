$ ->
  $allTags = $('.entry-categories')
  $allTags.each ->
    $extracredit = $(this).find('a[href*="extra-credit"]')
    # if $extracredit.length > 0
    #   console.log($extracredit.text())
      # If there's extra credit on this article
    $extracredit.siblings().addClass "extra-credit-star"
    $extracredit.addClass "noDisplay"
      # Find the sibling tag

      # Add "Extra Credit" class to that tag
