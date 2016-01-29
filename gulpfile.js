
var elixir = require('laravel-elixir');
elixir.config.assetsPath = 'assets';

elixir(function(mix) {
    mix.sass('app.scss');
    mix.browserSync({
        files: ['*.html'],
        server: {
            baseDir: "./public/"
        },
        proxy: null
    });
});
