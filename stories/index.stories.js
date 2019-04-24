import React from 'react'

import { storiesOf } from '@storybook/react'

import Weather from '../src/index'

storiesOf('Weather', module).add('Using Zip-94016 & API', () => <Weather zip="94016" APIKEY={process.env.APIKEY} />)
storiesOf('Weather', module).add('Using Zip-10001 & API', () => <Weather zip="10001" APIKEY={process.env.APIKEY} />)
storiesOf('Weather', module).add('Using Zip & incorrect API', () => <Weather zip="10001" APIKEY="thisiswrong" />)
storiesOf('Weather', module).add('Using incorrect Zip & API', () => <Weather zip="123" APIKEY={process.env.APIKEY} />)
storiesOf('Weather', module).add('Using incorrect Zip & incorrect API', () => <Weather zip="123" APIKEY="thisiswrong" />)
storiesOf('Weather', module).add('Using blank Zip & API', () => <Weather zip="" APIKEY={process.env.APIKEY} />)
storiesOf('Weather', module).add('Using Zip & blank API', () => <Weather zip="10001" APIKEY="" />)
storiesOf('Weather', module).add('Without Zip', () => <Weather APIKEY={process.env.APIKEY} />)
storiesOf('Weather', module).add('Without APIKEY', () => <Weather zip="10001" />)
storiesOf('Weather', module).add('Without props', () => <Weather />)
storiesOf('somethingElse', module).add('uhhhh', () => <div>reset</div>)
