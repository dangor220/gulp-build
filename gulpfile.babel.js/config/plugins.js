import replace from "gulp-replace"; // Search and replace
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";
import newer from "gulp-newer";
import size from "gulp-size";
import rename from "gulp-rename";
import gulpIf from "gulp-if";
import uglify from "gulp-uglify";
// import concat from "gulp-concat";

const isProd = process.argv.includes("--prodaction");
const isDev = !isProd;

export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer,
  size: size,
	rename: rename,
	gulpIf: gulpIf,
	isProd: isProd,
	isDev: isDev,
	uglify: uglify,
	// concat: concat,
};
