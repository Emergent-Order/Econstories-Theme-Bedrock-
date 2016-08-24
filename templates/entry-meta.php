<?php
    $posttags = get_the_category();
    $count = 0;
    if ($posttags) {
      echo '<div class="tags">';
        if (get_post_type($post->ID) == "extra-credit") {
          foreach($posttags as $tag) {
              $count++;
              echo '<span><a class="extra-credit-star" data-filter="' . $tag->slug . '" data-filter="extra-credit" href="#">Extra Credit: '. $tag->name .'</a> </span>';
              if( $count > 3 ) break;
          }
          // echo '<span><a data-filter="extra-credit" href="#">extra credit</a></span>';
        } else {
          foreach($posttags as $tag) {
              $count++;
              echo '<span><a data-filter="' . $tag->slug . '" href="#">'. $tag->name .'</a> </span>';
              if( $count > 3 ) break;
          }
        }
      echo '</div>';
    }
  ?>
