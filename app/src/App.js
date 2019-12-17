import React from 'react';
import TemplatePage from './components/common/templatePage';
import TodoContainer from './containers/todoContainer';
import AddToDo from './components/addToDo';
import TodoPage  from './components/todoPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
      <TemplatePage>
        <Switch>
          <Route path="/addtodo">
            <AddToDo />
            <TodoContainer/>
          </Route>
          <Route path="/todo/:number">
            <TodoPage/>
          </Route>
          <Route path="/">
            <TodoContainer/>
          </Route>
        </Switch>
      </TemplatePage>
      </Router>
    </div>
  );
}

export default App;
