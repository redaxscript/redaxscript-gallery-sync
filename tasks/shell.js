module.exports = () =>
{
	const config =
	{
		reinstallDemo:
		{
			command: 'curl https://demo.redaxscript.com/module/demo/reinstall'
		},
		removeBuild:
		{
			command: 'rm -rf build'
		},
		options:
		{
			stdout: true,
			failOnError: true
		}
	};

	return config;
};
