import React, { useState } from 'react';
import Login from './Login';
import Chat from './Chat';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? <Chat user={user} /> : <Login setUser={setUser} />}
    </div>
  );
};

export default App;
