import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading ......</p>}>
        <Routes>
          <Route path={ROUTES.Login} Component={Login}/>
        </Routes>
      </Suspense>
      
    </Router>
  );
}

export default App;
