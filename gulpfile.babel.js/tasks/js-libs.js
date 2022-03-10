import babel from "gulp-babel"; // Use ES6 with support old browsers

// Обработка JavaScript библиотек
export const jsLibs = () => {
	return app.gulp.src(app.path.src.jsLibs, { sourcemaps: app.plugins.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS Libs",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(babel())
    .pipe(app.plugins.uglify())
    // .pipe(app.plugins.concat('libs.js'))
    // .pipe(app.plugins.rename({ suffix: ".min" }))
    .pipe(app.gulp.dest(app.path.build.jsLibs, { sourcemaps: app.plugins.isDev }))
};
