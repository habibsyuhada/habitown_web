import "../styles/globals.css"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes"
import { Provider } from "react-redux";
import store from "../store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider value={defaultSystem}>
        <ThemeProvider attribute="class" disableTransitionOnChange themes={['light', 'dark']} defaultTheme="light">
          <Component {...pageProps} />
        </ThemeProvider>
      </ChakraProvider>
    </Provider>
  )
}
