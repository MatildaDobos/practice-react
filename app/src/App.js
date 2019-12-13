import React from 'react';
import TemplatePage from './components/common/templatePage';
import AddToDo from './components/addToDo';
import Todos from './components/todos';


function App() {
  return (
    <div className="app">
      <TemplatePage>
        <div className='m-b-40 m-t-40'>
          <AddToDo />
        </div>
        <Todos />
      </TemplatePage>
    </div>
  );
}

export default App;
