import AltContainer from 'alt-container'
import React from 'react';
import LaneStore from '../stores/LaneStore'
import Lanes from './Lanes'
import LaneActions from '../actions/LaneActions'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button className="add-lane" onClick={this.addItem}>+</button>
        <AltContainer
          stores={[LaneStore]}
          inject={{
            items: () => LaneStore.getState().lanes || []
          }}
        >
          <Lanes />
        </AltContainer>
      </div>
    );
  }
  addItem() {
    LaneActions.create({name: 'New lane'});
  }
}
