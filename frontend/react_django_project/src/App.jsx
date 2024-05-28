import React, { createContext, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PageContext = createContext(null);


const App = () => {

  const [viewIsTrue, setViewIsTrue] = useState(false);

  return (
    <>
      <ToastContainer />
      <PageContext.Provider value={[viewIsTrue, setViewIsTrue]} >
        <Header />
        <Body />
      </PageContext.Provider>
    </>
  )
}

export default App;
