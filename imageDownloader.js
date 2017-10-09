class ImageDownloader {

  constructor() {
    this.imageRequests = [];
  }

  cancelDownloads() {
    this.imageRequests.forEach((request) => request.abort())
  }

  downloadChunk(arr, callback) {
    let images = [];
    for (var id of arr) {
        this.downloadImage(id, (image) => {
          images.push(image)
          callback(images)
      })
    }
  }

  downloadImage(id, callback) {
    const img = new Image();
    img.onload = () => this.imageDrawn(id);

    const url = this.getImageUrl(id);
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          img.src = url;
          console.log("download complete");
          callback(img)
        }
      }
    };

    request.onerror = (e) => {
      console.error(request.statusText);
    };

    this.imageRequests.push(request) // so we can abort

    request.send();
  }

  imageDrawn() {

  }

}
