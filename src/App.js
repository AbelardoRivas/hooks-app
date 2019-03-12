import React, { useState } from 'react';

import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';
import AuthContext from './auth-context';

const app = props => {
  const [page, setPage] = useState('auth');
  const [authStatus, setAuthStatus] = useState(false);

  const swithPage = (pageName) => {
    setPage(pageName);
  };

  const login = () => {
    setAuthStatus(true);
  };

  return (
    <div className="App">
    <AuthContext.Provider value={{status: authStatus, login: login}}>
      <Header 
        onLoadTodos={swithPage.bind(this, 'todos')} 
        onLoadAuth={swithPage.bind(this, 'auth')} 
      />
      <hr />
      {page === 'auth' ? <Auth /> : <Todo />} 
    </AuthContext.Provider>
    </div>
  );
};

export default app;
