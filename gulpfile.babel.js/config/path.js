// Path to root folder project
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Path to results files
const srcFolder = `./src`; // Path to source files

export const path = {
	build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/assets/img/`,
    fonts: `${srcFolder}/assets/font/`,
		jsLibs: `${buildFolder}/js/libs/`,
	},
	src: {
    html: `${srcFolder}/html/*.html`,
    scss: `${srcFolder}/scss/style.{scss,sass}`,
		js: `${srcFolder}/js/*.js`,
		images: `${srcFolder}/assets/img/**/*.{png,jpg,jpeg,gif,webp, svg}`,
    fonts: `${srcFolder}/assets/font/*.{eot,ttf,otf,otc,tts,woff,woff2,svg}`,
		jsLibs: `${srcFolder}/js/libs/**/*.js`,
	},
	watch: {
		images: `${srcFolder}/assets/img/**/*.{png,jpg,jpeg,gif,svg,ico,webp, svg}`,
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.{scss,sass}`,
		html: `${srcFolder}/html/**/*.html`,
		files: `${srcFolder}/files/**/*.*`,
    fonts: `${srcFolder}/assets/font/**/*.{eot,ttf,otf,otc,tts,woff,woff2,svg}`,
		jsLibs: `${srcFolder}/js/libs/**/*.js`,
	},
	clear: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
};