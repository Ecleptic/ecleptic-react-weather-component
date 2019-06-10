import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { getIcons } from './utils'

const titleStyles = {
	padding: '10px',
	margin: '0'
}

function Weather({ zip, APIKEY, orderFlipped }) {
	const [weather, setWeather] = useState()

	const weatherContainerStyles = {
		display: 'flex',
		alignItems: 'center',
		flexDirection: `${orderFlipped ? 'row-reverse' : 'row'}`
	}
	useEffect(() => {
		if (!zip) {
			console.error('Please add a us zip code')
			return
		}
		if (!APIKEY) {
			console.error('Please add an api key from https://openweathermap.org/api')
			return
		}

		fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${APIKEY}`)
			.catch(error => {
				console.error('whoops!', error)
				return
			})
			.then(res => {
				res
					.json()
					.catch(error => {
						console.error('ok', error)
						return
					})
					.then(data => {
						if (data.cod === 401 || data.cod === '404') {
							console.error(data.message)
						} else {
							setWeather(data)
						}
					})
			})
		return () => {}
	}, [])

	return (
		<>
			{!weather ? (
				<>...</>
			) : (
				<div style={weatherContainerStyles}>
					<h4 style={titleStyles}>{weather.name}</h4>
					{getIcons(weather.weather[0].icon)}
				</div>
			)}
		</>
	)
}

Weather.propTypes = {
	zip: PropTypes.string,
	APIKEY: PropTypes.string
}

export default Weather
