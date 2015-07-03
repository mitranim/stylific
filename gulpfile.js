'use strict';

/**
 * Requires gulp 4.0:
 *   "gulp": "git://github.com/gulpjs/gulp#4.0"
 */

/******************************* Dependencies ********************************/

var $      = require('gulp-load-plugins')();
var bsync  = require('browser-sync').create();
var gulp   = require('gulp');
var hjs    = require('highlight.js');
var marked = require('gulp-marked/node_modules/marked');
var flags  = require('yargs').argv;
var pt     = require('path');

/********************************** Globals **********************************/

var src = {
  lib:        'scss/**/*.scss',
  libCore:    'scss/stylific.scss',
  stylesCore: 'src-docs/styles/docs.scss',
  styles:     'src-docs/styles/**/*.scss',
  html: [
    'src-docs/html/**/*',
    'bower_components/font-awesome-svg-png/black/**/*.svg'
  ],
  images: 'src-docs/images/**/*',
  scripts: 'lib/**/*.js'
};

var destBase = 'stylific-gh-pages';

var dest = {
  lib:     'lib',
  styles:  destBase + '/styles',
  scripts: destBase + '/scripts',
  images:  destBase + '/images',
  html:    destBase
};

function prod() {
  return flags.prod === true || flags.prod === 'true';
}

function reload(done) {
  bsync.reload();
  done();
}

/***************************** Template Imports ******************************/

/**
 * Utility methods for templates.
 */
var imports = {
  lastId: 0,
  uniqId: function() {return 'uniq-id-' + ++imports.lastId},
  lastUniqId: function() {return 'uniq-id-' + imports.lastId}
};

/********************************** Config ***********************************/

/**
 * Change how marked compiles headers to add links to our source files.
 */

var regComponent = /^sf-[a-z-]+$/;
var repoComponentDir = 'https://github.com/Mitranim/stylific/blob/master/scss/components/';

// Default heading renderer func.
var headingDef = marked.Renderer.prototype.heading;

// Custom heading renderer func that adds a link to the component source.
marked.Renderer.prototype.heading = function(text, level) {
  if (regComponent.test(text)) {
    return '<h' + level + ' id="' + text + '"><a href="' + repoComponentDir + text + '.scss" target="_blank">' + text + '</a></h' + level + '>';
  }
  return headingDef.apply(this, arguments);
};

/**
 * Change how marked compiles links to add target="_blank" to links to other sites.
 */

// Default link renderer func.
var linkDef = marked.Renderer.prototype.link;

// Custom link renderer func that adds target="_blank" to links to other sites.
// Mostly copied from the marked source.
marked.Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  if (/^[a-z]+:\/\//.test(href)) {
    out += ' target="_blank"';
  }
  out += '>' + text + '</a>';
  return out;
};

/*********************************** Tasks ***********************************/

/*----------------------------------- Lib -----------------------------------*/

gulp.task('lib:clear', function() {
  return gulp.src(dest.lib + '/*.css', {read: false, allowEmpty: true})
    .pipe($.plumber())
    .pipe($.rimraf());
});

gulp.task('lib:compile', function() {
  return gulp.src(src.libCore)
    .pipe($.plumber())
    .pipe($.sass())
    .pipe($.autoprefixer())
    .pipe($.if(prod(), $.minifyCss({
      keepSpecialComments: 0,
      aggressiveMerging: false,
      advanced: false
    })))
    .pipe(gulp.dest(dest.lib));
});

gulp.task('lib:build', gulp.series('lib:clear', 'lib:compile'));

gulp.task('lib:watch', function() {
  $.watch(src.lib, gulp.series('lib:build'));
});

/*---------------------------------- HTML -----------------------------------*/

gulp.task('docs:html:clear', function() {
  return gulp.src(dest.html + '/**/*.html', {read: false, allowEmpty: true})
    .pipe($.plumber())
    .pipe($.rimraf());
});

gulp.task('docs:html:compile', function() {
  var filterMd = $.filter('**/*.md')

  return gulp.src(src.html)
    .pipe($.plumber())
    // Pre-process the markdown files.
    .pipe(filterMd)
    .pipe($.marked({
      gfm:         true,
      tables:      true,
      breaks:      false,
      sanitize:    false,
      smartypants: false,
      pedantic:    false,
      // Code highlighter.
      highlight: function(code, lang) {
        var result = lang ? hjs.highlight(lang, code) : hjs.highlightAuto(code);
        return result.value;
      }
    }))
    // Add the hljs code class.
    .pipe($.replace(/<pre><code class="(.*)">|<pre><code>/g,
                    '<pre><code class="hljs $1">'))
    // Return the other files.
    .pipe(filterMd.restore())
    // Unpack commented HTML parts.
    .pipe($.replace(/<!--\s*:((?:[^:]|:(?!\s*-->))*):\s*-->/g, '$1'))
    // Render all html.
    .pipe($.statil({imports: imports}))
    // Change each `<filename>` into `<filename>/index.html`.
    .pipe($.rename(function(path) {
      switch (path.basename + path.extname) {
        case 'index.html': case '404.html': return;
      }
      path.dirname = pt.join(path.dirname, path.basename);
      path.basename = 'index';
    }))
    // Write to disk.
    .pipe(gulp.dest(dest.html));
});

gulp.task('docs:html:build', gulp.series('docs:html:clear', 'docs:html:compile'));

gulp.task('docs:html:watch', function() {
  $.watch(src.html, gulp.series('docs:html:build', reload));
});

/*--------------------------------- Styles ----------------------------------*/

gulp.task('docs:styles:clear', function() {
  return gulp.src(dest.styles, {read: false, allowEmpty: true})
    .pipe($.plumber())
    .pipe($.rimraf());
});

gulp.task('docs:styles:compile', function() {
  return gulp.src(src.stylesCore)
    .pipe($.plumber())
    .pipe($.sass())
    .pipe($.autoprefixer())
    .pipe($.base64({
      baseDir: '.',
      extensions: ['svg']
    }))
    .pipe($.if(prod(), $.minifyCss({
      keepSpecialComments: 0,
      aggressiveMerging: false,
      advanced: false
    })))
    .pipe(gulp.dest(dest.styles))
    .pipe(bsync.reload({stream: true}));
});

gulp.task('docs:styles:build', gulp.series('docs:styles:clear', 'docs:styles:compile'));

gulp.task('docs:styles:watch', function() {
  $.watch(src.styles, gulp.series('docs:styles:build'));
  $.watch(src.lib, gulp.series('docs:styles:build'));
});

/*--------------------------------- Images ----------------------------------*/

gulp.task('docs:images:clear', function() {
  return gulp.src(dest.images, {read: false, allowEmpty: true}).pipe($.rimraf());
});

// Resize and copy images
gulp.task('images:normal', function() {
  return gulp.src(src.images)
    /**
    * Experience so far.
    * {quality: 1} -> reduces size by ≈66% with no resolution change and no visible quality change
    * {quality: 1, width: 1920} -> reduces size by ≈10 times for hi-res images
    */
    .pipe($.imageResize({
      quality: 1,
      width: 1920,    // max width
      upscale: false
    }))
    .pipe(gulp.dest(dest.images));
});

// Minify and copy images.
gulp.task('images:small', function() {
  return gulp.src(src.images)
    .pipe($.imageResize({
      quality: 1,
      width: 640,    // max width
      upscale: false
    }))
    .pipe(gulp.dest(dest.images + '/small'));
});

// Crop images to small squares
gulp.task('images:square', function() {
  return gulp.src(src.images)
    .pipe($.imageResize({
      quality: 1,
      gravity: 'Center',  // crop relative to center
      crop: true,
      width: 640,
      height: 640,
      upscale: false
    }))
    .pipe(gulp.dest(dest.images + '/square'));
});

gulp.task('docs:images:build',
  gulp.series('docs:images:clear',
              gulp.parallel('images:normal', 'images:small', 'images:square')));

gulp.task('docs:images:watch', function() {
  $.watch(src.images, gulp.series('docs:images:build', reload));
});

/*--------------------------------- Scripts ---------------------------------*/

gulp.task('docs:scripts:clear', function() {
  return gulp.src(dest.scripts, {read: false, allowEmpty: true})
    .pipe($.plumber())
    .pipe($.rimraf());
});

gulp.task('docs:scripts:copy', function() {
  return gulp.src(src.scripts).pipe(gulp.dest(dest.scripts));
});

gulp.task('docs:scripts:build', gulp.series('docs:scripts:clear', 'docs:scripts:copy'));

gulp.task('docs:scripts:watch', function() {
  $.watch(src.scripts, gulp.series('docs:scripts:build', reload));
});

/*--------------------------------- Server ----------------------------------*/

gulp.task('server', function() {
  return bsync.init({
    startPath: '/stylific/',
    server: {
      baseDir: dest.html,
      middleware: function(req, res, next) {
        req.url = req.url.replace(/^\/stylific/, '/');
        next();
      }
    },
    port: 13933,
    online: false,
    ui: false,
    files: false,
    ghostMode: false,
    notify: true
  });
});

/*--------------------------------- Default ---------------------------------*/

gulp.task('build', gulp.parallel(
  'lib:build', 'docs:html:build', 'docs:styles:build', 'docs:images:build', 'docs:scripts:build'
));

gulp.task('watch', gulp.parallel(
  'lib:watch', 'docs:html:watch', 'docs:styles:watch', 'docs:scripts:watch'
));

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'server')));
