module.exports = () =>
{
	'use strict';

	const config =
	{
		images:
		{
			src:
			[
				'build/**/*.jpg'
			],
			expand: true
		}
	};

	return config;
};