<?php
/*
Plugin Name: Greeting Plugin
Description: A plugin that adds a [greeting] shortcode to display a welcome message.
Version: 1.0
Author: Jerry Weng
*/

// Function to display the greeting message
function greeting_shortcode() {
    return "Welcome to My Site!";
}

// Register the [greeting] shortcode
function register_greeting_shortcode() {
    add_shortcode('greeting', 'greeting_shortcode');
}

// Hook into WordPress initialization
add_action('init', 'register_greeting_shortcode');
