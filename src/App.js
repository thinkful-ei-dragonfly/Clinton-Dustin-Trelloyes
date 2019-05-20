import React from 'react';
import List from './List';
import './App.css';

function App(props){
  const defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };
    return (
      <main class="App">
        <header class="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {props.store.lists.map(list =>
            <List 
              key = {list.id}
              header={list.header}
              cards={list.cardIds.map(id => props.store.allCards[id])}
            />
            )}
        </div>
      </main>
    )
}

export default App;