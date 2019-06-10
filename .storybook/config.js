import React from 'react'
import { storiesOf, configure, addDecorator, addParameters } from '@storybook/react'
import { Global, ThemeProvider, themes, createReset, create, convert } from '@storybook/theming'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/)
// addParameters({
// 	options: {
// 		// theme: themes.dark
// 	}
// })
function loadStories() {
	req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
