module.exports = function (grunt) {
	grunt.initConfig({
		exec: {
			start: 'node ./bin/www',
			test: 'node "node_modules/istanbul/lib/cli.js" cover "node_modules/nodeunit/bin/nodeunit" -- test'
		},
		nodeunit: {
			all: ['test/**/test.js']
		},
		jshint: {
			all: ['routes/**/*.js', 'public/javascripts/**/*.js'],
			routes: ['routes/**/*.js'],
			'public': ['public/javascripts/**/*.js']
		},
		watch: {
			routes: {
				files: ['routes/**/*.js'],
				tasks: ['jshint:routes'],
				option: {
					livereload: true
				}
			}
		},
		connect: {
			server: {
				option: {
					hostname: '*',
					livereload: true,
					open: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('start', ['exec:start']);

	grunt.registerTask('default', ['start']);
	grunt.registerTask('cover', ['connect:server', 'start'])
};
