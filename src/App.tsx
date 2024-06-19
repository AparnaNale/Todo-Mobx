// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import TodoList from './components/TodoList';
import { Container,Typography } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Todo List
      </Typography>
      <TodoList />
    </Container>
  );
};

export default App;
