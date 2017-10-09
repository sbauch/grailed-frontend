class ImageDownloader {

  constructor(chunkSize, getImageUrl) {
    this.CHUNK_SIZE = chunkSize;
    this.getImageUrl = getImageUrl;
    this.imageRequests = [];
  }

  cancelDownloads() {
    this.imageRequests.forEach((request) => request.abort());
  }

  downloadChunk(arr, callback) {
    return new Promise((resolve, reject) => {
      let images = [];
      for (var id of arr) {
        this.downloadImage(id, (image) => {
          images.push(image);
          if (images.length == this.CHUNK_SIZE) {
            resolve(images);
          }
        });
      }
    });
  }

  downloadImage(id, callback) {
    const img = new Image();
    const url = this.getImageUrl(id);
    const request = $.ajax({
      url: url,
      success: () => {
        img.src = url;
        callback(img);
      },
    });

    this.imageRequests.push(request); // so we can abort
    return request;
  }
}
