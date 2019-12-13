import React from 'react';
import TemplatePage from './components/common/templatePage';
import TodoContainer from './containers/todoContainer';

function App() {
  return (
    <div className="app">
      <TemplatePage>
        <TodoContainer/>
      </TemplatePage>
    </div>
  );
}

export default App;
