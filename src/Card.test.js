import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';


describe('Card Component', () => {

  it('Renders without Crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () =>{
    const tree = renderer
      .create(<Card 
        key={0}
        title={'title'}
        content={'content'}
        /> )
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
});