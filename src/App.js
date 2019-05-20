import React from 'react';
import List from './List';
import STORE from './Store';
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
          {props.STORE.lists.map(list =>
            <List 
              header={list.header}
              cards={list.cardIds.map(id => STORE.allCards[id])}
            />
            )}
        </div>
      </main>
    )
}