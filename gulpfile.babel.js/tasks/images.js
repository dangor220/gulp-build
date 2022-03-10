import imagemin from "gulp-imagemin";
import webp from "gulp-webp";

export const images = () => {
	return app.gulp.src(app.path.src.images)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
					title: "Images",
					message: "Error: <%= error.message %>",
			}))
		)
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(webp())
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.gulp.src(app.path.src.images))
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(app.plugins.gulpIf(app.plugins.isProd, imagemin({
      verbose: true,
    })))
		.pipe(app.gulp.dest(app.path.build.images));
};
