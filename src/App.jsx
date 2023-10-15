import  Router  from "./routes/Router";
import { HooksProvider } from "./context/HooksProvider";

const App = () => {

  return (    
    <>
      <HooksProvider>
        <Router />
      </HooksProvider>
    </>
  )
}

export default App;
