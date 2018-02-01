import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoListContainer from './todo_list_container';

const App = () => (
  <MuiThemeProvider>
    <div className="app">
      <h1>Chris Bigelow's Todo List</h1>
      <TodoListContainer />
    </div>
  </MuiThemeProvider> 
);

export default App;