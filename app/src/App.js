import React from 'react';
import TemplatePage from './components/common/templatePage';
import TodoContainer from './containers/todoContainer';
import AddToDo from './components/addToDo';

function App() {
  return (
    <div className="app">
      <TemplatePage>
        <AddToDo />
        <TodoContainer/>
      </TemplatePage>
    </div>
  );
}

export default App;
