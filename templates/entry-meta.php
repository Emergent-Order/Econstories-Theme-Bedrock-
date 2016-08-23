<?php
    $posttags = get_the_category();
    $count = 0;
    if ($posttags) {
      echo '<div class="tags">';
        foreach($posttags as $tag) {
            $count++;
            echo '<span><a data-filter="' . $tag->slug . '" href="#">'. $tag->name .'</a> </span>';
            if( $count > 3 ) break;
        }
        if (get_post_type($post->ID) == "extra-credit") {
          echo '<span><a data-filter="extra-credit" href="#">extra credit</a></span>';
        }
      echo '</div>';
    }
  ?>
