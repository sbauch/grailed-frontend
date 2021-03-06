
$(() => {
  const CHUNK_SIZE = 5;

  const $bucket = $('.photo-bucket');
  const draw = img => $bucket.append(`
    <div>
      <img src="${img.src}" />
      <p class="relative-time">1 minute ago</p>
      <div class="brand-and-size">
        <p class="brand">Fear of Jerry</p>
        <p class="size">M</p>
      </div>
      <p class="item-name">Oversize Striped Tee</p>
      <p class="price">$240</p>
    </div>
  `);

  // NOTE: The height and width variables can be changed to fetch different sized images.
  const getImageUrl = id => `https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/rotate=deg:0/resize=width:400,height:600,fit:crop/output=format:jpg,quality:95/compress/${id}`;
  const drawChunk = (imgArray) => imgArray.forEach(img => draw(img));

  const downloader = new ImageDownloader(CHUNK_SIZE, getImageUrl);

  const startLoading = () => {
    let serialPromises = [];

    while (IMAGE_IDS.length) {
      const chunk = IMAGE_IDS.splice(0, CHUNK_SIZE);
      serialPromises.push(downloader.downloadChunk(chunk));
    }

    return serialPromises.reduce((promiseChain, currentTask) => {
      return promiseChain.then(chainResults =>
          currentTask.then(imageChunk => {
            drawChunk(imageChunk);
            return [ ...chainResults, imageChunk ]
          })
      );
    }, Promise.resolve([])).then(imageChunks => {
        console.log(`Successfully loaded ${imageChunks.length * CHUNK_SIZE} images`);
    });
  };

  const stopLoading = () => {
    console.log('Stop!');
    downloader.cancelDownloads();
  };

  $('button.start').on('click', startLoading);
  $('button.stop').on('click', stopLoading);

});
