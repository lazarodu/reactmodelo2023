import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./styles/GlobalStyle"
import { RouteSoftware } from "./routes"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RouteSoftware />
    </BrowserRouter>
  )
}

export default App
