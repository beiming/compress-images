#!/usr/bin/env node

const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');


const PNGImages = './src/images/*.png';
const JPEGImages = './src/images/*.jpg';
const output = './dist/images/by_script';


const optimiseJPEGImages = () =>
    imagemin([JPEGImages], output, {
        plugins: [
            imageminMozjpeg({
                quality: 70,
                progressive: true
            }),
        ]
    });


const optimisePNGImages = () =>
    imagemin([PNGImages], output, {
        plugins: [
            imageminPngquant({quality: [0.7, 0.75]})
        ],
    });


const convertPNGToWebp = () =>
    imagemin([PNGImages], output, {
        use: [
            imageminWebp({
                quality: 70,
            }),
        ]
    });

const convertJPGToWebp = () =>
    imagemin([JPEGImages], output, {
        use: [
            imageminWebp({
                quality: 70,
            }),
        ]
    });


optimiseJPEGImages()
    .then(() => convertJPGToWebp())
    .then(() => console.log("compress jpg down!"))
    .catch(error => console.log(error));

optimisePNGImages()
    .then(() => convertPNGToWebp())
    .then(() => console.log("compress png down!"))
    .catch(error => console.log(error));
