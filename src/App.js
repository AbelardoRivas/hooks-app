import React, { useState } from 'react';

import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';

const app = props => {
  const [page, setPage] = useState('auth');

  const swithPage = (pageName) => {
    setPage(pageName);
  }

  return (
    <div className="App">
      <Header 
        onLoadTodos={swithPage.bind(this, 'todos')} 
        onLoadAuth={swithPage.bind(this, 'auth')} 
      />
      <hr />
      {page === 'auth' ? <Auth /> : <Todo />} 
    </div>
  );
};

export default app;
