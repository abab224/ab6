import React, { useState } from 'react';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password.length === 4) {
      setUser({ username, password });
    } else {
      alert('有効なユーザー名と4桁のパスワードを入力してください。');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>ログイン</h2>
      <input
        type="text"
        placeholder="ユーザー名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ display: 'block', margin: '10px auto', padding: '10px' }}
      />
      <input
        type="password"
        placeholder="4桁のパスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        maxLength="4"
        style={{ display: 'block', margin: '10px auto', padding: '10px' }}
      />
      <button onClick={handleLogin} style={{ padding: '10px 20px' }}>
        ログイン
      </button>
    </div>
  );
};

export default Login;
