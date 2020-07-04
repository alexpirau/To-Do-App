import React from 'react';
import './App.scss';
import Layout from './Layout/Layout';
import TodoBody from './Components/TodoBody/TodoBody'

function App() {
  return (
    <>
      <Layout>
        <TodoBody />
      </Layout>
    </>
  );
}

export default App;
