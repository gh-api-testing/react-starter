import { Global } from '@emotion/core'
import globalStyles from './global-styles'

const Head = () => (
  <>
    <title>My App</title>
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Assistant:200,300,400,600,700,800&display=swap"
    />
    <Global styles={globalStyles}/>
  </>
)

export default Head
