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
	const [weather, loading] = useFetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${APIKEY}`)

	return (
		<React.Fragment>
			{loading ? (
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
