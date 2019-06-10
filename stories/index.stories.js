import React from 'react'
import { storiesOf } from '@storybook/react'

import Weather from '../src/index'

// console.log('key:', process.env.APIKEY)

storiesOf('Weather - Passing', module)
	.add('Using Zip-94016 & API', () => <Weather zip="94016" APIKEY={process.env.APIKEY} />)
	.add('Using Zip-10001 & API', () => <Weather zip="10001" APIKEY={process.env.APIKEY} orderFlipped={true} />)

storiesOf('Weather - Failing', module)
	.add('Using Zip & incorrect API', () => <Weather zip="10001" APIKEY="thisiswrong" />)
	.add('Using incorrect Zip & API', () => <Weather zip="123" APIKEY={process.env.APIKEY} />)
	.add('Using incorrect Zip & incorrect API', () => <Weather zip="123" APIKEY="thisiswrong" />)
	.add('Using blank Zip & API', () => <Weather zip="" APIKEY={process.env.APIKEY} />)
	.add('Using Zip & blank API', () => <Weather zip="10001" APIKEY="" />)
	.add('Without Zip', () => <Weather APIKEY={process.env.APIKEY} />)
	.add('Without APIKEY', () => <Weather zip="10001" />)
	.add('Without props', () => <Weather />)
