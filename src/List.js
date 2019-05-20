import React from 'react';
import Card from './Card';


function List(props){
  
  //.map over an array to create JSX content
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className ="List-cards">
        {props.cards.map((card) => 
          <Card 
            title={card.title}
            content={card.content}
            />      
          )}
      </div>
    </section>
  );
}