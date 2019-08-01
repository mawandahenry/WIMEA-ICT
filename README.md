# WIMEA-ICT</br>
## automated setup guide for a weather station</br>
![the_pic logo](images/WIMEA.png)</br>
[![Maintainability](https://api.codeclimate.com/v1/badges/9a034955d51c6f95cff8/maintainability)](https://codeclimate.com/github/mawandahenry/WIMEA-ICT/maintainability)
***an automated setup guide for all weather users***
- current issues that need attention
> manual simulation</br>
> automatic simulation</br>
- [x] @sewante finished audio synchronization and putting together the explore module :smiley: :sparkles:</br>
- [x] @mawanda Henry finished part of the mannual simualation(cores) :+1:</br>
- [x] @grace and Umar worked on the current version of the auto-simulation. :octocat:</br>

- ***manual simualation :grimacing: :sweat: ***
> The collision detection algorithm located in js/main.js has to be revisited because it failed to check for collisions between lines and images from top and bottom.</br>
> If possible the drawn lines can be made responsive so  that if one resizes the browser, then the lines should try to blend in

- ***auto simualation :grimacing: :sweat: ***
> The stop and pause buttons are still a challenge in that they disrupt the normal flow of the animation.</br>
> The algorithms have to be updated so that they don't stick on one module type. they have to be dynamic in one way or the other
```javascript
function colDetect( $div1, $div2 ) {
	// Div 1 data
	var d1_offset             = $div1.offset();
	var d1_height             = $div1.outerHeight( true );
	var d1_width              = $div1.outerWidth( true );
	var d1_distance_from_top  = d1_offset.top + d1_height;
	var d1_distance_from_left = d1_offset.left + d1_width;

	// Div 2 data
	var d2_offset             = $div2.offset();
	var d2_height             = $div2.outerHeight( true );
	var d2_width              = $div2.outerWidth( true );
	var d2_distance_from_top  = d2_offset.top + d2_height;
	var d2_distance_from_left = d2_offset.left + d2_width;

	var not_colliding = ( d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left );

	// Return whether it IS colliding
	return ! not_colliding;
}
```
