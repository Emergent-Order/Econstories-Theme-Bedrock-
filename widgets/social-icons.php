<?php

/*
Plugin Name: Social Sharing Kit for Econstories
Plugin URI: https://socialsharekit.com
Description: Porting SSK for theme use
Author:
Version: 1
Author URI: http://emergentorder.com
*/

class my_plugin extends WP_Widget {

  // constructor
  function ssk_widget() {
  // Give widget name here
  parent::WP_Widget(false, $name = __('Social Sharing Kit', 'wp_widget_plugin') );

  }
  // widget form creation

  function form($instance) {

  // Check values
  if( $instance) {
  $title = esc_attr($instance['title']);
  $textarea = $instance['textarea'];
  } else {
  $title = '';
  $textarea = '';
  }
  ?>

  <p>
  <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title', 'wp_widget_plugin'); ?></label>
  <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo $title; ?>" />
  </p>
  <p>
  <label for="<?php echo $this->get_field_id('textarea'); ?>"><?php _e('Description:', 'wp_widget_plugin'); ?></label>
  <textarea class="widefat" id="<?php echo $this->get_field_id('textarea'); ?>" name="<?php echo $this->get_field_name('textarea'); ?>" rows="7" cols="20" ><?php echo $textarea; ?></textarea>
  </p>
  <?php
  }

  function update($new_instance, $old_instance) {
    $instance = $old_instance;
    // Fields
    $instance['title'] = strip_tags($new_instance['title']);
    $instance['textarea'] = strip_tags($new_instance['textarea']);
    return $instance;
  }


}

?>
