import React from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'
import Head from './head'
import HelloWorld from './components/hello-world'

const App = () => (
  <>
    <Helmet>
      <Head/>
    </Helmet>
    <HelloWorld/>
  </>
)

export default App
