# [ecleptic-react-weather-component](https://www.npmjs.com/package/ecleptic-react-weather-component)

[![npm (scoped)](https://img.shields.io/npm/v/ecleptic-react-weather-component.svg)](https://www.npmjs.com/package/ecleptic-react-weather-component) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/ecleptic-react-weather-component.svg)](https://www.npmjs.com/package/ecleptic-react-weather-component) [![install size](https://packagephobia.now.sh/badge?p=ecleptic-react-weather-component)](https://packagephobia.now.sh/result?p=ecleptic-react-weather-component)

Just learning how to build NPM packages

A Basic react component that pulls the weather from [openweathermap.org](https://openweathermap.org/api)

Required Props: `APIKEY`, `ZIP` Required Peer Dependencies:

- [React](https://www.npmjs.com/package/react)
- [React Dom](https://www.npmjs.com/package/react-dom)

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

## [2.0.1] - 2019-05-21

### Removed Styled Components from dependency tree

- Styled components was doing very small layout changes. It is better to just have some inline styling in the JSX than have a large library as a peer dependency.

## [2.0.1] - 2019-05-20

### Changed Build target

- Webpack was originally building to an html file for some reason. (Don't copy & paste docs code kids) Changed it back to building to an index.js and that worked.

## [2.0.0] - 2019-05-20

### Created Peer dependencies

- Instead of being Bundled, React, React-Dom, & Styled-Components are now peer dependencies instead.

## [1.0.0] - 2019-04-24

### Initial Commit

- Created Basic API Props needing ZIP & API token
