import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

// Обработка Font
export const font = () => {
	return app.gulp
		.src(app.path.src.fonts)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "Fonts",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(app.plugins.newer(app.path.build.fonts))
		.pipe(
			fonter({
				formats: ["ttf", "woff", "eot", "svg"],
			})
		)
		.pipe(app.gulp.dest(app.path.build.fonts))
		.pipe(ttf2woff2())
		.pipe(app.gulp.dest(app.path.build.fonts));
};
