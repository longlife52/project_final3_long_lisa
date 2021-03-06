# Project - Final 3 - Lisa Long

## Links
[Lisa's Project on Github.](https://github.com/longlife52/project_final3_long_lisa)

[Here's the link to my Final 3 on my web host.](http://garrisonridge.com/garrisonridge/project_final3_long_lisa/index.html)

[Here's the index.html on W3C's Validator.](https://validator.w3.org/nu/?doc=http%3A%2F%2Fgarrisonridge.com%2Fgarrisonridge%2Fproject_final3_long_lisa%2Findex.html) Please know that the errors thrown have to do with the jQuery plugin: src is replaced with data-original. Also, the iframe issue comes from google maps.

[Here's menu.html on W3C's Validator.](https://validator.w3.org/nu/?doc=http%3A%2F%2Fgarrisonridge.com%2Fgarrisonridge%2Fproject_final3_long_lisa%2Fmenu.html) The errors are the same and for the same reasons as on index.html.

[Here's order.html on W3C's Validator](https://validator.w3.org/nu/?doc=http%3A%2F%2Fgarrisonridge.com%2Fgarrisonridge%2Fproject_final3_long_lisa%2Forder.html) The iframe error is the same as above. As for the label error, I adjusted it and there was no change. As well, it matches the others in the code - so I am an unclear as to why it is throwing an error. Any tips that you might have would be appreciated. Thanks!

[Here's the index.html page on the HTML5 Outliner.](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Fgarrisonridge.com%2Fgarrisonridge%2Fproject_final3_long_lisa%2Findex.html)

[Here's the menu.html page on the HTML5 Outliner.](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Fgarrisonridge.com%2Fgarrisonridge%2Fproject_final3_long_lisa%2Fmenu.html)

[Here's the order.html page on the HTML5 Outliner.](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Fgarrisonridge.com%2Fgarrisonridge%2Fproject_final3_long_lisa%2Forder.html)

## Resources
To create the map, I attempted to follow [this Google Maps APIs tutorial.](https://developers.google.com/maps/documentation/javascript/adding-a-google-map) After several glitches, I then opted for an iframe version. The map appears in the fat footer.

I used a jQuery plugin [called mmenu](http://mmenu.frebsite.nl/documentation/core/) to create the hamburger menu. This plug in functions on all pages and is in the top left header bar. While the animation CSS does not function, here is the [info for animating hamburger icon in mmenu](http://mmenu.frebsite.nl/tutorials/animated-hamburger.html).  As well, I chose to keep the[Animated hamburger options](https://github.com/jonsuh/hamburgers) in my code. It does generate the X for open/close. I plan to tinker with it a bit more after the semester ends.

This is the jQuery plugin [called Strip](http://www.stripjs.com/) for the video on the menu page called "in the kitchen". Fairly straightforward to install once I spotted in dev tools how to add the image file for the close buttons. In the error message, the path it was looking for was spelled out!  I just created the path it wanted. css>strip-skins>strip>close.svg.

Took me a while to get the jQuery plugin  [Backstretch](http://www.jquery-backstretch.com/) to work. My issue was with a background/background-color on the body. Once I removed it in CSS, I was golden. The plugin is used on all pages as the background image of the wood.

Hooray! I used Bower for the first time to download + install a jQuery plugin called [Lazy Load](http://www.appelsiini.net/projects/lazyload) which was super easy to get up and running. Note: On img tag must change src to data-original in html. Lazy load applies to all images in the project.

Here's a nice reminder [article on how to make images circles.](http://sixrevisions.com/css/circular-images-css/) Easiest if the image is a square to start.  If for some reason, I start with a rectangle, this article explains how to make it a circle.

This is an easy to follow resource from W3.org on [centering things.](https://www.w3.org/Style/Examples/007/center.en.html)

Here's a wonderful [ghost-button tutorial](http://sixrevisions.com/css/ghost-buttons/) like the one on the menu.html page.

The custom JavaScript code appears on the menu.html page near the bottom in the red box. On page load, an ad box appears that reads "Mother's Day! Reserve Your Table." The user may click the "x" to remove the box. While I am not a huge fan of ad boxes, I did want to explore how they worked. I referred to [this tutorial](https://www.w3schools.com/howto/howto_css_modals.asp). As well, I also followed a tutorial in a book called Javascript by Tom Negrino and Dori Smith.

The custom jQuery code appears on the menu.html page. Clicking the ghost-button that reads "Get Yours Now" creates a slideDown effect that reveals an image designed as a appetizer coupon. For the custom jQuery code, I initially [referred to this article](https://www.w3schools.com/jquery/jquery_dom_add.asp) on using after() and spent a lot of time tinkering with how it might work. I then decided on using [hide/show](https://www.w3schools.com/jquery/jquery_hide_show.asp) and [slideDown](https://www.w3schools.com/jquery/jquery_slide.asp). As well, for a quick refresher, I reviewed [this article](https://www.w3schools.com/jquery/jquery_events.asp) on jQuery events. Also, I researched ideas in the book JavaScript: A Beginner's Guide by John Pollock.

After several attempts (as well as hours) at CSS hover effects that were a nightmare for me to figure out with floats and responsive design, I opted to code a jQuery mouseover + mouseout effect using an image. Whew! Super easy - especially compared to trying to figure out the CSS hover effect for the other variations. This jQuery "hover effect" appears on the index.html page on the 2 images just above "Read Our Reviews." I referred to lecture notes as well as [this Stack Overflow](http://stackoverflow.com/questions/10709016/change-image-onmouseover) thread on the topic.

Here is [a tutorial on setting value of a form element in JavaScript](http://www.javascript-coder.com/javascript-form/javascript-form-value.phtml).

Here's another [great resource](http://www.javascript-coder.com/javascript-form/javascript-calculator-script.phtml) that should help with doing real-time calculations in a form. While I did not get that far in the extra credit, I value this resource for future reference.

I looked at [this article](http://www.hongkiat.com/blog/creating-responsive-form-with-css3-html5/) about responsive forms.

## Deductions
I have reviewed the list of deductions for this project and in the syllabus.

## Comments
I must draw a line in the sand and call this project complete. While I would have liked another week to explore the form, I must prepare for Easter as well as complete my other work.

I had fun tinkering with this assignment.

As well, while often overwhelmed with the time commitment, I remain astonished at the amount I learned this semester. Thank you for taking time to answer all of my questions with detailed responses.

Enjoy your summer!
