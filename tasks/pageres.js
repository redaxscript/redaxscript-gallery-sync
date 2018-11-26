module.exports = () =>
{
	'use strict';

	const config =
	{
		desktop:
		{
			options:
			{
				sizes:
				[
					'1024x768'
				],
				dest: 'build/desktop'
			}
		},
		mobile:
		{
			options:
			{
				sizes:
				[
					'320x480'
				],
				dest: 'build/mobile'
			}
		},
		options:
		{
			urls:
			[
				'https://demo.redaxscript.com',
				'https://demo.redaxscript.com/login'
			],
			format: 'jpg',
			crop: true
		}
	};

	return config;
};