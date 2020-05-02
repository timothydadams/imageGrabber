const download = require('image-downloader');
const path = require('path');

// Explore https://picsum.photos for ways to manipulate the url to get the type of image you require

// Modify the url on line 11 based off your photo needs
// Change the destination value to where you want these to be saved

var getPhoto = (filename) => {
  const options = {
    url: 'https://picsum.photos/800.jpg',
    dest: path.resolve(__dirname, 'photos', `${filename}.jpg`)
  };

  download.image(options)
    .then(({ filename, image}) => {
      console.log('Saved img', filename);
    })
    .catch(err => console.log(err));
};

var batchImages = (q) => {
  for (var i = 1; i <= q; i++) {
    getPhoto(i);
  }
};


//terminal execution:  node -e 'require("./imageGrabber").init(5)'
module.exports.init = batchImages;