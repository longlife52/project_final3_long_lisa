# Project, Final 3, Lisa Long

## Links
[Lisa's Project on Github.](https://github.com/longlife52/project_final3_long_lisa)

[Here's the link to my Resume on my web host.]()

[Here's the project on W3C's Validator.]()

[Here's the project on the HTML5 Outliner.]()

## Resources
To create the map, I attempted to follow [this Google Maps APIs tutorial.](https://developers.google.com/maps/documentation/javascript/adding-a-google-map) After several glitches, I then opted for an iframe version.

I used a jQuery plugin [called mmenu](http://mmenu.frebsite.nl/documentation/core/) to create the hamburger menu. This plug in functions on all pages and is in the top left header bar. While the animation CSS does not function, here is the [info for animating hamburger icon in mmenu](http://mmenu.frebsite.nl/tutorials/animated-hamburger.html).  As well, I chose to keep the[Animated hamburger options](https://github.com/jonsuh/hamburgers) in my code. It does generate the X for open/close. I plan to tinker with it a bit more after the semester ends.

This is the jQuery plugin [called Strip](http://www.stripjs.com/) for the video on the menu page. Fairly straightforward to install once I spotted in dev tools how to add the image file for the close buttons. In the error message, the path it was looking for was spelled out!  I just created the path it wanted. css>strip-skins>strip>close.svg.

Took me a while to get the jQuery plugin  [Backstretch](http://www.jquery-backstretch.com/) to work. My issue was with a background/background-color on the body. Once I removed it in CSS, I was golden. The plugin is used on all pages as the background.

Hooray! I used Bower for the first time to download + install a jQuery plugin called [Lazy Load](http://www.appelsiini.net/projects/lazyload) which was super easy to get up and running. Note: On img tag must change src to data-original in html. Lazy load applies to all images in the project.

Here's a nice reminder [article on how to make images circles.](http://sixrevisions.com/css/circular-images-css/) Easiest if the image is a square to start.  If for some reason, I start with a rectangle, this article explains how to make it a circle.

This is an easy to follow resource from W3.org on [centering things.](https://www.w3.org/Style/Examples/007/center.en.html)

Here's a wonderful [ghost-button tutorial](http://sixrevisions.com/css/ghost-buttons/) like the one on the menu.html page.

The custom JavaScript code appears on the menu.html page near the bottom in the red box. On page load, an ad box appears that reads "Mother's Day! Reserve Your Table." The user may click the "x" to remove the box. While I am not a huge fan of ad boxes, I did want to explore how they worked. I referred to [this tutorial](https://www.w3schools.com/howto/howto_css_modals.asp). As well, I also followed a tutorial in a book called Javascript by Tom Negrino and Dori Smith.

The custom jQuery code appears on the menu.html page. Clicking the ghost-button that reads "Get Yours Now" creates a slideDown effect that reveals an image designed as a appetizer coupon. For the custom jQuery code, I initially [referred to this article](https://www.w3schools.com/jquery/jquery_dom_add.asp) on using after() and spent a lot of time tinkering with how it might work. I then decided on using [hide/show](https://www.w3schools.com/jquery/jquery_hide_show.asp) and [slideDown](https://www.w3schools.com/jquery/jquery_slide.asp). As well, for a quick refresher, I reviewed [this article](https://www.w3schools.com/jquery/jquery_events.asp) on jQuery events. Also, I researched ideas in the book JavaScript: A Beginner's Guide by John Pollock.

After several attempts (as well as hours) at CSS hover effects that were a nightmare for me to figure out with floats and responsive design, I opted to code a jQuery mouseover + mouseout effect using an image. Whew! Super easy - especially compared to trying to figure out the CSS hover effect for the other variations. This jQuery "hover effect" appears on the index.html page on the 2 images just above "Read Our Reviews." I referred to lecture notes as well as [this Stack Overflow](http://stackoverflow.com/questions/10709016/change-image-onmouseover) thread on the topic.

Here is [a tutorial on setting value of a form element in JavaScript](http://www.javascript-coder.com/javascript-form/javascript-form-value.phtml).


## Deductions
I have reviewed the list of deductions for this project and in the syllabus.

## Comments
