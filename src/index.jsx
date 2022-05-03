import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import Global from './functions/Global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   // <React.StrictMode>
   <>
      <Global />
      <App />
   </>
   // </React.StrictMode>
);
