'use strict';
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
		label: 'Curriculum Vitae',
		url: 'https://github.com/nju33/Curriculum-Vitae/blob/master/README.md'
	},
	{
		label: 'Website',
		url: 'https://nju33.work'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/nju33_ki'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/nju33'
	},
	{
		label: 'Qiita',
		url: 'https://qiita.com/nju33'
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
			<Text>JavaScriptで生きていきたい</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
