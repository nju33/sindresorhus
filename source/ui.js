'use strict';
const chalk = require('chalk');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: chalk.bgYellow.black(' Website '),
		url: 'https://nju33.com'
	},
	{
		label: chalk.white('Style Guide'),
		url: 'https://github.com/nju33/styleguide'
	},
	{
		label: chalk.white(' | TypeScript / JavaScript'),
		url: 'https://github.com/nju33/styleguide/blob/master/js.md'
	},
	{
		label: chalk.white(' | Styled Components / Sass(Scss) / CSS'),
		url: 'https://github.com/nju33/styleguide/blob/master/css.md'
	},
	{
		label: chalk.white('GitHub'),
		url: 'https://github.com/nju33'
	},
	{
		label: chalk.green('Qiita'),
		url: 'https://qiita.com/nju33'
	},
	{
		label: chalk.red('npm'),
		url: 'https://www.npmjs.com/~nju33'
	},
	{
		label: chalk.blue('Findy'),
		url: 'https://findy-code.io/share_profiles/mj1FnGAPvkbpJ'
	},
	{
		label: chalk.cyan('Twitter'),
		url: 'https://twitter.com/nju33_ki'
	},
	{
		label: chalk.magenta('coconala'),
		url: 'https://coconala.com/users/72768'
	},
	{
		label: chalk.blue('Paypal.me'),
		url: 'https://www.paypal.me/nju33'
	},
	{
		label: chalk.yellow('Ko-fi'),
		url: 'https://ko-fi.com/nju33_ki'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<div>
				<Text>純(nju33) 26♂</Text>
			</div>
			<div>
				<Text>JavaScriptで生きていきたい</Text>
			</div>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
