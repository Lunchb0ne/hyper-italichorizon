'use strict';
const foregroundColor   = '#eff0eb';
const backgroundColor   = '#282a36';
const cursorAccentColor = '#6C6F93';
const red               = '#E95678';
const green             = '#29D398';
const yellow            = '#FAB795';
const blue              = '#26BBD9';
const magenta           = '#EE64AC';
const cyan              = '#59E1E3';
const lightred          = '#E95678';
const lightgreen        = '#29D398';
const lightyellow       = '#FAB795';
const lightblue         = '#26BBD9';
const lightmagenta      = '#EE64AC';
const lightcyan         = '#59E1E3';


exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: '#232530',
	cursorColor: '#E95378',
	cursorAccentColor,
	selectionColor: 'rgba(233, 83, 120, 0.4)',
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white: '#bbbbbb',
		lightBlack: '#6C6F93',
		lightRed: lightred,
		lightGreen: lightgreen,
		lightYellow: lightyellow,
		lightBlue: lightblue,
		lightMagenta: lightmagenta,
		lightCyan: lightcyan,
		lightWhite: foregroundColor
	},
	css: `
		/* Hide title when only one tab */
		.tabs_title {
			display: none !important;
		}
		/* Add a highlight line below the active tab */
		.tab_tab::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1px;
			background-color: #E95378;
			transform: scaleX(0);
			will-change: transform;
		}
		.tab_tab.tab_active::before {
			transform: scaleX(1);
			transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
		}
		/* Fade the title of inactive tabs and the content of inactive panes */
		.tab_text,
		.term_term {
			opacity: 0.6;
			will-change: opacity;
		}
		.tab_active .tab_text,
		.term_active .term_term {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
		}
		/* Allow custom css / overrides */
		${config.css}
	`
});