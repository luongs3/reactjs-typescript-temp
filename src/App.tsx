import React, { useCallback, useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { IResolveParams, LoginSocialTwitter } from 'reactjs-social-login'
import { TwitterLoginButton } from 'react-social-login-buttons'
import axios from 'axios'

const REDIRECT_URI = 'http://localhost:3000/auth/twitter'

function App() {
  const [provider, setProvider] = useState('')
  const [profile, setProfile] = useState<any>()
  useEffect(() => {
    getProfile()
  }, [])

  const handleLogin = () => {
    // Redirect to the backend endpoint for Twitter authentication
    window.location.href = 'http://localhost:3000/auth/twitter'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>

      <TwitterLoginButton onClick={handleLogin} />
    </div>
  )
}

async function getProfile() {
  try {
    const { data } = await axios.get('http://localhost:3000/auth/profile', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization:
          'OAuth oauth_consumer_key=MSUPd5D1gZvFPAQi5xyjOfXnq, oauth_token=3539757134-urLTw9f1dsQQtAQCTpGApBQMuNRtp9NefpisNKB',
      },
    })
    console.log('data', data)
  } catch (ex) {
    console.log('ex', ex)
  }
}

export default App

// consumerKey="MSUPd5D1gZvFPAQi5xyjOfXnq"
// consumerSecret="4aybHApjGLxJxIpXEY4XLM5PzRqrVa4cl7fWAtV22DSYw5AcLw"
