import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import List from './List';
import store from './STORE';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List key={store.lists[0].id} header={store.lists[0].header} cards={store.lists[0].cardIds.map(id => store.allCards[id])} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//List snapshot test
it('renders the UI as expected', () =>{
  const listElement = store.lists[0];
  const tree = renderer.create(<List key={listElement.id} header={listElement.header} cards={listElement.cardIds.map(id => store.allCards[id])}/>).toJSON();
  expect(tree).toMatchSnapshot();
});