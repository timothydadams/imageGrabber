# imageGrabber
node script that utilizes picsum api and image-downloader npm module to save a specified number of images for use as placeholders during MVP development.  Image size and format are currently modified directly within the url.  Anytime you need a placeholder img (or 500), just specify the destination and run this script in node.

https://picsum.photos provides many ways to customize the size/format of image you get

Each image will be unique, tested up to 500.

Images are currently saved with a number as a filename -- ie '1.jpg','2.jpg' in the destination folder you specifiy (currently set to the 'photos' directory of this repo).

Run via console (and replace 5 with the actual number of images you want):
(I've only tested this up to 500, but each one was unique)

From the root of this directory:
```sh
npm install
mkdir photos
node -e 'require("./imageGrabber").init(5)'
```