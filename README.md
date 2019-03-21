Compress images by imagemin

**compress jpg png by imagemin**
**convert jpg png to webp**

- script
  `node compress.js`

- webpack
	`yarn compress`



**Options**
`quality: 70`

| file name     | size          | compressibility |
| :------------ | :------------ | :-------------- |
| test_jpg.jpg  | 200,128 bytes |                 |
| test_jpg.jpg  | 41,734 bytes  | 79%             |
| test_jpg.webp | 30,978 bytes  | 85%             |
|               |               |                 |
| test_png.png  | 107,316 bytes |                 |
| test_png.png  | 90,093 bytes  | 16%             |
| test_png.webp | 36,130 bytes  | 66%             |

