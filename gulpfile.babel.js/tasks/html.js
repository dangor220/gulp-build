import fileInclude from "gulp-file-include"; // use @@include
import htmlMin from "gulp-htmlmin";
import webpHtml from "gulp-webp-html"; // add webp in gtml

export const html = () => {
	return app.gulp
		.src(app.path.src.html)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "HTML",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(fileInclude())
		.pipe(app.plugins.replace(/@img\//g, 'assets/img/'))
		.pipe(webpHtml())
		// .pipe(app.plugins.size({ title: "До сжатия: " }))
		.pipe(htmlMin(
      {
      collapseWhitespace: app.plugins.isProd,
      }
    ))
    // .pipe(app.plugins.size({ title: "После сжатия: " }))
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream());
};