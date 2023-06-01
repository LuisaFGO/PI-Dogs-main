import { Route, BrowserRouter, Switch} from "react-router-dom";

import Detail from './views/detail/detail.component';
import Home from './views/home/home.component';
import Form from './views/form/form.component';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        < Switch>
          < Route exact path= "/home" component={Home} />
          < Route path="/home/:id" component={Detail} />
          < Route path="/form" component={Form} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
