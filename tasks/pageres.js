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
					'1920x1080'
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
					'480x640'
				],
				dest: 'build/mobile'
			}
		},
		options:
		{
			urls:
			[
				'https://demo.redaxscript.com',
				'https://demo.redaxscript.com?p=search/vero',
				'https://demo.redaxscript.com?p=login',
				'https://demo.redaxscript.com?p=module/demo/login&redirect=admin/view/articles',
				'https://demo.redaxscript.com?p=module/demo/login&redirect=admin/edit/articles/1',
				'https://demo.redaxscript.com?p=module/demo/login&redirect=admin/new/articles',
				'https://demo.redaxscript.com?p=module/demo/login&redirect=admin/view/users',
				'https://demo.redaxscript.com?p=module/demo/login&redirect=admin/edit/users/1',
				'https://demo.redaxscript.com?p=module/demo/login&redirect=admin/new/users',
				'https://demo.redaxscript.com?p=module/demo/login&redirect=admin/view/groups',
				'https://demo.redaxscript.com?p=module/demo/login&redirect=admin/edit/groups/2',
				'https://demo.redaxscript.com?p=module/demo/login&redirect=admin/new/groups',
				'https://demo.redaxscript.com?p=module/demo/login&redirect=admin/edit/settings'
			],
			format: 'jpg',
			delay: 2,
			crop: true
		}
	};

	return config;
};