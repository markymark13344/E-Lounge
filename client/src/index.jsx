import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap'
import App from './App';
import { Alert } from './assets/components/Alert';
import { AppProvider } from './Globals/appContext';
import FormRow from './assets/components/FormRow';
export {FormRow};


<style>
  @import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@1,700&display=swap');
</style>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

