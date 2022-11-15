import imagemin from "imagemin";
import imageminJpegtran from 'imagemin-jpegtran'
import imageminPngquant from 'imagemin-pngquant';
import imageminGifsicle from "imagemin-gifsicle";

// Comprime las imagenes de lib/assets a build
const files = await imagemin(['build/_app/immutable/assets/*.{jpg,png,gif}'], {
	destination: 'build/_app/immutable/assets',
	plugins: [
		imageminJpegtran({ quality: [0.6, 0.8] }),
		imageminPngquant({
			quality: [0.6, 0.8]
		}),
		imageminGifsicle()
	]
});

console.log(files)