import React from 'react';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>User Management</h1>
      <UserList />
    </div>
  );
}

export default App;
