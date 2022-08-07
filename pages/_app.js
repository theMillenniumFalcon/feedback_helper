import { AuthProvider } from "../lib/auth"
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { myTheme } from "../styles/theme"
import { extendTheme } from '@chakra-ui/react'
import Head from 'next/head'
import { Global, css } from '@emotion/react'

const theme = extendTheme({ myTheme })

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  )
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
