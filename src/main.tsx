import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import cubejs from "@cubejs-client/core";
import { CubeProvider } from "@cubejs-client/react";

const cubejsApi = cubejs(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTA3OTMwNDN9.by1HD6M6l-g0pTEWRaXvYwsSWFdSI9VejrTdOGOodPM',
  { apiUrl: 'https://silver-quelea.gcp-europe-west3-a.cubecloudapp.dev/cubejs-api/v1' }
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CubeProvider cubejsApi={cubejsApi}>
      <App />
    </CubeProvider>
  </React.StrictMode>,
)
