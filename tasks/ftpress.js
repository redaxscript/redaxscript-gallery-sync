module.exports = () =>
{
	'use strict';

	const config =
	{
		deploy:
		{
			src:
			[
				'build'
			],
			dest: 'www/htdocs/w00976cb/redaxscript/_gallery',
			options:
			{
				url: process.env.FTP_URL,
				command:
				[
					'mirror {SOURCE} {TARGET}-new-{TIMESTAMP} --reverse --delete-first --parallel=10 --use-pget-n=10',
					'mv {TARGET} {TARGET}-old-{TIMESTAMP}',
					'mv {TARGET}-new-{TIMESTAMP} {TARGET}',
					'rm -rf {TARGET}-old-{TIMESTAMP}',
					'exit'
				]
			}
		}
	};

	return config;
};
