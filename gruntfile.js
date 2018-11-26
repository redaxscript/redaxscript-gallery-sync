module.exports = grunt =>
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		ftpress: require('./tasks/ftpress')(grunt),
		imagemin: require('./tasks/imagemin')(grunt),
		pageres: require('./tasks/pageres')(grunt),
		shell: require('./tasks/shell')(grunt)
	});

	/* load tasks */

	require('load-grunt-tasks')(grunt);

	/* register tasks */

	grunt.registerTask('default',
	[
		'build',
		'optimize'
	]);
	grunt.registerTask('build',
	[
		'shell:removeBuild',
		'shell:reinstallDemo',
		'pageres'
	]);
	grunt.registerTask('optimize',
	[
		'imagemin'
	]);
	grunt.registerTask('deploy',
	[
		'ftpress:deploy'
	]);
};
