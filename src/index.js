import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getIcons, useFetch } from './utils'

const Title = styled.h4`
	padding: 10px;
	margin: 0;
`
const WeatherContainer = styled.div`
	display: flex;
	align-items: center;
`

function Weather({ zip, APIKEY }) {
	const [weather, setWeather] = useState()
	// const [weather, loading] = useFetch(
	// 	`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${APIKEY}`
	// )

	useEffect(() => {
		// const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${APIKEY}`)
		if (!zip) {
			console.error('Please add a us zip code')
			return
		}
		if (!APIKEY) {
			console.error(
				'Please add an api key from https://openweathermap.org/api'
			)
			return
		}

		fetch(
			`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${APIKEY}`
		)
			.catch(error => {
				console.error('whoops!', error)
				return
			})
			.then(res => {
				res.json()
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

		// const data = await response.json()
		// if (data.cod === 401 || data === '404') {
		// 	console.error(json.message)
		// }else{
		// 	setfWeather(data)
		// }
		return () => {}
	}, [])

	return (
		<React.Fragment>
			{!weather ? (
				<React.Fragment>...</React.Fragment>
			) : (
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
