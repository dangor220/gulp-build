import babel from "gulp-babel"; // Use ES6 with support old browsers
import webpack from "webpack-stream"; // Use modules

// Обработка JavaScript
export const js = () => {
	return app.gulp.src(app.path.src.js, { sourcemaps: app.plugins.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JavaScript",
          message: "Error: <%= error.message %>",
        })
      )
    )
		.pipe(babel())
		.pipe(webpack(
      {
      mode: app.plugins.isProd ? "production" : "development",
      }
      ))
    .pipe(app.plugins.gulpIf(app.plugins.isProd, app.plugins.rename({ suffix: ".min" })))
		.pipe(app.gulp.dest(app.path.build.js, { sourcemaps: app.plugins.isDev }))
    .pipe(app.plugins.browsersync.stream());
};
