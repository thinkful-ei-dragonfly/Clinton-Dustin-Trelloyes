
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';


describe('List Component', () => {

  it('Renders without Crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List cards={[{ title: 'Twelth card', content: 'lorem ipsum' },
    {title: 'Thirteenth card', content: 'lorem ipsum' }]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () =>{
    const tree = renderer
      .create(<List 
        key = {0}
        header={'header'}
        cards={[{ title: 'Twelth card', content: 'lorem ipsum' },
              {title: 'Thirteenth card', content: 'lorem ipsum' }]}
            />)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });

});
