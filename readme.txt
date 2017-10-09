SB Writeup -

This was fun! I chose to go with the front end as it was a type of challenge I've
never worked with before, and thinking about browser performance has never been
high on my radar.

I wanted to learn a little about promises, and the styling looked like it had
a few fun little challenges too.

Some assumptions -

I used ES6, assuming that was acceptable given that an arrow function was defined
already. Naturally, to actually use this in production, we would need to transpile
the JS in order to support older browsers.

I considered this type of tooling to be outside of the scope of the project, which
also meant I didn't set up any CSS processors either, so raw CSS rather than
SCSS. Presumably I also reinvented the wheel on some styles, and in a production
codebase would hopefully be making use of existing classes and modifying them. I
attempted to use BEM but its such a small project that doesn't really come across.
Regardless, naming is hard.

I also obviously didn't write any tests. Setting up a whole test framework I think
would be a bit outside of the scope here.

Further, in a production environment, I would hope to be able to export the
ImageDownloader as a module rather than linking it first in HTML.

Lastly, things start to break pretty quickly on different size screens. I hope
that's acceptable, as I would really have to make some guesses as to what the
mockup should look like on mobile.

=============================================================================
HI!

Welcome to the async fiesta!

We have a bunch of images that, for the sake of this exercise, can not all
be loaded at once. Let's load them in batches of 5! Once loaded we'll build a
beautiful mockup.

Goals:

  1. Batch load images in chunks of 5.
  2. Once a batch has loaded, draw the batch on the page via the `draw` method.
  3. Log success when all batches have finished loading.
  4. Support the ability to cancel the operation.
  5. Build and style mockup.png.

Notes:

  - All image ids are available in the array- IMAGE_IDS.
  - Pass IMAGE_IDS to `getImageUrl` to receive (you guessed it) an image url!
  - Image syntax is a bit old-school so here's a tip:

        const img = new Image();
        img.src = 'https://cool.image/url.jpg'
        img.onload = function() {}
        img.onerror = function() {}

  - In the mockup, all text accompanying listing images is simply placeholder.
  - Try your best to mimic mockup.png. It does not need to be pixel perfect.
