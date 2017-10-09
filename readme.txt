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


