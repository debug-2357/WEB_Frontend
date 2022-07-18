import React from 'react';
import AppLayout from '../components/AppLayout';
import '../public/css/styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <AppLayout>
      <Component />
    </AppLayout>
  );
};
export default App;
