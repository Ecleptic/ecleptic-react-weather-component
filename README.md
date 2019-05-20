# ecleptic-react-weather-component

[![npm (scoped)](https://img.shields.io/npm/v/ecleptic-react-weather-component.svg)](https://www.npmjs.com/package/ecleptic-react-weather-component) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/ecleptic-react-weather-component.svg)](https://www.npmjs.com/package/ecleptic-react-weather-component) [![install size](https://packagephobia.now.sh/badge?p=ecleptic-react-weather-component)](https://packagephobia.now.sh/result?p=ecleptic-react-weather-component)

Just learning how to build NPM packages

A Basic react component that pulls the weather from [openweathermap.org](https://openweathermap.org/api)

Required Props: `APIKEY`, `ZIP` Required Peer Dependencies:

- [React](https://www.npmjs.com/package/react)
- [React Dom](https://www.npmjs.com/package/react-dom)
- [Styled Components](https://www.npmjs.com/package/styled-components)

usage:

```jsx
import React from 'react'
import Weather from 'ecleptic-react-weather-component'

function App(){
  ...

  <Weather zip={ZIP} APIKEY={APIKEY} />

  ...
}
export default App
```

## [2.0.0] - 2019-05-20

### Created Peer depencies

- Instead of being Bundled, React,React-Dom, & styled-components are now peer dependencies instead

## [1.0.0] - 2019-04-24

### Initial Commit

- Created Basic API Props needing ZIP & API token
