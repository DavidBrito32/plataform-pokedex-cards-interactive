import { HooksProvider } from "./context"
import Ways from "./routes"


const App = () => {

  return (
    <>
      <HooksProvider>
        <Ways />
      </HooksProvider>
    </>
  )
}

export default App
