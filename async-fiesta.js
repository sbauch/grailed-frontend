
$(() => {

  const downloader = new ImageDownloader();

  const $bucket = $('.photo-bucket');
  const draw = img => {
      console.log("draw");
      $bucket.append(`<img src="${img.src}" />`);
  }

  const CHUNK_SIZE = 5;

  // NOTE: The height and width variables can be changed to fetch different sized images.
  const getImageUrl = id => `https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/rotate=deg:0/resize=width:30,height:30,fit:crop/output=format:jpg,quality:95/compress/${id}`;

  const drawChunk = (imgArray) => imgArray.forEach((img => draw(img)))


  const startLoading = () => {
    console.log('Start!');

    downloader.getImageUrl = getImageUrl;

    while (IMAGE_IDS.length) {
      console.log("iterate")
      const chunk = IMAGE_IDS.splice(0, CHUNK_SIZE);
      downloader.downloadChunk(chunk, (downloadedChunk) => {
        console.log("callback")
        if (downloadedChunk.length == CHUNK_SIZE) {
          drawChunk(downloadedChunk);
        }
      });
    }
  };

  const stopLoading = () => {
    console.log('Stop!');
    downloader.cancelDownloads();
  };

  $('button.start').on('click', startLoading);
  $('button.stop').on('click', stopLoading);

});
