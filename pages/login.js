import React from 'react';

const CLIENT_ID='1109915781707350016'
const REDIRECT_URL='http://localhost:3000/api/oauth/discord'

const LoginPage = () => {
    
  const handleLogin = () => {
    window.location.href = `https://discord.com/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&scope=identify&redirect_uri=${REDIRECT_URL}`; // Adjust the scope as needed
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <button onClick={handleLogin}>Login with Discord</button>
    </div>
  );
};

export default LoginPage;
