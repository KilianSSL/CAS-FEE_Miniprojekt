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
    grunt.loadNpmTasks('grunt-regarde');

    grunt.registerTask('server', ['livereload-start', 'express', 'regarde']);
    grunt.registerTask('default',  ['server']);
};