import React from 'react';
import TemplatePage from './components/common/templatePage';
import AddToDo from './components/addToDo';
import ToDoCard from './components/todoCard';


function App() {
  return (
    <div className="app">
      <TemplatePage>
        <div className='m-b-40 m-t-40'>
          <AddToDo />
        </div>
        <div className='m-b-40'>
          <ToDoCard />
        </div>
      </TemplatePage>
    </div>
  );
}

export default App;
