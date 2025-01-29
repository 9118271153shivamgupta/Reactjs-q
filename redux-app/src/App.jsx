import React from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { myStore } from './redux/store';

const App = () => {
  return (
    <div>
        <h1> this is redux -app</h1>
        <Provider store={myStore}>
            <Counter/>
        </Provider>
    </div>
  )
}

export default App
