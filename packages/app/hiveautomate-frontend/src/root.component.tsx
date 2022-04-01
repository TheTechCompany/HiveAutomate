import { AuthProvider } from '@hexhive/auth-ui'
import { Grommet } from 'grommet';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BaseStyle } from '@hexhive/styles'
import { App } from './App';

export default function Root(props) {
  return (<AuthProvider
  authorizationServer={process.env.NODE_ENV == 'production' ? (process.env.REACT_APP_API || "https://staging-api.hexhive.io") : 'http://localhost:7000'}>
    <Router basename={process.env.PUBLIC_URL}>
    <Grommet style={{width: '100%', height: '100%'}} theme={BaseStyle}>
      <Route path="/" element={<App/>} />
    </Grommet>
    </Router>
  </AuthProvider>
  )
}
