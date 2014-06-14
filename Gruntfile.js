/**
 * Created by kilianschefer on 21.05.14.
 */
var path = require('path');
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            livereload: {
                options: {
                    port: 9000,
                    bases: path.resolve('public'),
                    monitor: {},
                    debug: true,
                    server: path.resolve('./app/server')
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib: {
                src: ['public/**/*.js']
            }
        },
        less: {
            development: {
                options: {
                    paths: ["assets/less"]
                },
                files: {
                    "public/css/main.css": "app/less/main.less"
                }
            }
        },
        regarde: {
            pub: {
                files: 'public/**/*',
                tasks: ['livereload']
            },
            trigger: {
                files: '.server',
                tasks: 'express-restart:livereload'
            }
        }
    });

    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-contrib-jshint')
    grunt.loadNpmTasks('grunt-contrib-less');;
    grunt.loadNpmTasks('grunt-regarde');

    grunt.registerTask('format', ['jshint']);
    grunt.registerTask('server', ['livereload-start', 'express', 'regarde']);
    grunt.registerTask('default',  ['server']);
};