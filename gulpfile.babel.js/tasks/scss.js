import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso"; // minification
import shorthand from "gulp-shorthand"; // use short property
import groupCssMediaQueries from "gulp-group-css-media-queries";
import sassPlugin from "gulp-sass";
import sassCompile from "sass";
import sassGlob from "gulp-sass-glob";
import webpCSS from "gulp-webp-css"; // add webp in gtml

const sass = sassPlugin(sassCompile);

// Обработка SCSS
export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: app.plugins.isDev})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(webpCSS())
		.pipe(autoprefixer())
		.pipe(shorthand())
		.pipe(groupCssMediaQueries())
		.pipe(app.plugins.size({ title: "main.css" }))
		.pipe(app.gulp.dest(app.path.build.css, { sourcemaps: app.plugins.isDev }))
		.pipe(app.plugins.rename({ suffix: ".min" }))
		.pipe(csso())
		.pipe(app.plugins.size({ title: "main.min.css" }))
		.pipe(app.gulp.dest(app.path.build.css, { sourcemaps: app.plugins.isDev }))
		.pipe(app.plugins.browsersync.stream());
};

