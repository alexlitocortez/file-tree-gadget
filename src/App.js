
import React from 'react';

function App() {
  return <div>
    <h3>hello world!!!</h3>
    <h4>goodbye</h4>
    <Folder />
  </div>
}

const Folder = () => {
  const name = 'my_desktop'
  return <h4>{name}</h4>
}

export default App;
