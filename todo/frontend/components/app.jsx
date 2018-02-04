import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoListContainer from './todo_list_container';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// muiTheme={getMuiTheme(darkBaseTheme)}

const App = () => (
  <MuiThemeProvider>
    <div className="app">
      <h1 className="title">Chris Bigelow's Todo List</h1>
      <TodoListContainer />
    </div>
  </MuiThemeProvider> 
);

export default App;