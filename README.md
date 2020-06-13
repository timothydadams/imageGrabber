# imageGrabber
node script that utilizes picsum api and image-downloader npm module to save a specified number of images for use as placeholders during MVP development.  Image size and format are currently modified directly within the url.  Anytime you need a placeholder img (or 500), just specify the destination and run this script in node.

https://picsum.photos provides many ways to customize the size/format of image you get

Each image will be unique, tested up to 500.

## Prerequisites

Visit [picsum.photos](https://picsum.photos) to explore endpoint options and modify url as needed

Images are saved by ascending numbers -- ie '1.jpg','2.jpg' in the destination folder

Don't forget to make/update storage directory as needed!


## Getting Started

Run via terminal and simply replace 5 with the actual number of images you want

I've only tested this up to 500, but each one was unique.

## How to access

1. clone this repo
2. cd into repo
3. from directory root location
```sh
npm install
mkdir photos
node -e 'require("./imageGrabber").init(5)'
```

May you never be without placeholder images again!
