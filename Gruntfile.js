module.exports = function(grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jekyll: {
            working: {
              options: {
                config: '_config.yml',
                drafts: true
              }
            },

            deploy: {
              options: {
                config: '_config.yml',
                drafts: false
              }
            }
        },

        express: {
            all: {
                options: {
                    port: 4000,
                    hostname: '0.0.0.0',
                    bases: ['_site'],
                    livereload: true
                }
            }
        },

        postcss: {
          options: {
            processors: [
              require('autoprefixer')({browsers: ['last 2 versions', '> 5%']})
            ]
          },

          dist: {
            src: '_site/css/styles.css',
            dest: '_site/css/styles.css'
          }
        },

        watch: {
            css: {
                files: [
                    '_sass/*.scss',
                    '_sass/**/*.scss',
                    'css/*.scss'
                ],
                tasks: ['jekyll', 'uglify', 'postcss']
            },

            js: {
                files: [
                    '_js/*.js'
                ],
                tasks: ['jekyll', 'uglify', 'postcss']
            },

            jekyll: {
                files: [
                    '**/*.html',
                    '**/*.md',
                    '_posts/*.md',
                    '_config.yml',
                    '*.html',
                    '*.md',
                    '!_site/**/*'
                ],
                tasks: ['jekyll', 'uglify', 'postcss']
            },

            options: {
                livereload: true
            }
        },

        uglify: {
            main: {
                files: {
                    '_site/main.js': '_js/*.js'
                }
            }
        },

        buildcontrol: {
            options: {
                dir: '_site',
                commit: true,
                push: true,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
            },
            pages: {
                options: {
                    remote: 'https://github.com/JasonEtco/type-texts.git',
                    branch: 'gh-pages'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-build-control');


    grunt.registerTask('default', ['jekyll:working', 'uglify', 'postcss', 'express', 'watch']);
    grunt.registerTask('deploy',  ['jekyll:deploy', 'uglify', 'postcss', 'buildcontrol:pages']);

    grunt.task.registerTask('post', 'Create new jekyll posts from templates.', function() {
      var name = grunt.option('name'),
          category = grunt.option('cat'),
          date = new Date(),
          today = grunt.template.date(date, 'yyyy-mm-dd'),
          template,
          formatedName,
          data,
          content;

      if (name) {
        formatedName = name.replace(/[^a-z0-9]|\s+|\r?\n|\r/gmi, '-').toLowerCase();
        category = category ? category : 'blog';
        data = {
          name: name,
        };
        template = grunt.file.read('_post-template-' + category + '.md');
        content = grunt.template.process(template, {
          data: data
        });
        grunt.file.write('_posts/' + today + '-' + formatedName + '.md', content);
      }
      else {
        grunt.fail.warn('Name Required: `grunt post --name "My Post Name"`');
      }
    });
};