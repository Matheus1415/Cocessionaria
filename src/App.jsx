import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import styled, { ThemeProvider } from "styled-components";
import {Theme} from './style/theme'
import { Global } from "./style/Global";
import './App.css'

function App () {
  return (
    <ThemeProvider theme={Theme}>
        <Global/>
        <RouterProvider router={router} />
    </ThemeProvider>
  )
} 

export default App
