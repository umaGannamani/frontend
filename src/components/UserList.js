import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const deleteUser = (id) => {
    fetch(`http://localhost:5000/api/users/${id}`, { method: 'DELETE' })
      .then(() => setUsers(users.filter((user) => user.id !== id)));
  };

  return (
    <div className="container">
      <UserForm
        editingUser={editingUser}
        setEditingUser={setEditingUser}
        setUsers={setUsers}
      />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} ({user.email}) - {user.department}
            <button className="button" onClick={() => setEditingUser(user)}>Edit</button>
            <button className="button" onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
