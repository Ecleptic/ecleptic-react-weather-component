import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getIcons, getWeather } from './utils'

const Title = styled.h4`
	padding: 10px;
	margin: 0;
`
const WeatherContainer = styled.div`
	display: flex;
	align-items: center;
`

const Weather = ({ zip, APIKEY }) => {
	const [weather, setWeather] = useState()
	useEffect(() => {
		if (!zip && !APIKEY) throw 'Please add a "zip" and "APIKEY" prop'
		if (!zip) throw 'Please Input a prop "zip"'
		if (!APIKEY) throw 'Please get an "APIKEY" from https://openweathermap.org/api'

		fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${APIKEY}`)
			.then(results => results.json())
			.then(data => {
				if (data.cod === '404' || data.cod === 401) {
					throw data.message
				} else {
					setWeather(data)
				}
			})
			.catch(error => {
				console.log(error)
			})
		return () => {}
	}, [])
	return (
		<React.Fragment>
			{weather && (
				<WeatherContainer>
					<Title>{weather.name}</Title>
					{getIcons(weather.weather[0].icon)}
				</WeatherContainer>
			)}
		</React.Fragment>
	)
}

Weather.propTypes = {
	zip: PropTypes.string,
	APIKEY: PropTypes.string
}

export default Weather
