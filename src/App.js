import React from 'react'
import { hot } from 'react-hot-loader'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const globalStyles = css`
  body {
    margin: 0;
    font-family: 'Assistant', sans-serif;
  }
`

const Container = styled.div`
  background-color: #fff;
`

const App = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <title>My App</title>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Assistant:200,300,400,600,700,800&display=swap"
          />
        </Helmet>
        <Global styles={globalStyles}/>
        <h1>👋 🌎</h1>
      </Container>
    </HelmetProvider>
  )
}

export default hot(module)(App)
