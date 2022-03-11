import gulp from "gulp";

// Import plagins

import { path } from "./config/path.js";
import { plugins } from "./config/plugins.js";

global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins,
};

// Import tasks

import { clear } from "./tasks/clear.js";
import { html } from "./tasks/html.js";
import { server } from "./tasks/server.js";
import { scss } from "./tasks/scss.js";
import { js } from "./tasks/js.js";
import { jsLibs } from "./tasks/js-libs.js";
import { images } from "./tasks/images.js";
import { font } from "./tasks/font.js";

// Watcher files

function watcher() {
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.jsLibs, jsLibs);
	gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.fonts, font);
}


const mainTasks = gulp.parallel(html, scss, js, jsLibs, images, font);


const build = gulp.series(clear, mainTasks);
const dev = gulp.series(build, gulp.parallel(watcher, server));


export default app.plugins.isProd ? build : dev;