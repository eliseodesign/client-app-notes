import { LANDING_PATH } from "./utils/path";
import Routing from './views/routing';

function App() {
  const currentUrl = window.location.pathname.split('/');
  if (currentUrl.every(elem => elem === '')) window.location.assign(LANDING_PATH);

  return (
    <div>
     <Routing />
    </div>
  )
}

export default App
