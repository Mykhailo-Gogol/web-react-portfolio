import { Switch, Route } from "react-router-dom";

import { app_wrapper,page_wrapper } from "./App.module.css";

import NavbarPrimary from "./components/NavbarPrimary";

import ReactPhonebook from "./pages/ReactPhonebook";
import ReactMovies from "./pages/ReactMovies";
import CodeEditor from "./pages/CodeEditor";
import FirebaseApp from "./pages/FirebaseApp";

function App() {
  return (
    <div className={app_wrapper}>
      <div>
        <NavbarPrimary />
      </div>
      <div className={page_wrapper}>
        <Switch>
          <Route exact path="/">
            <ReactPhonebook />
          </Route>
          <Route path="/code_editor">
            <CodeEditor />
          </Route>
          <Route path="/react_movies">
            <ReactMovies />
          </Route>
           <Route path="/firebase_app">
            <FirebaseApp />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
