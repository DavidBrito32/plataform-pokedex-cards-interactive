import  Router  from "./routes/Router";
import { HooksProvider } from "./context/HooksProvider";
import {HashRouter} from 'react-router-dom';
const App = () => {

  return (    
    <>
    <HashRouter>
      <HooksProvider>
        <Router />
      </HooksProvider>
    </HashRouter>
    </>
  )
}

export default App;
